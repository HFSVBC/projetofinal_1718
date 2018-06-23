<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
	/**
	* Acess Model
    * includes:
    *     - createNewAccident: creates a new accident on the db
    *     - closeAccident: closes the accident (maybe the user who closes the issue must be logged)
	*/
	class Accidents_model extends CI_Model{

        public function createNewAccident()
        {
            // name	space	date_open	date_close	description	creator
            $accident_name = $this->db->escape($this->input->post('type'));
            $accident_block = $this->db->escape($this->input->post('block'));
            $accident_floor = $this->db->escape($this->input->post('floor'));
            $accident_room = $this->db->escape($this->input->post('room'));
            $accident_date = $this->db->escape($this->input->post('date'));
            $accident_description = $this->db->escape($this->input->post('description'));
            $user = $this->db->escape($this->input->post('userTokenId'));

            $sql = "INSERT INTO accident (name, space, date_open, description, creator)
                    VALUES ($accident_name, (SELECT id FROM espaco WHERE bloco = $accident_block AND piso = $accident_floor AND sala = $accident_room), $accident_date, $accident_description, (SELECT user FROM users_loggedIn WHERE token = $user))";

            return $this->db->query($sql);
        }

        // public function closeAccident()
        // {
        //     $accident_closingDate = $this->db->escape($this->input->post('accidentClosingDate'));
        //     $accident_id = $this->db->escape($this->input->post('accidentId'));

        //     $sql = "UPDATE accident
        //             SET date_close = $accident_closingDate
        //             WHERE id = $accident_id";

        //     return $this->db->query($sql);
        // }

        public function getAccidents($token = "'null'")
        {
            $accident_name = $this->db->escape($this->input->post('type'));
            $accident_block = $this->db->escape($this->input->post('block'));
            $accident_floor = $this->db->escape($this->input->post('floor'));
            $accident_room = $this->db->escape($this->input->post('room'));
            $accident_date_init = $this->db->escape($this->input->post('date_ini'));
            $accident_date_end = $this->db->escape($this->input->post('date_end'));

            $sql = "SELECT a.id, a.name, CONCAT_WS('.', e.bloco, e.piso, e.sala) as 'espaco', a.date_open, a.date_close, a.description
                    FROM accident a, espaco e, users u
                    WHERE a.space = e.id AND u.id = a.creator AND $accident_date_init < a.date_open AND a.date_open < $accident_date_end";
            
            if($accident_name != "'null'")
                $sql .= " AND a.name = $accident_name";
            if($accident_block != "'null'")
                $sql .= " AND e.bloco = $accident_block";
            if($accident_floor != "'null'")
                $sql .= " AND e.piso = $accident_floor";
            if($accident_room != "'null'")
                $sql .= " AND e.sala = $accident_room";
            if($token != "'null'")
                $sql .= " AND u.user IN (SELECT u.id
                                         FROM users u
                                         WHERE u.account_type = (SELECT u2.account_type
                                                                 FROM users u2
                                                                 WHERE u2.id = (SELECT ul.user
                                                                                FROM users_loggedIn ul
                                                                                WHERE ul.token = $token))";

            $query = $this->db->query($sql);
            return $query->result_array();
        }
    }
?>