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
		header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
		// header("Access-Control-Allow-Headers: Content-Type");
		parent::__construct();

		$this->load->model('user_model');
	}
	// add the necessary fields for user login
	//login user by adding a line to the LoggedIn_Users table
	public function logIn()
	{ 
		$jsonConf = array("code"=>null,"description"=>"","data"=>array());
		$config = array(
			array(
					'field' => 'uid',
					'label' => "User's UID",
					'rules' => 'trim|required'
			),
			array(
					'field' => 'name',
					'label' => "User's Name",
					'rules' => 'trim|required'
			),
			array(
					'field' => 'email',
					'label' => "User's e-mail",
					'rules' => 'trim|required'
			),
			array(
					'field' => 'avatar',
					'label' => "User's Avatar",
					'rules' => 'trim|required'
			)
		);
		//verify if user is already loggedin
		$this->form_validation->set_rules($config);
		$this->form_validation->set_error_delimiters('', '');
		if($this->form_validation->run() === true){
			if($this->user_model->isRegistered($this->input->post("uid"))===true){
				$jsonConf = $this->loginHelper();
			}else{
				if($this->user_model->register()===true){
					$jsonConf = $this->loginHelper();
				}else{
					$jsonConf["code"]        = 500;
					$jsonConf["description"] = "Server Error";
					$jsonConf["data"] 		 = array('message'=>'error adding user the system');
				}
			}	
		}else{
			$jsonConf["code"]        = 405;
			$jsonConf["description"] = "Method Not Allowed";
			$jsonConf["data"] 		 = array(
											'message'=>'POST has not passed the validation check.',
											'errors' => validation_errors()
										);
		}
		jsonExporter($jsonConf);
	}
	// login's user in the database and generates ser first token
	private function loginHelper()
	{
		// verificar se ja se encontra logado
		$jsonConf = array("code"=>null,"description"=>"","data"=>array());
		$result = $this->user_model->isLoggedIn($this->input->post("uid"));
		if($result[0]===true){
			$jsonConf["code"]        = 200;
			$jsonConf["description"] = "ok";
			$jsonConf["data"] 		 = array(
				'token' => $result[1][0],
				'user_type' => $result[1][1]
			);
		}else{
			$result = $this->user_model->login();
			if($result[0]===true){
				$jsonConf["code"]        = 200;
				$jsonConf["description"] = "ok";
				$jsonConf["data"] 		 = array(
					'token' => $result[1],
					'user_type' => $this->user_model->getUserType($this->input->post("uid"))
				);
			}else{
				$jsonConf["code"]        = 500;
				$jsonConf["description"] = "Server Error";
				$jsonConf["data"] 		 = array('message'=>'error adding user the system');
			}
		}
		return $jsonConf;
	}
	//logout user by adding a line to the LoggedOut_Users Table 
	// and removing user from LoggedIn_Users table
	public function logOut()
	{
		$jsonConf = array("code"=>null,"description"=>"","data"=>array()); 
		$config = array(
			array(
					'field' => 'userTokenId',
					'label' => "User's Token",
					'rules' => 'trim|required'
			)
		);
		$this->form_validation->set_rules($config);
		$this->form_validation->set_error_delimiters('', '');
		if($this->form_validation->run() === true){
			if($this->user_model->logOut()===true){
				$jsonConf["code"]        = 200;
				$jsonConf["description"] = "ok";
			}else{
				$jsonConf["code"]        = 500;
				$jsonConf["description"] = "Server Error";
				$jsonConf["data"] 		 = array('message'=>'error completing logout process');
			}
		}else{
			$jsonConf["code"]        = 405;
			$jsonConf["description"] = "Method Not Allowed";
			$jsonConf["data"] 		 = array(
											'message'=>'POST has not passed the validation check.',
											'errors' => validation_errors(),
										);
		}
		jsonExporter($jsonConf);
	}
}
?>