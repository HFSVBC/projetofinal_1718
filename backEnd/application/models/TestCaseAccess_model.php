<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

	class TestCaseAccess_model extends CI_Model{

		public function createAccess()
		{
			$entrance = $this->db->escape($this->input->post("data_entrada"));
      $exit     = $this->db->escape($this->input->post("data_saida"));
      $space    = $this->db->escape($this->input->post("espaco"));
      $user     = $this->db->escape($this->input->post("user"));
			$aula     = $this->db->escape($this->input->post("aula"));
			
			if($aula==0){
				$sql = "INSERT INTO acesso(data_entrada,data_fim,espaco,user) VALUES ($entrance, $exit, $space, $user)";
			} else{
				$sql = "INSERT INTO presencas(aula,aluno) VALUES ($aula,$user);\n\
							INSERT INTO acesso(data_entrada,data_fim,espaco,user) SELECT a.data_inicio, a.data_fim, a.espaco, $user FROM aula a WHERE a.id=$aula;\n";
			}
			$query = $this->db->query($sql);
		}
	}
?>
