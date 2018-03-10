<?php
defined('BASEPATH') OR exit('No direct script access allowed');
//try to recycle code as much as possible
// * 400 & 200 codes to much code repetition 
class UserLoader extends CI_Controller {

	public function __construct()
	{
		parent::__construct();

		$this->load->model('user_model');
	}
	// add the necessary fields for user login
	//login user by adding a line to the LoggedIn_Users table
	public function logIn()
	{ 
		$config = array(
			array(
					'field' => 'uid',
					'label' => "User's UID",
					'rules' => 'trim|required'
			)
		);
		$this->form_validation->set_rules($config);
		$this->form_validation->set_error_delimiters('', '');
		if($this->form_validation->run() === true){
			
			echo json_encode(
				array_merge(
					displayError('ok', 200), 
					array("data" => array())
				)
			);
		}else{
			echo json_encode(
				array_merge(
					displayError('Method Not Allowed', 405), 
					array(
						'message'=>'POST has not passed the validation check.',
						'errors' => validation_errors(),
					)
				)
			);
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
					'rules' => 'trim|required'
			)
		);
		$this->form_validation->set_rules($config);
		$this->form_validation->set_error_delimiters('', '');
		if($this->form_validation->run() === true){
			echo json_encode(
				array_merge(
					displayError('ok', 200), 
					array("data" => array())
				)
			);
		}else{
			echo json_encode(
				array_merge(
					displayError('Method Not Allowed', 405), 
					array(
						'message'=>'POST has not passed the validation check.',
						'errors' => validation_errors(),
					)
				)
			);
		}

	}
	// checks if session is still valid. if not user is logged out. 
	// returns true for still active session & false for non active session
	public function isLoggedIn() 
	{
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
			echo json_encode(
				array_merge(
					displayError('ok', 200), 
					array("data" => array())
				)
			);
		}else{
			echo json_encode(
				array_merge(
					displayError('Method Not Allowed', 405), 
					array(
						'message'=>'POST has not passed the validation check.',
						'errors' => validation_errors(),
					)
				)
			);
		}

	}
	//checks if the user is already registered in the database
	public function exists() 
	{
		$config = array(
			array(
					'field' => 'uid',
					'label' => "User's UID",
					'rules' => 'trim|required'
			)
		);
		$this->form_validation->set_rules($config);
		$this->form_validation->set_error_delimiters('', '');
		if($this->form_validation->run() === true){
			echo json_encode(
				array_merge(
					displayError('ok', 200), 
					array("data" => array())
				)
			);
		}else{
			echo json_encode(
				array_merge(
					displayError('Method Not Allowed', 405), 
					array(
						'message'=>'POST has not passed the validation check.',
						'errors' => validation_errors(),
					)
				)
			);
		}

	}
	// add the necessary fields for user registration
	// registers user in the database 
	// chcek how to protect the route (one way could be for it to be verified by an admin)
	public function register() 
	{
		$config = array(
			array(
					'field' => 'uid',
					'label' => "User's UID",
					'rules' => 'trim|integer|required'
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
			),
			array(
					'field' => 'type',
					'label' => "User's Account Type",
					'rules' => 'trim|integer|required'
			)
		);
		$this->form_validation->set_rules($config);
		$this->form_validation->set_error_delimiters('', '');
		if($this->form_validation->run() === true){
			if($this->user_model->register() === true){
				echo json_encode(
					array_merge(
						displayError('ok', 200), 
						array("data" => array('message'=>'user successfully added to the system'))
					)
				);
			}else{
				echo json_encode(
					array_merge(
						displayError('Server Error', 500), 
						array("data" => array('message'=>'error adding user the system'))
					)
				);
			}
		}else{
			echo json_encode(
				array_merge(
					displayError('Method Not Allowed', 405), 
					array(
						'message'=>'POST has not passed the validation check.',
						'errors' => validation_errors(),
					)
				)
			);
		}

	}
	// returns user profile 
	public function profile()
	{
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
			$userId = $this->user_model->getLoggedInUserId();
			if($userId[0]===true){
				$result = $this->user_model->getUserProfile($userId[1]);
				if($result[0]===true){
					echo json_encode(
						array_merge(
							displayError('ok', 200), 
							array("data" => $result[1])							
						)
					);
				}else{
					echo json_encode(
						array_merge(
							displayError('Server Error', 500), 
							array("data" => array('message'=>'error adding user the system'))
						)
					);
				}
			}else{
				echo json_encode(
					array_merge(
						displayError('Server Error', 500), 
						array("data" => array('message'=>'error adding user the system'))
					)
				);
			}
		}else{
			echo json_encode(
				array_merge(
					displayError('Method Not Allowed', 405), 
					array(
						'message'=>'POST has not passed the validation check.',
						'errors' => validation_errors(),
					)
				)
			);
		}

	}
}
?>