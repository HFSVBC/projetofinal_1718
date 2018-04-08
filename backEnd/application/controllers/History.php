<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class History extends CI_Controller {
	// 
	public function __construct($config = 'rest')
	{
		header('Access-Control-Allow-Origin: *');
		header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
		// header("Access-Control-Allow-Headers: Content-Type");
		parent::__construct();
    }
	public function getUserAccessHistory()
	{
		$json = file_get_contents('https://simulador1212.herokuapp.com/acessos');
		$obj = json_decode($json);
		var_dump($obj);
	}
}
?>