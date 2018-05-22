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

			$sql = "SELECT id, data_inicio, data_fim, espaco
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

		public function createSubject($designation, $prof)
		{
			$designation = $this->db->escape($designation);

			$sql = "INSERT INTO disciplina(designacao, prof_t) SELECT $designation, user FROM users_loggedIn WHERE token = $prof";

			if($this->db->query($sql)){
				return true;
			}else{
				return false;
			}
		}

		public function createClasses($semester, $date, $duration, $type, $space, $subject){
			// $date tem que ser yyyy-mm-dd hh:mm:ss -> ss vai ser sempre 00 se quiserem eu mudo isso
			// $duration é a duraçao em minutos

			$semester = $this->db->escape($semester);
			$date = $this->db->escape($date);
			$duration = $this->db->escape($duration);
			$type = $this->db->escape($type);
			$space = $this->db->escape($space);
			$subject = $this->db->escape($subject);

			list($simple_date, $hours_minutes) = explode(" ",$date);
			list($year, $month, $day) = explode("-", $simple_date);
			list($hour, $minutes) = explode(":", $hours_minutes, -1);

			$month = intval($month);
			$day = intval($day);
			$hour = intval($hour);
			$minutes = intval($minutes);

			if($semester == 1){
				$sem_duration = 14;
			}else{
				$sem_duration = 15;
			}

			$sql = "";
			foreach(range(0, $sem_duration)){
				$dates_helper = computeDate($year, $month, $day, $hour, $minutes, $duration);
				$month = $dates_helper[0];
				$dat = $dates_helper[1];
				$sql.="INSERT INTO aula(data_inicio, data_fim, tipo, espaco, disciplina) VALUES($dates_helper[2], $dates_helper[3], $type, $space, $subject);\n";
			}

			if($this->db->query($sql)){
				return true;
			}else{
				return false;
			}
		}

		public function matriculateStudent($subject, $student){

			$subject = $this->db->escape($subject);
			$student = $this->db->escape($student);

			$sql="INSERT INTO disciplina_aluno(id_disciplina,id_aluno) VALUES ($subject, $student)";

			if($this->db->query($sql)){
				return true;
			}else{
				return false;
			}
		}
	}
?>
