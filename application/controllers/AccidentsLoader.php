<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class AccidentsLoader extends CI_Controller {
	// 
	public function __construct($config = 'rest')
	{
		header('Access-Control-Allow-Origin: *');
		header("Access-Control-Allow-Methods: GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE");
		// header("Access-Control-Allow-Headers: Content-Type");
		parent::__construct();

		$this->load->model('accidents_model');
    }

	public function registerAccident()
	{
		$config = array(
            array(
                'field' => 'userTokenId',
                'label' => "User's Token",
                'rules' => 'trim|required'
			),
            array(
                'field' => 'type',
                'label' => "Accident type",
                'rules' => 'trim|required'
			),
            array(
                'field' => 'block',
                'label' => "Accident building block",
                'rules' => 'trim|required'
			),
            array(
                'field' => 'floor',
                'label' => "Accident building floor",
                'rules' => 'trim|required'
			),
            array(
                'field' => 'room',
                'label' => "Accident building room",
                'rules' => 'trim|required'
			),
            array(
                'field' => 'date',
                'label' => "Accident date",
                'rules' => 'trim|required'
			),
            array(
                'field' => 'description',
                'label' => "Accident description",
                'rules' => 'trim|required'
			),
		);
		$this->form_validation->set_rules($config);
		$this->form_validation->set_error_delimiters('', '');
		if($this->form_validation->run() === true){
            if(isUserLoggedIn($this->input->post('userTokenId'))===true){
                $token = $this->db->escape($this->input->post('userTokenId'));
                $sql = "SELECT *
                        FROM conf_routesAccess
                        WHERE user_type = 30 AND route = 'accident/new'";
                if(routeAccess($sql)===true){
                    $result = $this->accidents_model->createNewAccident();
                    $data = array(
                        "teacherSubjects"=>$result,
                        "token"=>regenerateUserToken($this->input->post('userTokenId'))[1]
                    );
                    jsonExporter(200, $data);
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