<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
	/**
	* User Model
	* includes:
	*	-getAcessByUser -> array()
	*
	* profs consultarem as presenças nas suas aulas(por disciplina e por aula)
*	SELECT p.aluno, p.aula, 'presente' AS presente FROM aula a, disciplina_aluno da, presencas p WHERE a.disciplina=1 AND p.aula=a.id AND a.disciplina=da.id_disciplina AND p.aluno=da.id_aluno
*UNION
*SELECT da2.id_aluno, a2.id, 'nao presente' AS presente FROM disciplina_aluno da2, aula a2 WHERE a2.disciplina=1 AND a2.disciplina=da2.id_disciplina AND da2.id_aluno NOT IN (SELECT p3.aluno FROM presencas p3 WHERE p3.aula=a2.id);
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

		public function getPresentStudentsBySubject($subject){

			$subject = $this->db->espace($subject);

			$sql = "SELECT p.aluno, p.aula FROM aula a, presencas p WHERE a.disciplina=$subject AND p.aula=a.id";

			$query = $this->db->query($sql);
			$out = $query->result();
			return $out;
		}
	}

?>
