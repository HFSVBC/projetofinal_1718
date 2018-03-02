<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class NotAuthorized extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
	}
	
	public function index()
	{
		// $data['heading'] = '<span style="color: #AB0000;">Access Not Authorized</span>';
		// $data['message'] = '<p>This route is not authorized for your user type.</p>';
		// $this->load->view('errors/html/error_general.php', $data);
		echo json_encode(displayError('Not Authorised', 403));
	}
}
?>