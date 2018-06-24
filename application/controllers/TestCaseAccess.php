<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class TestCaseAccess extends CI_Controller
{
    public function __construct($config = 'rest')
    {
        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Methods: GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE");
        // header("Access-Control-Allow-Headers: Content-Type");
        parent::__construct();

        $this->load->model('testCaseAccess_model');
    }

    public function createAcess()
    {
      $config = array(
                array(
                    'field' => 'data',
                    'label' => "Access Date",
                    'rules' => 'trim|required'
                ),
                array(
                    'field' => 'espaco',
                    'label' => "Access Room",
                    'rules' => 'trim|required'
                ),
                array(
                    'field' => 'user',
                    'label' => "Access user",
                    'rules' => 'trim|required'
                )
            );
            $this->form_validation->set_rules($config);
            $this->form_validation->set_error_delimiters('', '');
            if($this->form_validation->run() === true){
                $user = $this->db->escape($this->input->post('user'));
                $date = $this->db->escape($this->input->post('data'));
                $space = $this->db->escape($this->input->post('espaco'));
                //verifica se é entrada ou saida
                $entranceId = $this->testcaseaccess_model->verifyAcessStatus($user, $space)['id'];
                if(empty($entranceId)){
                  $status="entrada";
                  //Verifica se esta em algum outro lado e ainda nao saiu
                  $otherAccessId = $this->testcaseaccess_model->verifyUserAcess($user)['id'];
                  if(!empty($otherAccessId)){
                    //Criar saida para esse espaço
                    $this->testcaseaccess_model->CreateExit($date, $otherAccessId);
                  }
                  //Verifica se esta a haver aula a essa hora nesse espaço
                  $class = $this->testcaseaccess_model->verifyClass($date, $space)['id'];
                  if(!empty($class)){
                    //verifica se o aluno NAO esta matriculado
                    $isNotMatriculated = $this->testcaseaccess_model->verifyMatriculate($user, $class);
                    if(!$isNotMatriculated){
                      //Esta matriulado por isso cria presença
                      $this->testcaseaccess_model->createPresence($class, $user);
                    }
                  //Cria o acesso, entrada
                  $this->testcaseaccess_model->createAcess($date, $space, $user);
                  }
                } else {
                  $status = "saida";
                  //Cria a saida apropriada
                  $this->testcaseaccess_model->CreateExit($date, $entranceId);
                }
                $data = array(
                    "status"=> $status
                );
                jsonExporter(200, $data);
            }else{
                jsonExporter(405, validation_errors());
            }
      }
}
?>
