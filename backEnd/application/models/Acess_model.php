<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
	/**
	* User Model
	* includes: 
	*	-getAcessByUser -> array()
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
	}

?>