<?php
defined('BASEPATH') OR exit('No direct script access allowed');
/*
 * User Loader controller
 * Available methods:
 * 	- logIn -> registers user if not already registered in db, RETURNS user first token and user type
 * 	- logOut -> logs user out and adds user to logout table (for logging)
 */
class UserLoader extends CI_Controller {

	public function __construct($config = 'rest')
	{
		header('Access-Control-Allow-Origin: *');
		header("Access-Control-Allow-Methods: GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE");
		// header("Access-Control-Allow-Headers: Content-Type");
		parent::__construct();

		$this->load->model('user_model');
		$this->load->library('firebase_lib');
	}
	// add the necessary fields for user login
	//login user by adding a line to the LoggedIn_Users table
	public function logIn()
	{
		$config = array(
			array (
					'field' => 'idToken',
					'label' => "User's Token",
					'rules' => 'trim|required'
			)
		);
		//verify if user is already loggedin
		$this->form_validation->set_rules($config);
		$this->form_validation->set_error_delimiters('', '');
		// var_dump($_POST);
		if($this->form_validation->run() === true){
			$result = $this->firebase_lib->verifyToken($this->input->post('idToken'));
			if(is_string($result)===FALSE){
				$provData = $result->providerData[0];
				if($this->user_model->isRegistered($provData->uid)===true){
					$this->loginHelper($provData);
				}else{
					if($this->user_model->register($provData)===true){
						$this->loginHelper($provData);
					}else{
						jsonExporter(500, 'Error completing signup process');
					}
				}
			}else{
				jsonExporter(403);
			}				
		}else{
			jsonExporter(405, validation_errors());
		}
	}
	// login's user in the database and generates ser first token
	private function loginHelper($provData)
	{
		// verificar se ja se encontra logado
		$result = $this->user_model->isLoggedIn($provData->uid);
		if($result[0]===true){
			$data = array(
				'token' => $result[1][0],
				'user_type' => $result[1][1]
			);
			jsonExporter(200, $data);
		}else{
			$result = $this->user_model->login($provData);
			if($result[0]===true){
				$data = array(
					'token' => $result[1],
					'user_type' => $this->user_model->getUserType($provData->uid)
				);
				jsonExporter(200, $data);
			}else{
				jsonExporter(500, 'Error completing login process');
			}
		}
	}
	//logout user by adding a line to the LoggedOut_Users Table 
	// and removing user from LoggedIn_Users table
	public function logOut()
	{
		$config = array(
			array(
					'field' => 'userTokenId',
					'label' => "User's Token",
					'rules' => 'trim'
			)
		);
		$this->form_validation->set_rules($config);
		$this->form_validation->set_error_delimiters('', '');
		if($this->form_validation->run() === true){
			if($this->user_model->logOut()===true){
				jsonExporter(200, array());
			}else{
				jsonExporter(500, 'Error completing logout process');
			}
		}else{
			jsonExporter(405, validation_errors());
		}
	}
	public function getUserProfile()
	{
		$config = array(
			array(
					'field' => 'userTokenId',
					'label' => "User's Token",
					'rules' => 'trim|required'
			),
			array(
					'field' => 'userEmail',
					'label' => "User's Email",
					'rules' => 'trim|required'
			)
		);
		$this->form_validation->set_rules($config);
		$this->form_validation->set_error_delimiters('', '');
		if($this->form_validation->run() === true){
			if(isUserLoggedIn($this->input->post('userTokenId'))===true){
				$token = $this->db->escape($this->input->post('userTokenId'));
				$email = $this->db->escape($this->input->post('userEmail'));
				$sql = "SELECT *
						FROM conf_routesAccess
						WHERE user_type = (SELECT account_type FROM users WHERE id = (SELECT user FROM users_loggedIn WHERE token = $token)) OR 
							(user_type = 30 AND (SELECT id FROM users WHERE email = $email) = (SELECT id FROM users WHERE id = (SELECT user FROM users_loggedIn WHERE token=$token)))";
				if(routeAccess($sql)===true){
					$result = $this->user_model->getProfileData();
					if($result[0]===true){
						$data = array(
							"token" => regenerateUserToken($this->input->post('userTokenId'))[1],
							"user" => array(
								"uid" => $result[1]->googleUID,
                                "id" => $result[1]->id,
								"name" => $result[1]->name,
								"email" => $result[1]->email,
								"avatar" => $result[1]->avatar,
								"user_type" => $result[1]->description,
                                "active"=> $result[1]->active,
                                "last_login"=> $result[1]->LastLogIN,
							)
						);
						jsonExporter(200, $data);
					}else{
						jsonExporter(500, 'Error gueting user profile');
					}
				}else{
					jsonExporter(403);
				}
			}else{
				jsonExporter(401);
			}
		}else{
			jsonExporter(405, validation_errors());
		}
	}
	// user/changeType
	public function updateUserType()
	{
		$config = array(
			array(
					'field' => 'userTokenId',
					'label' => "User's Token",
					'rules' => 'trim|required'
			),
			array(
					'field' => 'uid',
					'label' => "User's UID",
					'rules' => 'trim|required'
			),
			array(
					'field' => 'type',
					'label' => "User's user type",
					'rules' => 'trim|required'
			)
		);
		$this->form_validation->set_rules($config);
		$this->form_validation->set_error_delimiters('', '');
		if($this->form_validation->run() === true){
			if(isUserLoggedIn($this->input->post('userTokenId'))===true){
				$token = $this->db->escape($this->input->post('userTokenId'));
				$sql = "SELECT *
						FROM conf_routesAccess
						WHERE user_type = (SELECT account_type FROM users WHERE id = (SELECT user FROM users_loggedIn WHERE token = $token))";
				if(routeAccess($sql)===true){
					if($this->user_model->changeUserType()===true){
						$data = array(
							'token' => regenerateUserToken($this->input->post('userTokenId'))[1],
						);
						jsonExporter(200, $data);
					}else{
						jsonExporter(500, 'Error changing user account type');
					}
				}else{
					jsonExporter(403);
				}
			}else{
				jsonExporter(401);
			}
		}else{
			jsonExporter(405, validation_errors());
		}
	}
}
?>