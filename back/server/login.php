<?php
header("Cache-Control: no-store");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 86400");

$jsonEleves = file_get_contents('../database/eleves.json');
$jsonProf = file_get_contents('../database/prof.json');

$dataEleves = json_decode($jsonEleves);
$dataProf = json_decode($jsonProf);

$isStudent = 'false';
$isTeacher = 'false';

$data = json_decode($_POST['data']);

for ($i = 0; $i < count($dataEleves); $i++) {
    if ($data->pseudo === $dataEleves[$i]->pseudo) {

        if ($data->mdp === $dataEleves[$i]->mdp) {;
            $isStudent = 'true';
        }
        break;
        $isStudent = 'false';
    } else {
        $isStudent = 'false';
    }
}

for ($i = 0; $i < count($dataProf); $i++) {
    if ($data->pseudo === $dataProf[$i]->pseudo) {
        if ($data->mdp === $dataProf[$i]->mdp) {
            $isTeacher = 'true';
        }
        break;
        $isTeacher = 'false';
    } else {
        $isTeacher = 'false';
    }
}

if ($isStudent == 'true' && $isTeacher == 'false') {
    echo 'student successful log in';
} else if ($isStudent == 'false' && $isTeacher == 'true') {
    echo 'teacher successful log in';
} else {
    echo 'error';
}
    // for ($i = 0; $i < count($dataProf); $i++) {
    //     echo ($dataProf[$i]->pseudo);
    // }

    // echo json_encode($dataEleves[0]->nomPrenom);
;
