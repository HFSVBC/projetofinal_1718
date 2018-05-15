<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
	/**
	* Class Model
	* includes: 
	*   -getSubjectsByProf -> array()
	*	-getClassesBySubject -> array()
	*/
	class Class_model extends CI_Model{
		//consult subjects given prof
		public function getSubjectsByProf($profToken){

			$sql = "SELECT id, designacao 
			        FROM disciplina
			        WHERE prof_t=(SELECT user FROM users_loggedIn WHERE token = $profToken)";

			$query = $this->db->query($sql);
			return $query->result_array();
		}

		//consult classes given subject
		public function getClassesBySubject($subject){
			$subject = $this->db->escape($subject);

			$sql = "SELECT id, data_inicio, data_inicio, espaco 
					FROM aula
					WHERE disciplina=$subject";

			$query = $this->db->query($sql);
            return $query->result_array();

		}

		public function getStudentByClass($subject)
        {
            $subject = $this->db->escape($subject);

            $sql = "SELECT id, name
                    FROM users
                    WHERE id IN (SELECT id_aluno FROM disciplina_aluno WHERE id_disciplina = $subject)";

            $query = $this->db->query($sql);
            return $query->result_array();
        }
	}

?>
