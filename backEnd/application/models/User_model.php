<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
	/**
	* User Model
	* includes: 
	*	- login -> array(Boolean, token(String))
	*	- logOut -> Boolean
	*	- register -> Boolean
	*	- isLoggedIn -> array(Boolean, array(token(String), description(String)))
	*	- isRegistered -> Boolean
	*	- getUserType -> String
	*/
	class User_model extends CI_Model{
		// user login method -> adds user to the users_loggedIn table
		public function login($provData)
		{
			$email 			= $this->db->escape($provData->email);
			$tokenS 		= bin2hex(openssl_random_pseudo_bytes(16));
			$token          = $this->db->escape($tokenS);
			$timeOut 		= new DateTime();
			$timeOut->add(new DateInterval('PT21600S'));
			$timeOut 		= $this->db->escape($timeOut->format('Y-m-d H:i:s'));
			$userExternalIp = $this->db->escape(get_client_ip());

			$sql = "INSERT INTO users_loggedIn (`user`, `token`, `timeOut`, `externalIP`)
					SELECT users.id, $token, $timeOut, $userExternalIp
					FROM users 
					WHERE users.email = $email";

			if($this->db->query($sql)){
				return array(true, $tokenS);
			}else{
				return array(false, '');
			}
		}
		// user logout method -> removes user from the users_loggedIn table and 
		// adds user to the users_loggedOut table
		public function logOut()
		{
			$token = $this->db->escape($this->input->post('userTokenId'));

			$this->db->trans_start();
			$sql = "INSERT INTO users_loggedOut (user, login_timestamp, externalIP)
					VALUES (
						(SELECT user FROM users_loggedIn WHERE token=$token),
						(SELECT `timestamp` FROM users_loggedIn WHERE token=$token),
						(SELECT externalIP FROM users_loggedIn WHERE token=$token))";
			$this->db->query($sql);
			$sql = "DELETE FROM users_loggedIn
					WHERE token=$token";
			$this->db->query($sql);
			$this->db->trans_complete();

			if ($this->db->trans_status() === FALSE)
			{
				return false;
			}else{
				return true;
			}
		}	
		public function register($provData)
		{
			$googleUID = $this->db->escape($provData->uid);
			$name	   = $this->db->escape($provData->displayName);
			$email	   = $provData->email;
			$confCode  = $this->db->escape(md5($email.time()));
			$email     = $this->db->escape($email);
			$avatar	   = $this->db->escape($provData->photoUrl);


			$sql = "INSERT INTO users (`googleUID`, `name`, `email`, `confId`, `avatar`)
					VALUES ($googleUID, $name, $email, $confCode, $avatar)";

			if($this->db->query($sql)){
				return true;
			}else{
				return false;
			}
		}
		public function getProfileData()
		{
			$email = $this->db->escape($this->input->post('userEmail'));

			$sql = "SELECT u.id, u.googleUID, u.name, u.email, u.avatar, uat.description, IF(ISNULL((SELECT timestamp FROM users_loggedIn WHERE user = u.id)), 0, 1) AS 'active', IFNULL((SELECT timestamp FROM users_loggedIn WHERE user = u.id), (SELECT login_timestamp FROM users_loggedOut WHERE user = u.id)) AS 'LastLogIN'
                    FROM users u, users_accountType uat
                    WHERE u.account_type = uat.id AND u.email = $email";

			$query = $this->db->query($sql);
			$row   = $query->row();
			
			if(!empty($row)){
				return array(true, $row);
			}else{
				return array(false, '');
			}
		}
		public function changeUserType()
		{
			$uid        = $this->db->escape($this->input->post('uid'));
			$acountType = $this->db->escape($this->input->post('type'));

			$sql = "UPDATE users
					SET account_type = $acountType
					WHERE googleUID = $uid";
			
			if($this->db->query($sql)){
				return true;
			}else{
				return false;
			}
		}
		// -------------EXTRA Aux functions
		public function isLoggedIn($uid)
		{
		    $this->loggedInUser_Cleaner();
			$uid = $this->db->escape($uid);

			$sql = "SELECT ul.token, uat.description
					FROM users_loggedIn ul, users u, users_accountType uat
					WHERE ul.user = u.id AND uat.id = u.account_type AND u.googleUID = $uid";

			$query = $this->db->query($sql);
			$row   = $query->row();
			
			if(!empty($row)){
				return array(true, array($row->token, $row->description));
			}else{
				return array(false, '');
			}
		}
		private function loggedInUser_Cleaner()
        {
            $sql = "SELECT *
                    FROM users_loggedIn
                    WHERE CURRENT_TIMESTAMP() > timeOut";
            $usersExpired = $this->db->query($sql);
            $usersExpired = $usersExpired->result_array();
            $this->db->trans_start();
            foreach($usersExpired as $key => $value){
                $sql = "INSERT INTO users_loggedOut (user, login_timestamp, externalIP)
                        VALUES (".$value['user'].",'".$value['timestamp']."','".$value['externalIP']."')";
                $this->db->query($sql);
                $sql = "DELETE FROM users_loggedIn
					    WHERE token='".$value['token']."'";
            $this->db->query($sql);
            }
            $this->db->trans_complete();
        }
		public function isRegistered($uid)
		{
			$uid = $this->db->escape($uid);

			$sql = "SELECT email
					FROM users
					WHERE googleUID = $uid";
			
			$query = $this->db->query($sql);
			$row   = $query->row();

			if(!empty($row)){
				return true;
			}else{
				return false;
			}
		}
		public function getUserType($uid)
		{
			$uid = $this->db->escape($uid);

			$sql = "SELECT description
					FROM users_accountType
					WHERE id = (SELECT account_type
								FROM users
								WHERE googleUID=$uid)";

			$query = $this->db->query($sql);
			$row   = $query->row();

			return $row->description;
		}
		public function getUserIdFromEmail($email)
		{
			$sql = "SELECT id
					FROM users
					WHERE email=$email";
			
			$query = $this->db->query($sql);
			$row   = $query->row();

			return $row->id;
		}
		public function getEmailFromToken($token)
		{
			$sql = "SELECT email
					FROM users
					WHERE id = (SELECT user
								FROM users_loggedIn
								WHERE token = $token)";
	
			$query = $this->db->query($sql);
			$row   = $query->row();

			return $row->email;
		}
		// ------------ SUPPORT for user_helper
		// checks if a user is still loggedin requires the user token
		public function userLoggedin($token)
		{
			$token = $this->db->escape($token);

			$sql = "SELECT token 
					FROM users_loggedIn 
					WHERE `timeOut` > CURRENT_TIMESTAMP AND token=$token";

			$query = $this->db->query($sql);
            $row   = $query->row();
			if(!is_null($row) && !is_null($row->token)){
				return true;
			}else{
				return false;
			}
		}
		// generates a new token for the user and postpones login time out for 6 hours
		public function generateNewToken($token)
		{
			$token     = $this->db->escape($token);
			$newTokenS = bin2hex(openssl_random_pseudo_bytes(16));
			$newToken  = $this->db->escape($newTokenS);
			$timeOut   = new DateTime();
			$timeOut->add(new DateInterval('PT21600S'));
			$timeOut   = $this->db->escape($timeOut->format('Y-m-d H:i:s'));

			$sql = "UPDATE users_loggedIn
					SET token=$newToken, `timeOut`=$timeOut
					WHERE token=$token";

			if($this->db->query($sql)){
				return array(true, $newTokenS);
			}else{
				return array(false, '');
			}
		}
		public function checksRouteAccess($sql)
		{
			$query = $this->db->query($sql);
			$row   = $query->row();

			if(!empty($row)){
				return true;
			}else{
				return false;
			}
		}
	}
?>