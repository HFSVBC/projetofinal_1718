<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
	/**
	* Acess Model
	* includes:
	*	-getAcessByUser -> array()
	*	-getPresentStudentByClass -> array()
	*/
	class Access_model extends CI_Model{
		//
		public function getAccessByUser($user, $lim)
		{
			$user = $this->db->escape($user);
			// $lim  = (int) $this->db->escape($lim);

			$sql = "SELECT a.data_entrada, a.data_fim, e.bloco, e.piso, e.sala
					FROM acesso a, espaco e
					WHERE a.user=$user AND a.espaco=e.id";
			if($lim !== "null")
				$sql .= " ORDER BY a.id DESC LIMIT $lim";

			$query = $this->db->query($sql);
			return $query->result_array();
		}

		public function getStudentAttendanceByClass_Teacher()
		{
            $course	  = $this->db->escape($this->input->post("course_id"));
			$student  = $this->db->escape($this->input->post("student_id"));
            $class    = $this->db->escape($this->input->post("class_id"));

            $sql = "SELECT u.id, u.name, (SELECT d.designacao FROM disciplina d WHERE a.disciplina = d.id) AS disciplina, a.data_inicio, a.data_fim
                    FROM users u, presencas p, aula a
                    WHERE u.id = p.aluno AND p.aula = a.id AND a.disciplina = $course";

            if($student != "'null'")
                $sql .= " AND u.id = $student";
            if($class != "'null'")
                $sql .= " AND p.aula = $class";

            $query = $this->db->query($sql);
            return $query->result_array();
		}

		public function getAvailableRooms($hora){
			$sql = "SELECT *
							FROM espaco e
							WHERE e.lotacao > (SELECT COUNT(a.id) FROM acesso a WHERE a.espaco=e.id AND $hora BETWEEN a.data_entrada AND a.data_fim)";
		}
	}

?>
