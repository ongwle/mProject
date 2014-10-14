<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class leaderModel extends baseclassModel {

	public function index()
	{
	}

	function getTopLeaders(){
		//get today's leaderboard data (top 3 only)
		$topLeaders = array(
				['leaderboardAgentName'=> "Tan Han Kiong",
				'salesAmount'=>10],
				['leaderboardAgentName'=> "Abhimanyu Thomas",
				'salesAmount'=>8],
				['leaderboardAgentName'=> "Yue Mei Yuan",
				'salesAmount'=>6]
			);

		return $topLeaders;
	}

	function getCurrentTotalSales(){
		$currentSales = 500;

		return $currentSales;
	}
}
