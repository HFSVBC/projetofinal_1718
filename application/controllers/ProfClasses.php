<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class ProfClasses extends CI_Controller
{
  public function __construct($config = 'rest')
  {
      header('Access-Control-Allow-Origin: *');
      header("Access-Control-Allow-Methods: GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE");
      // header("Access-Control-Allow-Headers: Content-Type");
      parent::__construct();

      $this->load->model('prof_class_model');
  }

  public function createSubject()
  {
    $config = array(
        array(
            'field' => 'userTokenId',
            'label' => "User's Token",
            'rules' => 'trim|required'
        ),
        array(
            'field' => 'course_designation',
            'label' => "Course designation",
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
                    WHERE user_type = (SELECT account_type FROM users WHERE id = (SELECT user FROM users_loggedIn WHERE token = $token)) AND route = 'teacher/createSubject'";
            if(routeAccess($sql)===true){
                $designation = $this->input->post('course_designation');
                $this->prof_class_model->createSubject($designation, $token);
                $data = array(
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

  public function createClasses(){
    $config = array(
        array(
            'field' => 'userTokenId',
            'label' => "User's Token",
            'rules' => 'trim|required'
        ),
        array(
            'field' => 'semester',
            'label' => "Course semester",
            'rules' => 'trim|required|numeric'
        ),
        array(
            'field' => 'date',
            'label' => "first class date",
            'rules' => 'trim|required'
        ),
        array(
            'field' => 'duration',
            'label' => "class duration",
            'rules' => 'trim|required|numeric'
        ),
        array(
            'field' => 'type',
            'label' => "class type",
            'rules' => 'trim|required'
        ),
        array(
            'field' => 'room',
            'label' => "class room",
            'rules' => 'trim|required|numeric'
        ),
        array(
            'field' => 'subject',
            'label' => "class subject",
            'rules' => 'trim|required|numeric'
        )
    );
    $this->form_validation->set_rules($config);
    $this->form_validation->set_error_delimiters('', '');
    if($this->form_validation->run() === true){
      if(isUserLoggedIn($this->input->post('userTokenId'))===true){
        $token = $this->db->escape($this->input->post('userTokenId'));
        $sql = "SELECT *
                FROM conf_routesAccess
                WHERE user_type = (SELECT account_type FROM users WHERE id = (SELECT user FROM users_loggedIn WHERE token = $token)) AND route = 'teacher/createClasses'";
        if(routeAccess($sql)===true){
          //falta verificar se o professor pode criar aulas daquela disciplina
          $semester = $this->input->post('semester');
          $date = $this->input->post('date');
          $duration = $this->input->post('duration');
          $type = $this->input->post('type');
          $space = $this->input->post('space');
          $subject = $this->input->post('subject');
          $this->prof_class_model->createClasses($semester, $date, $duration, $type, $space, $subject);
          $data = array(
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

  public function matriculateStudent()
  {
    $config = array(
        array(
            'field' => 'userTokenId',
            'label' => "User's Token",
            'rules' => 'trim|required'
        ),
        array(
            'field' => 'course',
            'label' => "Course id",
            'rules' => 'trim|required'
        ),
        array(
            'field' => 'student_id',
            'label' => "Student id",
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
                WHERE user_type = (SELECT account_type FROM users WHERE id = (SELECT user FROM users_loggedIn WHERE token = $token)) AND route = 'teacher/matriculateStudent'";
        if(routeAccess($sql)===true){
          $subject = $this->input->post('course');
          $student = $this->input->post('student_id');
          $this->class_model->matriculateStudent($subject, $student);
          $data = array(
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
