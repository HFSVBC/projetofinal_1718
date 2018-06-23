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
                        "accidentCreationResult"=>$result,
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
	public function getAccidents()
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
                'rules' => 'trim'
			),
            array(
                'field' => 'block',
                'label' => "Accident building block",
                'rules' => 'trim'
			),
            array(
                'field' => 'floor',
                'label' => "Accident building floor",
                'rules' => 'trim'
			),
            array(
                'field' => 'room',
                'label' => "Accident building room",
                'rules' => 'trim'
			),
            array(
                'field' => 'data_ini',
                'label' => "Accident search start date",
                'rules' => 'trim|required'
			),
            array(
                'field' => 'data_fim',
                'label' => "Accident search end date",
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
						WHERE user_type = (SELECT account_type FROM users WHERE id = (SELECT user FROM users_loggedIn WHERE token = $token)) AND route = 'accident/getAll'";
                if(routeAccess($sql)===true){
					$result = $this->accidents_model->getAccidents();
					$out = array("data"=>array());
                    foreach ($result as $key => $value) {
                        $thisOut = array(
							"id"=>$value['id'],
                            "name"=>$value['name'],
							"espaco"=>$value['espaco'],
							"date_open"=>$value['date_open'],
							"date_close"=>$value['date_close'],
							"description"=>$value['description']
                        );
                        array_push($out["data"], $thisOut);
                    }
                    $data = array(
                        "accidents"=>json_encode($result),
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
	public function getAccidentsOthers()
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
                'rules' => 'trim'
			),
            array(
                'field' => 'block',
                'label' => "Accident building block",
                'rules' => 'trim'
			),
            array(
                'field' => 'floor',
                'label' => "Accident building floor",
                'rules' => 'trim'
			),
            array(
                'field' => 'room',
                'label' => "Accident building room",
                'rules' => 'trim'
			),
            array(
                'field' => 'data_ini',
                'label' => "Accident search start date",
                'rules' => 'trim|required'
			),
            array(
                'field' => 'data_fim',
                'label' => "Accident search end date",
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
						WHERE user_type = 30 AND route = 'accident/getOthers'";
                if(routeAccess($sql)===true){
					$result = $this->accidents_model->getAccidents($token);
					$out = array("data"=>array());
                    foreach ($result as $key => $value) {
                        $thisOut = array(
							"id"=>$value['id'],
                            "name"=>$value['name'],
							"espaco"=>$value['espaco'],
							"date_open"=>$value['date_open'],
							"date_close"=>$value['date_close'],
							"description"=>$value['description']
                        );
                        array_push($out["data"], $thisOut);
                    }
                    $data = array(
                        "accidents"=>$out,
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
	// public function CloseAccident()
	// {
	// 	$config = array(
    //         array(
    //             'field' => 'userTokenId',
    //             'label' => "User's Token",
    //             'rules' => 'trim|required'
	// 		),
    //         array(
    //             'field' => 'id',
    //             'label' => "Accident id",
    //             'rules' => 'trim|required'
	// 		),
    //         array(
    //             'field' => 'data_fim',
    //             'label' => "Accident search end date",
    //             'rules' => 'trim|required'
	// 		),
	// 	);
	// 	$this->form_validation->set_rules($config);
	// 	$this->form_validation->set_error_delimiters('', '');
	// 	if($this->form_validation->run() === true){
    //         if(isUserLoggedIn($this->input->post('userTokenId'))===true){
    //             $token = $this->db->escape($this->input->post('userTokenId'));
    //             $sql = "SELECT *
	// 					FROM conf_routesAccess
	// 					WHERE user_type = 30 AND route = 'accident/getOthers'";
    //             if(routeAccess($sql)===true){
	// 				$result = $this->accidents_model->getAccidents($token);
    //                 $data = array(
    //                     "accidentClosingResult"=>$out,
    //                     "token"=>regenerateUserToken($this->input->post('userTokenId'))[1]
    //                 );
    //                 jsonExporter(200, $data);
    //             }else{
    //                 jsonExporter(403);
    //             }
    //         }else{
    //             jsonExporter(401);
    //         }
    //     }else{
    //         jsonExporter(405, validation_errors());
    //     }
	// }
}
?>