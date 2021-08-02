<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
define('PI', 3.14);

//header('Access-Control-Allow-Origin: *');
//echo phpinfo();
$IDlists = $_REQUEST['activitiesArray'];
echo count($IDlists);
$urlApi = "https://openapi.etsy.com/v2/listings/";
//$clientId="y8toq4d0ow3zicc5";
//          exJeyZtXODeekHfX8VRgMQ
$token = "y3f61lj3isldeeqkf4lhmsd6";
$url = $urlApi.$IDlists[0] ."?api_key=".$token;
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response_body = curl_exec($ch);
//print_r($response_body->results[0]->);
//die;
foreach($IDlists as $IDlist){
    // Make sure you define API_KEY to be your unique, registered key
    //$url = "https://openapi.etsy.com/v2/users/etsystore?api_key=" . API_KEY;
//    $url = $urlApi.$IDlist ."?api_key=".$token;
    $url = $urlApi.$IDlist."?api_key=".$token;
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response_body = curl_exec($ch);
    $responseData = $response_body->results[0];
    echo $responseData->original_creation_tsz."<br>";    

    //                     var days = moment().diff(moment.unix(responseData.original_creation_tsz), 'days');
    //                     days = days === 0 ? 1 : days;
    //                     var dailyView = (responseData.views / days);
    //                     dailyView = Math.round(dailyView);
    // $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    //if (intval($status) != 200) throw new Exception("HTTP $status\n$response_body");
    sleep(5);
}






$response = curl_exec($curl);

curl_close($curl);
echo $response;
