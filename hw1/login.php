<?php

require 'db.php';

header('Content-Type: application/json');

if (empty($_POST['email']) || empty($_POST['password'])) {
    $response['message'] = "Email e password sono obbligatori.";
    echo json_encode($response);
    exit;
}

if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    $response['message'] = "Email non valida.";
    echo json_encode($response);
    exit;
}

$email = mysqli_real_escape_string($conn, $_POST['email']);
$password = $_POST['password'];

$query = "SELECT * FROM utenti WHERE Email = '$email'";
$res = mysqli_query($conn, $query);

if (!$res) {
    $response['message'] = "Query fallita: " . mysqli_error($conn);
    echo json_encode($response);
    exit;
}

if (mysqli_num_rows($res) == 1) {
    $entry = mysqli_fetch_assoc($res);

    error_log("Password hash DB: " . $entry['Password']);
    error_log("Password inserita: " . $password);
    error_log("Verifica password: " . (password_verify($password, $entry['Password']) ? 'true' : 'false'));

    if (password_verify($password, $entry['Password'])) {
        session_start();
        $_SESSION['Utente'] = $email;
        $_SESSION['Logged'] = true;
        $_SESSION['User_id'] = $entry['ID'];
        

        $response['status'] = 'success';
        $response['message'] = 'Login riuscito.';
    } else {
        $response['message'] = "Password errata.";
    }
} else {
    $response['message'] = "Utente non trovato.";
}


echo json_encode($response);

?>
