<?php
require 'db.php';  


if (empty($_POST['email']) || empty($_POST['password'])) {
    echo "Email e password sono obbligatori.";
    exit;
}


if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    echo "Email non valida.";
    exit;
}


if (strlen($_POST["password"]) < 8) {
    echo "Caratteri password insufficienti.";
    exit;
} 

if (!preg_match('/^[A-Z][a-zA-Z0-9]*[0-9]$/', $_POST["password"])) {
    echo "Password non valida. Inserisci una password di almeno 8 caratteri, che inizia con una lettera maiuscola e finisce con un numero.";
    exit;
}


$email = mysqli_real_escape_string($conn, $_POST['email']);
$password_plain = $_POST['password'];
$password_hash = password_hash($password_plain, PASSWORD_BCRYPT);


$query = "SELECT * FROM utenti WHERE Email = '$email'";
$res = mysqli_query($conn, $query);

if (!$res) {
    echo "Query fallita: " . mysqli_error($conn);
    exit;
}

if (mysqli_num_rows($res) > 0) {
    echo "Utente già registrato con questa email.";
    exit;
} 


$insert_query = "INSERT INTO utenti (Email, Password) VALUES ('$email', '$password_hash')";
$insert_res = mysqli_query($conn, $insert_query);

if (!$insert_res) {
    echo "Inserimento fallito: " . mysqli_error($conn);
    exit;
} else {
    session_start();
    $_SESSION['Utente'] = $email;
    $_SESSION['Logged'] = true;
    $_SESSION['User_id'] = mysqli_insert_id($conn);
    echo $_SESSION['User_id'];
    echo "Registrazione avvenuta con successo!";
}
?>
