<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Prospeks extends CI_Controller {
    
    public function __construct(){
        parent::__construct();
    }
    
    public function post_create(){
        
        $p = $this->input->post();
        $d = $this->curl->simple_post('http://192.168.10.180/bwmp/index.php/api/bwmp/getUser/format/json',$p);
        
        $this->output->set_output($d)->_display();
        exit();
        
    }
    
    public function get_calonDebitur(){
        
        $d = $this->curl->simple_get('http://192.168.10.180/bwmp/index.php/api/bwmp/getUser/format/json');
        
        $this->output->set_output($d)->_display();
        exit();
        
    }
    
    public function get_detail(){
        
        $d = $this->curl->simple_get('http://192.168.10.180/bwmp/index.php/api/bwmp/getUser/format/json');
        
        $this->output->set_output($d)->_display();
        exit();
        
    }
    
}