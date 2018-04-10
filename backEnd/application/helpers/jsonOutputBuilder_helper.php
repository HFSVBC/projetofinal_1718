<?php
defined('BASEPATH') OR exit('No direct script access allowed');

function jsonExporter($conf)
{
    echo json_encode(
        array_merge(
            displayError($conf["description"],$conf["code"]), 
            array("data"=>$conf["data"])
        )
    );
}
function displayError($errorMessage, $errorCode)
{
    $CI =& get_instance();
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
    // header('Access-Control-Allow-Origin: *');
	// header("Access-Control-Allow-Methods: GET, POST");
	// header("Access-Control-Allow-Headers: Content-Type");
    // $CI->output->set_content_type('application/x-www-form-urlencoded');
    return array_merge($out_array, $arrayToAdd);
}
?>