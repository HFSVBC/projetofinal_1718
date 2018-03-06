<?php
defined('BASEPATH') OR exit('No direct script access allowed');

function displayError($errorMessage, $errorCode)
{
    $CI =& get_instance();
    $CI->output->set_status_header($errorCode);
    $out_array = array(
        "state" => $errorMessage,
        "code" => $errorCode,
    );
    return builder($out_array);
}

function builder($arrayToAdd)
{
    $CI =& get_instance();
    $out_array = array(
        "user_agent" => $CI->input->user_agent(),
        "client_ip" => $CI->input->ip_address(),
        "url" => base_url(uri_string()),
        "request_date" => date(DATE_W3C, time())
    );
    $CI->output->set_content_type('application/json');
    return array_merge($out_array, $arrayToAdd);
}
?>