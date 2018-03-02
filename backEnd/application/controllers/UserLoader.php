<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class UserLoader extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
	}
	public function index()
	{
		echo json_encode(displayError('Not Authorised', 403));
	}
}
?>