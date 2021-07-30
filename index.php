<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
//header('Access-Control-Allow-Origin: *');
//echo phpinfo();
$page = $_REQUEST['page'];
$ulink = $_REQUEST['ulink'];
//for($i=0; $i<$page; $i++){
    $doc = new DOMDocument();
    $doc->loadHTMLFile($ulink."&page=".(2));
    $finder = new DomXPath($doc);
    $spaner = $finder->query("//*[contains(@class, 'wt-grid wt-grid--block wt-pl-xs-0 tab-reorder-container')]");
//}
echo $spaner;
 //die;
// $curl = curl_init();

// curl_setopt_array($curl, array(
//     CURLOPT_URL => 'https://openapi.etsy.com/v3/application/shops/12345678/listings/192837465',
//     CURLOPT_RETURNTRANSFER => true,
//     CURLOPT_ENCODING => '',
//     CURLOPT_MAXREDIRS => 10,
//     CURLOPT_TIMEOUT => 0,
//     CURLOPT_FOLLOWLOCATION => true,
//     CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
//     CURLOPT_CUSTOMREQUEST => 'PUT',
//     CURLOPT_POSTFIELDS => 'is_digital=true&type=download'

//     CURLOPT_HTTPHEADER => array(
//         'Content-Type: application/x-www-form-urlencoded',
//         'x-api-key: 1aa2bb33c44d55eeeeee6fff',
//         'Authorization: Bearer 12345678.jKBPLnOiYt7vpWlsny_lDKqINn4Ny_jwH89hA4IZgggyzqmV_bmQHGJ3HOHH2DmZxOJn5V1qQFnVP9bCn9jnrggCRz'
//     ),
// ));

// $response = curl_exec($curl);

// curl_close($curl);
// echo $response;
