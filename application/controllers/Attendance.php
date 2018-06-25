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
            if(isUserLoggedIn($this->input->post('userTokenId'))===true){
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
            if(isUserLoggedIn($this->input->post('userTokenId'))===true){
                $token = $this->db->escape($this->input->post('userTokenId'));
                $sql = "SELECT *
                        FROM conf_routesAccess
                        WHERE user_type = (SELECT account_type FROM users WHERE id = (SELECT user FROM users_loggedIn WHERE token = $token)) AND route = 'teacher/class/dates/(:any)'";
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
            if(isUserLoggedIn($this->input->post('userTokenId'))===true){
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
    public function getStudentAttendance_Teacher()
    {
        $config = array(
            array(
                'field' => 'userTokenId',
                'label' => "User's Token",
                'rules' => 'trim|required'
            ),
            array(
                'field' => 'course_id',
                'label' => "Course id",
                'rules' => 'trim|required|numeric'
            ),
            array(
                'field' => 'student_id',
                'label' => "Student id",
                'rules' => 'trim'
            ),
            array(
                'field' => 'class_id',
                'label' => "Class id",
                'rules' => 'trim'
            )
        );
        $this->form_validation->set_rules($config);
        $this->form_validation->set_error_delimiters('', '');
        if($this->form_validation->run() === true){
            if(isUserLoggedIn($this->input->post('userTokenId'))===true){
                $token = $this->db->escape($this->input->post('userTokenId'));
                $sql = "SELECT *
                        FROM conf_routesAccess
                        WHERE user_type = (SELECT account_type FROM users WHERE id = (SELECT user FROM users_loggedIn WHERE token = $token)) AND route = 'teacher/course/getStudentsAttendance'";
                if(routeAccess($sql)===true){
                    $result = $this->access_model->getStudentAttendanceByClass_Teacher();
                    $out = array("data"=>array());
                    foreach ($result as $key => $value) {
                        $thisOut = array(
                            "student_id"=>$value['id'],
                            "student_name"=>$value['name'],
                            "course"=>$value['disciplina'],
                            "date_ini"=>$value['data_inicio'],
                            "date_end"=>$value['data_fim'],
                        );
                        if(isset($value['attended_classes']))
                            $thisOut['attended_classes'] = $value['attended_classes'];
                        array_push($out["data"], $thisOut);
                    }
                    $data = array(
                        "studentAttendance"=>$out,
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

    public function getIndvStudentAttendance_Teacher()
    {
        $config = array(
            array(
                'field' => 'userTokenId',
                'label' => "User's Token",
                'rules' => 'trim|required'
            ),
            array(
                'field' => 'course_id',
                'label' => "Course id",
                'rules' => 'trim|required|numeric'
            ),
            array(
                'field' => 'student_id',
                'label' => "Student id",
                'rules' => 'trim'
            ),
            array(
                'field' => 'class_id',
                'label' => "Class id",
                'rules' => 'trim'
            )
        );
        $this->form_validation->set_rules($config);
        $this->form_validation->set_error_delimiters('', '');
        if($this->form_validation->run() === true){
            if(isUserLoggedIn($this->input->post('userTokenId'))===true){
                $token = $this->db->escape($this->input->post('userTokenId'));
                $sql = "SELECT *
                        FROM conf_routesAccess
                        WHERE user_type = (SELECT account_type FROM users WHERE id = (SELECT user FROM users_loggedIn WHERE token = $token)) AND route = 'teacher/individual/getStudentsAttendance'";
                if(routeAccess($sql)===true){
                    $result = $this->access_model->getIndividualStudentAttendance_Teacher();
                    $out = array("data"=>array());
                    foreach ($result as $key => $value) {
                        $thisOut = array(
                            "student_id"=>$this->input->post('student_id'),
                            "name"=>$value['name'],
                            "date_ini"=>$value['data_inicio'],
                            "aula_id"=>$value['id'],
                            "attended"=>$value['attended']
                        );
                        array_push($out["data"], $thisOut);
                    }
                    $data = array(
                        "studentAttendance"=>$out,
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
    public function getStudentCourses()
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
                $token = $this->db->escape($this->input->post('userTokenId'));
                $sql = "SELECT *
                        FROM conf_routesAccess
                        WHERE user_type = (SELECT account_type FROM users WHERE id = (SELECT user FROM users_loggedIn WHERE token = $token)) AND route = 'student/retrieveCourses'";
                if(routeAccess($sql)===true){
                    $result = $this->class_model->getCorsesByStudent($token);
                    $out = array("data"=>array());
                    foreach ($result as $key => $value) {
                        $thisOut = array(
                            "id"=>$value['id'],
                            "name"=>$value['designacao']
                        );
                        array_push($out["data"], $thisOut);
                    }
                    $data = array(
                        "studentCourses"=>$out,
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
    public function getStudentAttendance_Student()
    {
        $config = array(
            array(
                'field' => 'userTokenId',
                'label' => "User's Token",
                'rules' => 'trim|required'
            ),
            array(
                'field' => 'course_id',
                'label' => "Course id",
                'rules' => 'trim|required|numeric'
            ),
            array(
                'field' => 'class_id',
                'label' => "Class id",
                'rules' => 'trim'
            )
        );
        $this->form_validation->set_rules($config);
        $this->form_validation->set_error_delimiters('', '');
        if($this->form_validation->run() === true){
            if(isUserLoggedIn($this->input->post('userTokenId'))===true){
                $token = $this->db->escape($this->input->post('userTokenId'));
                $sql = "SELECT *
                        FROM conf_routesAccess
                        WHERE user_type = (SELECT account_type FROM users WHERE id = (SELECT user FROM users_loggedIn WHERE token = $token)) AND route = 'teacher/course/getStudentsAttendance'";
                if(routeAccess($sql)===true){
                    $result = $this->access_model->getStudentAttendance_Mine();
                    $out = array("data"=>array());
                    foreach ($result as $key => $value) {
                        $thisOut = array(
                            "course"=>$value['disciplina'],
                            "date_ini"=>$value['data_inicio'],
                            "date_end"=>$value['data_fim'],
                        );
                        if(isset($value['attended_classes']))
                            $thisOut['attended_classes'] = $value['attended_classes'];
                        array_push($out["data"], $thisOut);
                    }
                    $data = array(
                        "studentAttendance"=>$out,
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

    public function changeUserAttendance()
    {
        $config = array(
            array(
                'field' => 'userTokenId',
                'label' => "User's Token",
                'rules' => 'trim|required'
            ),
            array(
                'field' => 'student_id',
                'label' => "Student id",
                'rules' => 'trim'
            ),
            array(
                'field' => 'class_id',
                'label' => "Class id",
                'rules' => 'trim'
            ),
            array(
                'field' => 'state_now',
                'label' => "Attendance state now",
                'rules' => 'trim'
            )
        );
        $this->form_validation->set_rules($config);
        $this->form_validation->set_error_delimiters('', '');
        if($this->form_validation->run() === true){
            if(isUserLoggedIn($this->input->post('userTokenId'))===true){
                $token = $this->db->escape($this->input->post('userTokenId'));
                $sql = "SELECT *
                        FROM conf_routesAccess
                        WHERE user_type = (SELECT account_type FROM users WHERE id = (SELECT user FROM users_loggedIn WHERE token = $token)) AND route = 'teacher/individual/changeStudentsAttendance'";
                if(routeAccess($sql)===true){
                    $data = array(
                        "changeStudentAttendance"=>$this->access_model->changeStudentAttendanceState(),
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