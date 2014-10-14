<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class baseclassModel extends CI_Model {

	public function index()
	{
	}

	function checkIfExist($tablename, $checkValues){
		$this->load->database('IAMDB', TRUE);
		
		$this->db->from(strtolower($tableName));
		$this->db->where($columnValueArray);
        $query = $this->db->get();
        if ($query->num_rows() > 0) {
            return $query->result_array();
        } else {
            return false;
        }
	}


	function getAllnfoFromDB($tablename){
		//$this->load->database('default', TRUE);
		return false;
	}

	function getInfoWithConditions($tablename, $conditionArray){
		//$this->load->database('default', TRUE);
		return false;
	}

	

	function updateDB($tablename, $insertValues){
		//$this->load->database('default', TRUE);
		return false;
	}

	function updateDBWithCondition($tablename, $conditionArray, $insertValues){
		//$this->load->database('default', TRUE);
		return false;
	}

	

	function addIntoDB($tablename, $insertValues){
		//$this->load->database('default',TRUE);
		return false;
	}

	function addIntoDBWithCondition($tablename, $conditionArray, $insertValues){
		//$this->load->database('default', TRUE);
		return false;
	}


	function deleteFromDB($tablename, $deleteCondition){
		return false;
	}

}
