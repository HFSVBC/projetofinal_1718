<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class History extends CI_Controller {
	// 
	public function __construct($config = 'rest')
	{
		header('Access-Control-Allow-Origin: *');
		header("Access-Control-Allow-Methods: GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE");
		// header("Access-Control-Allow-Headers: Content-Type");
		parent::__construct();

		$this->load->model('user_model');
		$this->load->model('access_model');
    }
	public function getUserAccessHistory($limit="null")
	{
		$config = array(
			array(
				'field' => 'userTokenId',
				'label' => "User's Token",
				'rules' => 'trim|required'
			),
            array(
                'field' => 'block',
                'label' => "Block number",
                'rules' => 'trim|required'
            ),
            array(
                'field' => 'floor',
                'label' => "Floor number",
                'rules' => 'trim|required'
            ),
            array(
                'field' => 'room',
                'label' => "Room number",
                'rules' => 'trim|required'
            )
		);
		$this->form_validation->set_rules($config);
		$this->form_validation->set_error_delimiters('', '');
		if($this->form_validation->run() === true){
			if(isUserLoggedIn($this->input->post('userTokenId'))===true){
                $obj = $this->access_model->getAccessByUser($limit);
                $out = array("data"=>array());
                foreach ($obj as $key => $value) {
                    $thisOut = array(
                            "sala"=>"C".$value['bloco'].".".$value['piso'].".".$value['sala'],
                            "inicio"=>$value['data_entrada'],
                            "fim"=>$value['data_fim'],
                        );
                    array_push($out["data"], $thisOut);
                }
                $data = array(
                    "accessHist"=>$out,
                    "token"=>regenerateUserToken($this->input->post('userTokenId'))[1]
                );
                jsonExporter(200, $data);
            }else{
                jsonExporter(401);
            }
        }else{
            jsonExporter(405, validation_errors());
		}
    }
    
    public function getUsersAccessHistory()
	{
		$config = array(
			array(
				'field' => 'userTokenId',
				'label' => "User's Token",
				'rules' => 'trim|required'
			),
            array(
                'field' => 'block',
                'label' => "Block number",
                'rules' => 'trim|required'
            ),
            array(
                'field' => 'floor',
                'label' => "Floor number",
                'rules' => 'trim|required'
            ),
            array(
                'field' => 'room',
                'label' => "Room number",
                'rules' => 'trim|required'
            )
		);
		$this->form_validation->set_rules($config);
		$this->form_validation->set_error_delimiters('', '');
		if($this->form_validation->run() === true){
			if(isUserLoggedIn($this->input->post('userTokenId'))===true){
                $obj = $this->access_model->getAccessBySpace();
                $out = array("data"=>array());
                foreach ($obj as $key => $value) {
                    $thisOut = array(
                            "space"=>"C".$value['bloco'].".".$value['piso'].".".$value['sala'],
                            "people"=>$value[''],
                            "max"=>$value[''],
                        );
                    array_push($out["data"], $thisOut);
                }
                $data = array(
                    "accessHist"=>$out,
                    "token"=>regenerateUserToken($this->input->post('userTokenId'))[1]
                );
                jsonExporter(200, $data);
            }else{
                jsonExporter(401);
            }
        }else{
            jsonExporter(405, validation_errors());
		}
	}

}
?>