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
    }
	public function getUserAccessHistory($limit="null")
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
			if(isUserLoggedIn($this->input->post('token'))===true){
				$token = $this->db->escape($this->input->post('userTokenId'));
				$email = $this->user_model->getEmailFromToken($token);
				$email = $this->db->escape(urldecode($email));
				$sql = "SELECT *
						FROM conf_routesAccess
						WHERE user_type = (SELECT account_type FROM users WHERE id = (SELECT user FROM users_loggedIn WHERE token = $token)) OR 
							(user_type = 30 AND (SELECT id FROM users WHERE email = $email) = (SELECT id FROM users WHERE id = (SELECT user FROM users_loggedIn WHERE token=$token)))";
				if(routeAccess($sql)===true){
					$userId = $this->user_model->getUserIdFromEmail($email);
					$json = file_get_contents(getUrlDataSim("/acessosuser/".$userId)); // save on our DB
					$obj = json_decode($json);
					$out = array("data"=>array());
					$i=0;
					while($i<count($obj)){
						$histOut = array(
							"sala"=>"C".$obj[$i]->bloco.".".$obj[$i]->piso.".".$obj[$i]->sala,
							"inicio"=>str_replace("T", " ", $obj[$i]->hora_entrada),
							"fim"=>str_replace("T", " ", $obj[$i]->hora_saida)
						);
						array_push($out["data"], $histOut);
						$i++;
						if($limit!="null" && $i >= $limit)
							$i = count($obj);
					}
					$data = array(
                        "accessHist"=>$out,
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