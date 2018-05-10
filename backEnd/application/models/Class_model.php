<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
	/**
	* Class Model
	* includes: 
	*   -getSubjectsByProf -> array()
	*	-getClassesBySubject -> array()
	*/
	class Class_model extends CI_Model{
		//consult subjects given prof
		public function getSubjectsByProf($prof){
			$prof = $this->db->escape($prof);
			$sql = "SELECT d.id, d.designacao FROM disciplina d WHERE d.prof_t=$prof";

			$query = $this->db->query($sql);
			$out = $query->result();
			return $out;
		}

		//consult classes given subject
		public function getClassesBySubject($subject){
			$subject = $this->db->escape($subject);
			$sql = "SELECT a.id, a.data_inicio, a.data_inicio, a.espaco FROM aula a WHERE a.disciplina=$subject";

			$query = $this->db->query($sql);
			$out = $query->result();
			return $out;

		}
	}

?>
