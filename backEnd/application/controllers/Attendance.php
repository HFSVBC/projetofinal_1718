<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Attendance extends CI_Controller
{
    public function __construct($config = 'rest')
    {
        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Methods: GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE");
        // header("Access-Control-Allow-Headers: Content-Type");
        parent::__construct();

        $this->load->model('access_model');
        $this->load->model('class_model');
    }

    public function getTeacherClasses()
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
                        WHERE user_type = (SELECT account_type FROM users WHERE id = (SELECT user FROM users_loggedIn WHERE token = $token)) AND route = 'teacher/retrieveClasses'";
                if(routeAccess($sql)===true){
                    $result = $this->class_model->getSubjectsByProf($token);
                    $out = array("data"=>array());
                    foreach ($result as $key => $value) {
                        $thisOut = array(
                            "id"=>$value['id'],
                            "name"=>$value['designacao']
                        );
                        array_push($out["data"], $thisOut);
                    }
                    $data = array(
                        "teacherSubjects"=>$out,
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
    public function getTeacherClassDates($class_id)
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
                        WHERE user_type = (SELECT account_type FROM users WHERE id = (SELECT user FROM users_loggedIn WHERE token = $token)) AND route = 'teacher/retrieveClassDates/(:any)'";
                if(routeAccess($sql)===true){
                    $result = $this->class_model->getClassesBySubject($class_id);
                    $out = array("data"=>array());
                    foreach ($result as $key => $value) {
                        $thisOut = array(
                            "id"=>$value['id'],
                            "d_init"=>$value['data_inicio'],
                            "d_end"=>$value['data_fim']
                        );
                        array_push($out["data"], $thisOut);
                    }
                    $data = array(
                        "classDates"=>$out,
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
    public function getStudentsByClass($class_id)
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
                    $result = $this->class_model->getStudentByClass($class_id);
                    $out = array("data"=>array());
                    foreach ($result as $key => $value) {
                        $thisOut = array(
                            "id"=>$value['id'],
                            "aluno"=>$value['name']
                        );
                        array_push($out["data"], $thisOut);
                    }
                    $data = array(
                        "classStudents"=>$out,
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