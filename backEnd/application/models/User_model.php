<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
	/**
	* User Model
	* includes: 
	*	- login -> array(Boolean, token(String))
	*	- logOut -> Boolean
	*	- register -> Boolean
	*	- isLoggedIn -> array(Boolean, array(token(String), description(String)))
	*	- isRegistered -> Boolean
	*	_ getUserType -> String
	*/
	class User_model extends CI_Model{
		// user login method -> adds user to the users_loggedIn table
		public function login()
		{
			$email 		= $this->db->escape($this->input->post('email'));
			$token 			= $this->db->escape(bin2hex(openssl_random_pseudo_bytes(16)));
			$timeOut 		= new DateTime();
			$timeOut->add(new DateInterval('PT21600S'));
			$timeOut 		= $this->db->escape($timeOut->format('Y-m-d H:i:s'));
			$userExternalIp = $this->db->escape(get_client_ip());

			$sql = "INSERT INTO users_loggedIn (`user`, `token`, `timeOut`, `externalIP`)
					SELECT users.id, $token, $timeOut, $userExternalIp
					FROM users 
					WHERE users.email = $email";

			if($this->db->query($sql)){
				return array(true, $token);
			}else{
				return array(false, '');
			}
		}
		// user logout method -> removes user from the users_loggedIn table and 
		// adds user to the users_loggedOut table
		public function logOut()
		{
			$token = $this->input->post('userTokenId');

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
		public function register()
		{
			$googleUID = $this->db->escape($this->input->post('uid'));
			$name	   = $this->db->escape($this->input->post('name'));
			$email	   = $this->input->post('email');
			$confCode  = $this->db->escape(md5($email.time()));
			$email     = $this->db->escape($email);
			$avatar	   = $this->db->escape($this->input->post('avatar'));


			$sql = "INSERT INTO users (`googleUID`, `name`, `email`, `confId`, `avatar`)
					VALUES ($googleUID, $name, $email, $confCode, $avatar)";

			if($this->db->query($sql)){
				return true;
			}else{
				return false;
			}
		}
		public function isLoggedIn($uid)
		{
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
	}
?>