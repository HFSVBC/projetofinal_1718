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
		if($this->form_validation->run() === true){
			echo json_encode(displayError('ok', 200));
		}else{
			echo json_encode(array_merge(displayError('Method Not Allowed', 405), array('message'=>'POST has not passed the validation check.')));
		}
	}
}
?>