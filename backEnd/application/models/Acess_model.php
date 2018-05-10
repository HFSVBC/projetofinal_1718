<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
	/**
	* Acess Model
	* includes:
	*	-getAcessByUser -> array()
	*	-getPresentStudentByClass -> array()
	*/
	class Acess_model extends CI_Model{
		//
		public function getAcessByUser($uid)
		{
			$uid = $this->db->escape($uid);

			$sql = "SELECT a.data_entrada, a.data_fim, e.bloco, e.piso, e.sala FROM acesso a,
					 espaco e WHERE a.user=$uid AND a.espaco=e.id";

			$query = $this->db->query($sql);
			$out = $query->result();
			return $out;

		}

		public function  getPresentStudentsByClass($class){

			$class = $this->db->escape($class);

			$sql = "SELECT p.aluno, 'presente' AS presente FROM aula a, disciplina_aluno da, presencas p
							WHERE a.disciplina=da.id_disciplina AND a.id=$class AND p.aula=a.id AND p.aluno=da.id_aluno
							UNION
							SELECT da2.id_aluno, 'nao presente' AS presente FROM aula a2, disciplina_aluno da2
							WHERE a2.disciplina=da2.id_disciplina AND a2.id=$class AND da2.id_aluno NOT IN (SELECT p3.aluno FROM presencas p3 WHERE p3.aula=$class);";

			$query = $this->db->query($sql);
			$out = $query->result();
			return $out;
		}
	}

?>
