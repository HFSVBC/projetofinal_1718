<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

	class TestCaseAccess_model extends CI_Model{
		//Verifica se o utilizador fez algum acesso e não saiu
		public function verifyUserAcess($user){
		  $sql = "SELECT a.id FROM acesso a WHERE a.user=$user AND a.data_fim=NULL";

		  $result = $this->db->query($sql);
		  return $result->row();
		}

		//Verifica se é uma entrada ou saida (array vazio caso seja entrada)
		public function verifyAcessStatus($user, $space){
		  $sql = "SELECT a.id FROM acesso a WHERE a.user=$user AND a.espaco=$space AND a.data_fim=NULL";

		  $result = $this->db->query($sql);
		  return $result->row();
		}

		//Verifica se naquele espaço naquela hora está a haver alguma aula (array vazio se não houver aula)
		public function verifyClass($date, $space){
		  $sql = "SELECT a.id FROM aula a WHERE $date BETWEEN a.data_inicio - INTERVAL 10 MINUTE AND a.data_inicio + INTERVAL 10 MINUTE AND a.espaco=$space";

		  $result = $this->db->query($sql);
		  return $result->row();
		}

		//Verifica se o aluno está inscrito naquela disciplina devolve array cheio caso esteja inscrito
		public function verifyMatriculate($aluno, $aula){
		  $sql = "SELECT * FROM disciplina_aluno da, aula a WHERE da.id_aluno=$aluno AND a.id=$aula AND da.id_disciplina=a.disciplina";

		  $result = $this->db->query($sql);
		  return empty($result->result());
		}

		//Fazer update caso seja saida
		public function CreateExit($date, $aid){
		  $sql = "UPDATE acesso SET data_saida=$date WHERE id=$aid AND data_saida=NULL";

		  $this->db->query($sql);
		}

		//Caso esteja inscrito e houver aula por nas presenças novo arg. $aula
		public function createPresence($aula, $user){
		  $sql = "INSERT INTO presencas(aula, aluno) VALUES($aula, $user)";

		  $this->db->query($sql);
		}

		//Caso seja uma entrada normal
		public function createAcess($date, $space, $user){
		  $sql = "INSERT INTO acesso(data_entrada, data_fim, espaco, user) VALUES($date, NULL, $space, $user)";

		  $this->db->query($sql);
		}
	}
?>
