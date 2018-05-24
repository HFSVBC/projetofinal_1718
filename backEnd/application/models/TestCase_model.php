<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
	/**
	* Test Case Model
  * includes:
  *  generateAcess($user=0, $space=0)->inserts random acess into db
	*/
	class TestCase_model extends CI_Model{
    //generates random acess
    public function generateAcess($user=0, $space=0){
      if($user==0){
        $user    = mt_rand(45000,49999);
      }
      if($space==0){
        $space   = mt_rand(101,200);
      }

      $year    = array_rand(array(2017,2018), 1);
      $month   = array_rand(array(1,2,3,4,5,6,7,9,10,11,12), 1);
      $day     = mt_rand(1,31);
      $hour    = mt_rand(9,18);
      $minutes = mt_rand(1,60);
      $date    = computeDate($year, $month, $day, $hour, $minute, 1);

      $sql     = "INSERT INTO acesso(data_entrada,data_fim,espaco,user) VALUES($date[2], $date[3], $space, $user)";

      $this->db->query($sql);
    }
  }
  ?>
