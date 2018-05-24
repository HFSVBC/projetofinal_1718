<?php
defined('BASEPATH') OR exit('No direct script access allowed');
/*
 * Rooms controller
 * Available methods:
 */
class Room extends CI_Controller
{

    public function __construct($config = 'rest')
    {
        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Methods: GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE");
        // header("Access-Control-Allow-Headers: Content-Type");
        parent::__construct();

        $this->load->model('');
    }
    // shows all available rooms (where there are no classes) and there available seats
    public function getAvailableRooms()
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
                $sql = "SELECT *
                        FROM conf_routesAccess
                        WHERE user_type = (SELECT account_type FROM users WHERE id = (SELECT user FROM users_loggedIn WHERE token = $token)) AND route = 'teacher/retrieveStudentsByClass/(:any)'";
                if(routeAccess($sql)===true){
                    $result = $this->class_model->getRemainingSpaceInRooms();
                    $out = array("data"=>array());
                    foreach ($result as $key => $value) {
                        $thisOut = array(
                            "id"=>$value['id'],
                            "room"=>"C".$value["espaco"],
                            "availableSeats"=>$value["espaco"]
                        );
                        array_push($out["data"], $thisOut);
                    }
                    $data = array(
                        "availableRooms"=>$out,
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