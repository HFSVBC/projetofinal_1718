<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

	class TestCaseAccess_model extends CI_Model{

		public function createAccess()
		{
			$entrance = $this->db->escape($this->input->post("data_entrada"));
      $exit     = $this->db->escape($this->input->post("data_saida"));
      $space    = $this->db->escape($this->input->post("espaco"));
      $user     = $this->db->escape($this->input->post("user"));

			$sql = "INSERT INTO acesso(data_entrada,data_fim,espaco,user) VALUES ($entrance, $exit, $space, $user)";
			$query = $this->db->query($sql);
		}
	}
?>
