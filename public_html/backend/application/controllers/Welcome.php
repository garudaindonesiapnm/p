<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {
    
    public function _construct(){
        parent::__construct();
    }
	
    public function index()
    {
        $d = $this->curl->simple_get('http://192.168.10.180/bwmp/index.php/api/bwmp/getUser/format/json');
        
        echo $d;
        //$this->load->view('welcome_message');
    }
    
    public function post()
    {
        $p = $this->input->post();
        $d = $this->curl->simple_post('http://192.168.10.180/bwmp/index.php/api/bwmp/setUser',$p);
        
        echo $d;
        //$this->load->view('welcome_message');
    }
}
