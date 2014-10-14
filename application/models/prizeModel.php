<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class prizeModel extends baseclassModel {

	public function index()
	{
	}

	function getAgentRedemptionList(){
		$prizeList = array(
				['prizeID'=> 1,
				'prizeDesc'=>"1 Night at Fullerton Hotel",
				'pointsNeeded'=>900000],
				['prizeID'=> 2,
				'prizeDesc'=>"HSBC Luggage Bag",
				'pointsNeeded'=>200000],
				['prizeID'=> 3,
				'prizeDesc'=>"1 SIA Airticket",
				'pointsNeeded'=>900000]
			);

		return $prizeList;
	}

	

}
