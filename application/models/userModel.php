<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class userModel extends baseclassModel {

	public function index()
	{
	}

	//if true, return userid else return false
	function checkUserLogin($loginDetails){
		//check iamdb for user info to get accountID
		//$agentObject = $this->checkIfExist('tAccount', $loginDetails);

		//return $this->checkIfExist('tablename',$loginDetails);

		$agentObject = $this->getAgentDetails(1);

		return array('iUserID'=> 1, 'agentObject' => $agentObject);
	}

	function getAgentDetails($agentID){
		//get agent details from database
  			
		$agentObject = array(
			'agentID' => 1,
			'txName' => 'Tan' .' '.'Ah Beng', //last name + first name
			'txCurrentLocation'=>'Tanjong Pagar MRT',
			'iPoints'=> rand(10,100),
			'iCurrentLeadsCollected'=>rand(1,10),
			'iCurrentMonthTarget'=>rand(10,20),
			'iPreviousLeadsCollected'=>rand(1,10),
			'iPreviousMonthTarget'=>rand(10,20)
			);

		return $agentObject;
	}

	function getAgentPoints($userId){
		$agentPoints = rand(300000, 500000);

		return $agentPoints;
	}

	function getAgentSchedule($agentID){
		$scheduleObject = array(
				['date'=> '20/06/14',
				'venue'=>'Bugis Mrt Stationjasdhfk jhasjkdfj kasd ldkjf',
				'startTime'=>'00:00',
				'endTime'=> '23:00'],
				['date'=> '20-06-2014',
				'venue'=>'Bugis Mrt Station',
				'startTime'=>'00:00',
				'endTime'=> '23:00'],
				['date'=> '20-06-2014',
				'venue'=>'Bugis Mrt Station',
				'startTime'=>'00:00',
				'endTime'=> '23:00'],
				['date'=> '20-06-2014',
				'venue'=>'Bugis Mrt Station',
				'startTime'=>'00:00',
				'endTime'=> '23:00'],
				['date'=> '20-06-2014',
				'venue'=>'Bugis Mrt Station',
				'startTime'=>'00:00',
				'endTime'=> '23:00'],
				['date'=> '20-06-2014',
				'venue'=>'Bugis Mrt Station',
				'startTime'=>'00:00',
				'endTime'=> '23:00']
			);

		return $scheduleObject;
	}

	function getCheckInList($agentID){
		//time in 24hrs, details arranged by latest checkin time
		$checkinList = array(
				['storeID'=> 1,'storeName'=> 'store1','locationID'=> 1,'locationName'=>'Location Name 1', 'date'=> '29 June 2014',
				'desc'=>'Bugis Mrt Station',
				'lastCheckInTime'=>'00:00 ', 'isCheckedIn'=> true],
				['storeID'=> 2,'storeName'=> 'store2','locationID'=> 2,'locationName'=>'Location Name 2','date'=> '29 June 2014',
				'desc'=>'Bugis Mrt Station',
				'lastCheckInTime'=>'00:00 ', 'isCheckedIn'=> false],
				['storeID'=> 3,'storeName'=> 'store3','locationID'=> 3,'locationName'=>'Location Name 3','date'=> '29 June 2014',
				'desc'=>'Singapore Expo Hall 1',
				'lastCheckInTime'=>'00:00 ', 'isCheckedIn'=> false],
				['storeID'=> 4,'storeName'=> 'store4','locationID'=> 4,'locationName'=>'Location Name 4','date'=> '29 June 2014',
				'desc'=>'Bugis Mrt Station',
				'lastCheckInTime'=>'00:00 ', 'isCheckedIn'=> false],
				['storeID'=> 5,'storeName'=> 'store5','locationID'=> 5,'locationName'=>'Location Name 5','date'=> '29 June 2014',
				'desc'=>'Bugis Mrt Station',
				'lastCheckInTime'=>'00:00 ', 'isCheckedIn'=> false],
				['storeID'=> 6,'storeName'=> 'store6','locationID'=> 6,'locationName'=>'Location Name 6','date'=> '29 June 2014',
				'desc'=>'Bugis Mrt Station',
				'lastCheckInTime'=>'00:00 ', 'isCheckedIn'=> false],
				['storeID'=> 7,'storeName'=> 'store7','locationID'=> 7,'locationName'=>'Location Name 7','date'=> '29 June 2014',
				'desc'=>'Bugis Mrt Station',
				'lastCheckInTime'=>'00:00 ', 'isCheckedIn'=> false],
				['storeID'=> 8,'storeName'=> 'store8','locationID'=> 8,'locationName'=>'Location Name 8','date'=> '29 June 2014',
				'desc'=>'Bugis Mrt Station',
				'lastCheckInTime'=>'00:00 ', 'isCheckedIn'=> false],
				['storeID'=> 9,'storeName'=> 'store9','locationID'=> 9,'locationName'=>'Location Name 9','date'=> '29 June 2014',
				'desc'=>'Bugis Mrt Station',
				'lastCheckInTime'=>'00:00 ', 'isCheckedIn'=> false],
				['storeID'=> 10,'storeName'=> 'store10','locationID'=> 10,'locationName'=>'Location Name 10','date'=> '29 June 2014',
				'desc'=>'Bugis Mrt Station',
				'lastCheckInTime'=>'00:00 ', 'isCheckedIn'=> false]
			);
		return $checkinList;
	}

	function getCheckInLocationDetails($agentID){
		//return last checkin location and store code for today
		$salesAckInfo = array('storeID'=> 1,'storeName'=>'store1','locationID'=> 1,'locationName'=>'Location Name 1', 'date'=> '29 June 2014',
				'desc'=>'Bugis Mrt Station',
				'lastCheckInTime'=>'00:00', 'isCheckedIn'=> true);
		return $salesAckInfo;
	}

	function setAgentCheckIn($agentID, $locationID, $storeID, $storeName, $locationName, $lat, $long,$imageName){
		return true;
	}

	function getCustomerRedemptionList($storeID){
		//return the list of product redeemed at a particular store at the last checkin date
		$saleAckList = array(
				['productID'=> 1,'productName'=>'product Name 1', 'itemTypeId'=> 1,
				'itemDesc'=>'item 1','timeRedeem'=>'00:00 '],
				['productID'=> 2,'productName'=>'product Name 2', 'itemTypeId'=> 2,
				'itemDesc'=>'item 1','timeRedeem'=>'00:00 '],
				['productID'=> 3,'productName'=>'product Name 3', 'itemTypeId'=> 3,
				'itemDesc'=>'item 1','timeRedeem'=>'00:00 '],
				['productID'=> 4,'productName'=>'product Name 4', 'itemTypeId'=> 4,
				'itemDesc'=>'item 1','timeRedeem'=>'00:00 '],
				['productID'=> 5,'productName'=>'product Name 5', 'itemTypeId'=> 5,
				'itemDesc'=>'item 1','timeRedeem'=>'00:00 '],
				['productID'=> 6,'productName'=>'product Name 6', 'itemTypeId'=> 6,
				'itemDesc'=>'item 1','timeRedeem'=>'00:00 '],
				['productID'=> 7,'productName'=>'product Name 7', 'itemTypeId'=> 7,
				'itemDesc'=>'item 1','timeRedeem'=>'00:00 '],
				['productID'=> 8,'productName'=>'product Name 8', 'itemTypeId'=> 8,
				'itemDesc'=>'item 1','timeRedeem'=>'00:00 '],
				['productID'=> 9,'productName'=>'product Name 9', 'itemTypeId'=> 9,
				'itemDesc'=>'item 1','timeRedeem'=>'00:00 '],
				['productID'=> 10,'productName'=>'product Name 10', 'itemTypeId'=> 10,
				'itemDesc'=>'item 1','timeRedeem'=>'00:00 '],

			);
		return $saleAckList;

	}

	function addNewCustomerRedemptionItem($storeID, $productID, $promoD, $agentID){
		return true;
	}

	function deleteCustomerRedemptionItem($storeID, $productID,$locationID, $timeRedeem, $agentID){
		return true;
	}

	function getAllProductTypes(){
		//return product id, product name
		$productList = array(
				['productID'=> '',
				'productDesc'=>'Please Select A Product'],
				['productID'=> '1',
				'productDesc'=>'Fruits'],
				['productID'=> '2',
				'productDesc'=>'Electronics'],
				['productID'=> '3',
				'productDesc'=>'Books'],
				['productID'=> '4',
				'productDesc'=>'Vouchers']
			);

		return $productList;
	}

	function getAllItemRedeemable($productid){
		//return product id, product name
		// if($productid == '1'){
		// 	$productList = array(
		// 			['itemID'=> '',
		// 			'itemDesc'=>'Please Select An Item'],
		// 			['itemID'=> '1',
		// 			'itemDesc'=>'Apple'],
		// 			['itemID'=> '2',
		// 			'itemDesc'=>'Banana'],
		// 			['itemID'=> '3',
		// 			'itemDesc'=>'Coconut'],
		// 			['itemID'=> '4',
		// 			'itemDesc'=>'Watermelon']
		// 		);
		// }else{
		// 	$productList = array(
		// 			['itemID'=> '',
		// 			'itemDesc'=>'Please Select An Item'],
		// 			['itemID'=> '1',
		// 			'itemDesc'=>'Movie Tickets'],
		// 			['itemID'=> '2',
		// 			'itemDesc'=>'Captialand Vouchers'],
		// 			['itemID'=> '3',
		// 			'itemDesc'=>'Food Vouchers'],
		// 			['itemID'=> '4',
		// 			'itemDesc'=>'Travel Vouchers']
		// 		);
		// }
		$productlist=[];
		return $productList;
	}

	function setAgentPrizeRedeemed($prizeID,$agentID){
		return true;
	}

}
