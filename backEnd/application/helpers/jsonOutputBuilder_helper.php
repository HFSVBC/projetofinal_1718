<?php
defined('BASEPATH') OR exit('No direct script access allowed');

// function jsonExporter($conf)
// {
//     echo json_encode(
//         array_merge(
//             displayError($conf["description"],$conf["code"]), 
//             array("data"=>$conf["data"])
//         )
//     );
// }
function jsonExporter($code, $extraInfo = Null)
{
    $jsonConf = array("code"=>null,"description"=>"","data"=>array());
    switch ($code) {
        case 500:
            $jsonConf = load500($jsonConf, $extraInfo);
            break;
        case 401:
            $jsonConf = load401($jsonConf);
            break;
        case 403:
            $jsonConf = load403($jsonConf);
            break;
        case 405:
            $jsonConf = load405($jsonConf, $extraInfo);
            break;
        case 200:
            $jsonConf = load200($jsonConf, $extraInfo);
            break;
    }
    echo json_encode(
                array_merge(
                    displayError($jsonConf["description"],$jsonConf["code"]), 
                    array("data"=>$jsonConf["data"])
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
    header('Content-Type: application/json');
    $out_array = array(
        "user_agent" => $CI->input->user_agent(),
        "client_ip" => $CI->input->ip_address(),
        "url" => base_url(uri_string()),
        "request_date" => date(DATE_W3C, time())
    );
    return array_merge($out_array, $arrayToAdd);
}
// aux methods
function load500($json, $message)
{
    $json["code"]        = 500;
    $json["description"] = "Server Error";
    $json["data"] 		 = array('message'=>$message);
    return $json;
}
function load401($json)
{
    $json["code"]        = 401;
	$json["description"] = "Unauthorizedd";
	$json["data"] 		 = array('message'=>'User session expired');
    return $json;
}
function load403($json)
{
    $json["code"]        = 403;
	$json["description"] = "Forbidden";
	$json["data"] 		 = array('message'=>'Access not authorised for current user');
    return $json;
}
function load405($json, $validationErrors)
{
    $json["code"]        = 405;
	$json["description"] = "Method Not Allowed";
	$json["data"] 		 = array(
									'message'=>'POST has not passed the validation check.',
									'errors' => $validationErrors,
								);
    return $json;
}
function load200($json, $data)
{
    $json["code"]        = 200;
	$json["description"] = "ok";
	$json["data"] 		 = $data;
    return $json;
}
?>