<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
	/**
	* User Model
	* includes: 
	*	- user registration
	*/
	class User_model extends CI_Model{
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
		public function isRegistered($email)
		{
			$email = $this->db->escape($email);

			$sql = "SELECT email
					FROM users
					WHERE email = $email";
			
			$query = $this->db->query($sql);
			$row   = $query->row();

			if(!empty($row)){
				return true;
			}else{
				return false;
			}
		}
		public function isLoggedIn($email)
		{
			$email = $this->db->escape($email);

			$sql = "SELECT ul.token, uat.description
					FROM users_loggedIn ul, users u, users_accountType uat
					WHERE ul.user = u.id AND uat.id = u.account_type AND u.email = $email";

			$query = $this->db->query($sql);
			$row   = $query->row();
			
			if(!empty($row)){
				return array(true, array($row->token, $row->description));
			}else{
				return array(false, '');
			}
		}
		public function getUserType($email)
		{
			$email = $this->db->escape($email);

			$sql = "SELECT description
					FROM users_accountType
					WHERE id = (SELECT account_type
								FROM users
								WHERE email=$email)";

			$query = $this->db->query($sql);
			$row   = $query->row();

			return $row->description;
		}
		private function getLoggedInUserId()
		{
			$userTokenId = $this->db->escape($this->input->post('userTokenId'));

			$sql = "SELECT `user`
					FROM users_loggedIn
					WHERE token = $userTokenId";

			$query = $this->db->query($sql);
			$row   = $query->row();
			if($query & isset($row)){
				return array(true, $row->user);
			}else{
				return array(false, "");
			}
		}
		private function getUserProfile($userId)
		{
			$userId = $this->db->escape($userId);

			$sql = "SELECT `name`, `email`, `avatar`, `account_type`
					FROM users
					WHERE id = $userId";
			
			$query = $this->db->query($sql);
			$row   = $query->row();
			if (isset($row)){
				return array(true, $row);
			}else{
				return array(false, '');
			}
		}
	}
?>