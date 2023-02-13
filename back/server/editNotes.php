<?php
header("Cache-Control: no-store");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 86400");

$jsonEleves = file_get_contents('../database/eleves.json');
$dataEleves = json_decode($jsonEleves);

$data = json_decode($_POST['data']);
for ($i = 0; $i < count($dataEleves); $i++) {
    if ($data->pseudo === $dataEleves[$i]->pseudo) {
        $dataEleves[$i] = $data;

        print_r($dataEleves);
    }
}
$jsonEleves = json_encode($dataEleves);
// print_r($data);
file_put_contents('../database/eleves.json', $jsonEleves);
