<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
	/**
	* Acess Model
	* includes:
	*	-getAcessByUser -> array()
	*	-getPresentStudentByClass -> array()
	*/
	class Access_model extends CI_Model{
		//
		public function getAccessByUser($lim)
		{
			$token = $this->db->escape($this->input->post("userTokenId"));

            $block = $this->db->escape($this->input->post("block"));
            $floor = $this->db->escape($this->input->post("floor"));
            $room  = $this->db->escape($this->input->post("room"));


			$sql = "SELECT a.data_entrada, a.data_fim, e.bloco, e.piso, e.sala
					FROM acesso a, espaco e
					WHERE a.user=(SELECT user FROM users_loggedIn WHERE token = $token) AND a.espaco=e.id";

			if($block != "'null'")
			    $sql .= " AND e.bloco = $block";
            if($floor != "'null'")
                $sql .= " AND e.piso = $floor";
            if($room != "'null'")
                $sql .= " AND e.sala = $room";
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

            if($student == "'null'" && $class == "'null'"){
                $sql = "SELECT u.id, u.name, COUNT(u.name) AS 'attended_classes', (SELECT d.designacao FROM disciplina d WHERE a.disciplina = d.id) AS disciplina, a.data_inicio, a.data_fim
                        FROM users u, presencas p, aula a
                        WHERE u.id = p.aluno AND p.aula = a.id AND a.disciplina = $course
                        GROUP BY u.name";
            }else{
                $sql = "SELECT u.id, u.name, (SELECT d.designacao FROM disciplina d WHERE a.disciplina = d.id) AS disciplina, a.data_inicio, a.data_fim
                        FROM users u, presencas p, aula a
                        WHERE u.id = p.aluno AND p.aula = a.id AND a.disciplina = $course";

                if($student != "'null'" || is_null($student))
                    $sql .= " AND u.id = $student";
                if($class != "'null'" || is_null($class))
                    $sql .= " AND p.aula = $class";
            }

            $query = $this->db->query($sql);
            return $query->result_array();
        }
        
        public function getStudentAttendance_Mine()
		{
            $class = $this->db->escape($this->input->post("class_id"));
            $course	  = $this->db->escape($this->input->post("course_id"));
            $token = $this->db->escape($this->input->post("userTokenId"));

            if($student == "'null'" && $class == "'null'"){
                $sql = "SELECT (SELECT d.designacao FROM disciplina d WHERE a.disciplina = d.id) AS disciplina, COUNT(disciplina) AS 'attendance', a.data_inicio, a.data_fim
                        FROM users u, users_loggedIn uli,presencas p, aula a
                        WHERE u.id = p.aluno AND p.aula = a.id AND uli.user = u.id AND uli.token = $token
                        GROUP BY disciplina";
            }else{
                $sql = "SELECT (SELECT d.designacao FROM disciplina d WHERE a.disciplina = d.id) AS disciplina, a.data_inicio, a.data_fim
                        FROM users u, users_loggedIn uli,presencas p, aula a
                        WHERE u.id = p.aluno AND p.aula = a.id AND uli.user = u.id AND uli.token = $token";

                if($course != "'null'" || is_null($course))
                    $sql .= " AND a.disciplina = $course";
                if($class != "'null'" || is_null($class))
                    $sql .= " AND p.aula = $class";
            }

            $query = $this->db->query($sql);
            return $query->result_array();
		}

		public function getIndividualStudentAttendance_Teacher()
        {
            $course	  = $this->db->escape($this->input->post("course_id"));
            $student  = $this->db->escape($this->input->post("student_id"));
            $class    = $this->db->escape($this->input->post("class_id"));

            $sql = "SELECT (SELECT u.name FROM users u WHERE u.id = $student) AS 'name', data_inicio, id, IF(ISNULL((SELECT p.aluno FROM presencas p WHERE p.aula = a.id AND p.aluno = $student)), 0, 1) AS 'attended' 
                    FROM aula a 
                    WHERE (SELECT u.name FROM users u WHERE u.id = $student) IS NOT NULL AND a.disciplina = $course";
            if($class != "'null'" || is_null($class))
                $sql .= " AND a.id = $class";

            $query = $this->db->query($sql);
            return $query->result_array();
        }

        public function changeStudentAttendanceState()
		{
            $student  = $this->db->escape($this->input->post("student_id"));
            $class    = $this->db->escape($this->input->post("class_id"));
            $stateNow = $this->input->post("state_now");

            if($stateNow == 0){
            	$r = $this->addClassAttendance($student, $class);
			}else if($stateNow == 1){
                $r = $this->removeClassAttendance($student, $class);
			}

            return $r;
		}
        public function getAvailableRooms(){
            $bloco = $this->db->escape($this->input->post("block"));
            $piso = $this->db->escape($this->input->post("floor"));

            $sql = "SELECT e.id, CONCAT_WS('.', e.bloco, e.piso, e.sala) AS espaco, IFNULL((e.lotacao - (SELECT COUNT(ac.espaco) FROM acesso ac WHERE e.id = ac.espaco AND ac.data_fim >= NOW() AND ac.data_entrada <= NOW() GROUP BY ac.espaco)),e.lotacao) AS available
			        FROM espaco e 
			        WHERE e.id NOT IN (SELECT a.espaco FROM aula a WHERE (NOW() + INTERVAL 8 HOUR) >= a.data_inicio AND (NOW() + INTERVAL 8 HOUR) <= a.data_fim) AND e.bloco = $bloco";

            if($piso != "'null'")
                $sql .= " AND e.piso = $piso";

            $query = $this->db->query($sql);
            return $query->result_array();
        }
        public function getNumberOfPeopleInRooms(){
            $bloco = $this->db->escape($this->input->post("block"));
            $piso = $this->db->escape($this->input->post("floor"));
            $room = $this->db->escape($this->input->post("room"));

            $sql = "SELECT e.id, CONCAT_WS('.', e.bloco, e.piso, e.sala) AS espaco, e.lotacao, COUNT(e.id) as 'now'
                    FROM espaco e, acesso a 
                    WHERE a.espaco = e.id AND ((NOW() + INTERVAL 8 HOUR) >= a.data_entrada AND (NOW() + INTERVAL 8 HOUR) <= a.data_fim) AND e.bloco = $bloco";

            if($piso != "'null'")
                $sql .= " AND e.piso = $piso";
            if($room != "'null'")
                $sql .= " AND e.sala = $room";

            $sql .= " GROUP BY e.id";

            $query = $this->db->query($sql);
            return $query->result_array();
        }
		# AUX Methods --------------------------------------------------------------------
        public function getFacultyBlocks()
        {
            $sql = "SELECT DISTINCT bloco FROM espaco";

            $query = $this->db->query($sql);
            return $query->result_array();
        }
        public function getBlockFloors()
        {
            $block = $this->db->escape($this->input->post("block"));

            $sql = "SELECT DISTINCT piso FROM espaco where bloco = $block";

            $query = $this->db->query($sql);
            return $query->result_array();
        }
        public function getFloorRooms()
        {
            $block = $this->db->escape($this->input->post("block"));
            $floor = $this->db->escape($this->input->post("floor"));

            $sql = "SELECT DISTINCT sala FROM espaco where bloco = $block AND piso = $floor";

            $query = $this->db->query($sql);
            return $query->result_array();
        }
		private function addClassAttendance($s, $c){
			$sql = "INSERT INTO presencas (aluno, aula) VALUES($s, $c)";

			return $this->db->query($sql);
		}

		private function removeClassAttendance($s, $c){
			$sql = "DELETE FROM presencas WHERE aluno = $s AND aula = $c";

            return $this->db->query($sql);
        }
	}

?>
