<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class UserLoader extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
	}
	// add the necessary fields for user login
	public function logIn()
	{
		$config = array(
			array(
					'field' => 'userTokenId',
					'label' => "User's Token ID",
					'rules' => 'trim|required'
			),
		);
		$this->form_validation->set_rules($config);
		$this->form_validation->set_error_delimiters('', '&');
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
	public function logOut()
	{
		$config = array(
			array(
					'field' => 'userTokenId',
					'label' => "User's Token ID",
					'rules' => 'trim|required'
			),
		);
		$this->form_validation->set_rules($config);
		$this->form_validation->set_error_delimiters('', '&');
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
	public function isLoggedIn() 
	{
		$config = array(
			array(
					'field' => 'userTokenId',
					'label' => "User's Token ID",
					'rules' => 'trim|required'
			),
		);
		$this->form_validation->set_rules($config);
		$this->form_validation->set_error_delimiters('', '&');
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
	public function exists() 
	{
		$config = array(
			array(
					'field' => 'email',
					'label' => "User's email",
					'rules' => 'trim|required'
			),
		);
		$this->form_validation->set_rules($config);
		$this->form_validation->set_error_delimiters('', '&');
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
	public function register() 
	{
		$config = array(
			array(
					'field' => 'userTokenId',
					'label' => "User's Token ID",
					'rules' => 'trim|required'
			),
		);
		$this->form_validation->set_rules($config);
		$this->form_validation->set_error_delimiters('', '&');
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
	public function profile()
	{
		$config = array(
			array(
					'field' => 'userTokenId',
					'label' => "User's Token ID",
					'rules' => 'trim|required'
			),
		);
		$this->form_validation->set_rules($config);
		$this->form_validation->set_error_delimiters('', '&');
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
}
?>