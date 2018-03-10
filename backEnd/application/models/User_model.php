<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
	/**
	* User Model
	* includes: 
	*	- user registration
	*/
	class User_model extends CI_Model{
		public function login()
		{
			$googleUID 		= $this->db->escape($this->input->post('uid'));
			$userExternalIp = get_client_ip();
			$token 			= '';
			$timeOut		= time()+21600;

			$sql = "INSERT INTO users_loggedIn (`user`, `token`, `timeOut`, `externalIP`)
					VALUES ((SELECT user FROM users WHERE googleUID = $googleUID), $token, $timeOut, $userExternalIp)";
		}
		public function register()
		{
			$googleUID = $this->db->escape($this->input->post('uid'));
			$name	   = $this->db->escape($this->input->post('name'));
			$email	   = $this->input->post('email');
			$confCode  = $this->db->escape(md5($email.time()));
			$email     = $this->db->escape($email);
			$avatar	   = $this->db->escape($this->input->post('avatar'));
			$type	   = $this->db->escape($this->input->post('type'));


			$sql = "INSERT INTO users (`googleUID`, `name`, `email`, `confId`, `avatar`, `account_type`)
					VALUES ($googleUID, $name, $email, $confCode, $avatar, $type)";

			if($this->db->query($sql)){
				return true;
			}else{
				return false;
			}
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