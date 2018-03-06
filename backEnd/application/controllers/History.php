<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class History extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
    }
	public function searchStudent()
	{
		$validator = array('success' => false, 'messages' => '');
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
			echo json_encode(displayError('ok', 200));
		}else{
			$code = 405;
			$this->output->set_status_header($code);
			echo json_encode(
				array_merge(
					displayError('Method Not Allowed', $code), 
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