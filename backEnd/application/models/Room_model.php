<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/**
 * Room Model
 * includes:
 */
class Room_model extends CI_Model{
    public function getRemainingSpaceInRooms()
    {
        $sql = "SELECT e.id, CONCAT_WS('.', e.bloco, e.piso, e.sala) AS espaco, IFNULL((e.lotacao - (SELECT COUNT(ac.espaco) FROM acesso ac WHERE e.id = ac.espaco AND ac.data_fim >= NOW() AND ac.data_entrada <= NOW() GROUP BY ac.espaco)),e.lotacao) AS available
                FROM espaco e
                WHERE e.id NOT IN (SELECT a.espaco FROM aula a WHERE (NOW() + INTERVAL 8 HOUR) >= a.data_inicio AND (NOW() + INTERVAL 8 HOUR) <= a.data_fim)";

        $query = $this->db->query($sql);
        return $query->result_array();
    }
}
?>