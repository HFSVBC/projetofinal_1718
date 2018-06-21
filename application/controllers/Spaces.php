<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Spaces extends CI_Controller
{
    public function __construct($config = 'rest')
    {
        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Methods: GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE");
        // header("Access-Control-Allow-Headers: Content-Type");
        parent::__construct();

        $this->load->model('access_model');
    }

    public function getFacultyAvailableRooms()
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
            )
        );
        $this->form_validation->set_rules($config);
        $this->form_validation->set_error_delimiters('', '');
        if($this->form_validation->run() === true){
            if(isUserLoggedIn($this->input->post('userTokenId'))===true){
                $result = $this->access_model->getAvailableRooms();
                $out = array("data"=>array());
                foreach ($result as $key => $value) {
                    $thisOut = array(
                        "space"=>$value['espaco'],
                        "seats"=>$value['available']
                    );
                    array_push($out["data"], $thisOut);
                }
                $data = array(
                    "availableRooms"=>$out,
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

    public function getPeopleNumInFacultyRooms()
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
                $result = $this->access_model->getNumberOfPeopleInRooms();
                $out = array("data"=>array());
                foreach ($result as $key => $value) {
                    $thisOut = array(
                        "space"=>$value['espaco'],
                        "peopel"=>$value['now'],
                        "max"=>$value['lotacao']
                    );
                    array_push($out["data"], $thisOut);
                }
                $data = array(
                    "rooms"=>$out,
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

    # AUX Methods -----------------------------------------------------------------------------------
    public function getFacultyBuildings()
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
            if(isUserLoggedIn($this->input->post('userTokenId'))===true){
                $result = $this->access_model->getFacultyBlocks();
                $out = array("data"=>array());
                foreach ($result as $key => $value) {
                    $thisOut = array(
                        "bloco"=>$value['bloco']
                    );
                    array_push($out["data"], $thisOut);
                }
                $data = array(
                    "blocks"=>$out,
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

    public function getFacultyFloors()
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
            )
        );
        $this->form_validation->set_rules($config);
        $this->form_validation->set_error_delimiters('', '');
        if($this->form_validation->run() === true){
            if(isUserLoggedIn($this->input->post('userTokenId'))===true){
                $result = $this->access_model->getBlockFloors();
                $out = array("data"=>array());
                foreach ($result as $key => $value) {
                    $thisOut = array(
                        "piso"=>$value['piso']
                    );
                    array_push($out["data"], $thisOut);
                }
                $data = array(
                    "floors"=>$out,
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

    public function getFacultyRooms()
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
                'label' => "Block's floor number",
                'rules' => 'trim|required'
            )
        );
        $this->form_validation->set_rules($config);
        $this->form_validation->set_error_delimiters('', '');
        if($this->form_validation->run() === true){
            if(isUserLoggedIn($this->input->post('userTokenId'))===true){
                $result = $this->access_model->getFloorRooms();
                $out = array("data"=>array());
                foreach ($result as $key => $value) {
                    $thisOut = array(
                        "sala"=>$value['sala']
                    );
                    array_push($out["data"], $thisOut);
                }
                $data = array(
                    "rooms"=>$out,
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