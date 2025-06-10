<?php
header('Content-Type: application/json');

$host = "localhost";
$user = "root";
$password = "";
$db = "tommy project";

$conn = mysqli_connect($host, $user, $password, $db);

if (!$conn) {
    echo json_encode(["error" => "Connessione fallita: " . mysqli_connect_error()]);
    exit;
}
