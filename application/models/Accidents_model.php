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
            $accident_name = $this->db->escape($this->input->post('accidentName'));
            $accident_block = $this->db->escape($this->input->post('accidentBlock'));
            $accident_floor = $this->db->escape($this->input->post('accidentFloor'));
            $accident_room = $this->db->escape($this->input->post('accidentRoom'));
            $accident_date = $this->db->escape($this->input->post('accidentDate'));
            $accident_description = $this->db->escape($this->input->post('accidentDescription'));
            $user = $this->db->escape($this->input->post('userTokenId'));

            $sql = "INSERT INTO accident (name, space, date_open, description, creator)
                    VALUES ($accident_name, (SELECT id FROM espaco WHERE bloco = $accident_block AND piso = $accident_floor AND sala = $accident_room), $accident_date, $accident_description, (SELECT user FROM users_loggedIn WHERE token = $user))";

            return $this->db->query($sql);
        }

        public function closeAccident()
        {
            $accident_closingDate = $this->db->escape($this->input->post('accidentClosingDate'));
            $accident_id = $this->db->escape($this->input->post('accidentId'));

            $sql = "UPDATE accident
                    SET date_close = $accident_closingDate
                    WHERE id = $accident_id";

            return $this->db->query($sql);
        }

        public function getAccidents()
        {
            
        }
        // public function updateAccident()
        // {
        //     $accident_id = $this->db->escape($this->input->post('accidentId'));
        //     $accident_name = $this->db->escape($this->input->post('accidentName'));
        //     $accident_block = $this->db->escape($this->input->post('accidentBlock'));
        //     $accident_floor = $this->db->escape($this->input->post('accidentFloor'));
        //     $accident_room = $this->db->escape($this->input->post('accidentRoom'));
        //     $accident_date = $this->db->escape($this->input->post('accidentDate'));
        //     $accident_closingDate = $this->db->escape($this->input->post('accidentClosingDate'));
        //     $accident_description = $this->db->escape($this->input->post('accidentDescription'));
        //     $user = $this->db->escape($this->input->post('userTokenId'));
        // }
    }
?>