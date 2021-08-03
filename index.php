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
// $url = $urlApi.$IDlists[0] ."?api_key=".$token;
// $ch = curl_init($url);
// curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
// $response_body = curl_exec($ch);
// $response = json_decode($response_body);

// print_r($response->results[0]);
// die;
$i=0;
foreach($IDlists as $IDlist){
    if($i>50)
         break;
    // // Make sure you define API_KEY to be your unique, registered key
    //$url = "https://openapi.etsy.com/v2/users/etsystore?api_key=" . API_KEY;
//    $url = $urlApi.$IDlist ."?api_key=".$token;
    $url = $urlApi.$IDlist."?api_key=".$token;
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response_body = curl_exec($ch);
    curl_close($ch);
    $responseData = json_decode($response_body);
    $listing = $responseData->results[0];
    $now = new DateTime();
    $now = $now->format('U');
    //echo 
    //$datecreate = $now->diff($listing->original_creation_tsz);
    echo $listing->views."<br>";    
    echo ($listing->original_creation_tsz - $now)."<br>";    

    //                     var days = moment().diff(moment.unix(responseData.original_creation_tsz), 'days');
    //                     days = days === 0 ? 1 : days;
    //                     var dailyView = (responseData.views / days);
    //                     dailyView = Math.round(dailyView);
    // $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    //if (intval($status) != 200) throw new Exception("HTTP $status\n$response_body");
    sleep(1);
    $i++;
}









