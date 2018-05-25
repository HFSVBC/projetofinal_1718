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

        $this->load->model('testcaseaccess_model');
    }

    public function createAccess()
    {
        $config = array(
            array(
                'field' => 'data_entrada',
                'label' => "Entrance Date",
                'rules' => 'trim|required'
            ),
            array(
                'field' => 'data_saida',
                'label' => "Exit Date",
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
            $this->testcaseaccess_model->createAccess();
            $data = array(
                "status"=>'success',
            );
            jsonExporter(200, $data);
        }else{
            jsonExporter(405, validation_errors());
        }
    }


}
?>
