<?php
defined('BASEPATH') OR exit('No direct script access allowed');
    // checks if user is logged in
    function isUserLoggedIn($token)
    {
        $CI =& get_instance();
        $CI->load->model('user_model');
        return !$CI->user_model->userLoggedin($token);
    }
    // generate new token
    function regenerateUserToken($token)
    {
        $CI =& get_instance();
        $CI->load->model('user_model');
        return $CI->user_model->generateNewToken($token);
    }
    // cecks if user has access to the route
    function routeAccess($sql)
    {
        $CI =& get_instance();
        $CI->load->model('user_model');
        return $CI->user_model->checksRouteAccess($sql);
    }
?>