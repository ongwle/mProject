<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class mainController extends CI_Controller {

	public function index(){

		$this->load->helper('URL');

		$this->load->view('inc/header');
		 $this->load->view('TouchSwipe');
		$this->load->view('inc/footer');
	}
}











