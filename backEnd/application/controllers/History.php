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

		$this->load->model('user_model');
    }
	public function getUserAccessHistory($email="null")
	{
		$jsonConf = array("code"=>null,"description"=>"","data"=>array());
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
				if($email==="null"){
					$email = $this->user_model->getEmailFromToken($token);
				}
				$email = $this->db->escape(urldecode($email));
				$sql = "SELECT *
						FROM conf_routesAccess
						WHERE user_type = (SELECT account_type FROM users WHERE id = (SELECT user FROM users_loggedIn WHERE token = $token)) OR 
							(user_type = 30 AND (SELECT id FROM users WHERE email = $email) = (SELECT id FROM users WHERE id = (SELECT user FROM users_loggedIn WHERE token=$token)))";
				if(routeAccess($sql)===true){
					$userId = $this->user_model->getUserIdFromEmail($email);
					$json = file_get_contents(getUrlDataSim("/acessosuser/".$userId));
					$obj = json_decode($json);
					$out = array("data"=>array());
					for($i=0;$i<count($obj);$i++){
						$histOut = array(
							"sala"=>"C".$obj[$i]->bloco.".".$obj[$i]->piso.".".$obj[$i]->sala,
							"inicio"=>str_replace("T", " ", $obj[$i]->hora_entrada),
							"fim"=>str_replace("T", " ", $obj[$i]->hora_saida)
						);
						array_push($out["data"], $histOut);
					}					
					$jsonConf["code"]        = 200;
					$jsonConf["description"] = "ok";
					$jsonConf["data"] 		 = array(
													"accessHist"=>$out,
													"token"=>regenerateUserToken($this->input->post('userTokenId'))[1]
												);
				}else{
					$jsonConf["code"]        = 403;
					$jsonConf["description"] = "Forbidden";
					$jsonConf["data"] 		 = array('message'=>'Access not authorised for current user');
				}
			}else{
				$jsonConf["code"]        = 401;
				$jsonConf["description"] = "Unauthorizedd";
				$jsonConf["data"] 		 = array('message'=>'User session expired');
			}
		}else{
			$jsonConf["code"]        = 405;
			$jsonConf["description"] = "Method Not Allowed";
			$jsonConf["data"] 		 = array(
											'message'=>'POST has not passed the validation check.',
											'errors' => validation_errors(),
										);
		}
		jsonExporter($jsonConf);
		// if($email=="null"){
			
		// }else{
		// 	$userUrl = urldecode($email);
		// }
	}
}
?>