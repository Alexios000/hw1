<?php

require 'db.php';

session_start();

header('Content-Type: application/json');


if (!isset($_SESSION['User_id'])) {
    echo json_encode(['error' => 'Utente non autenticato']);
    exit;
}


if (!isset($_POST['articolo_id']) || empty($_POST['articolo_id'])) {
    echo json_encode(['error' => 'ID Articolo non fornito']);
    exit;
}

$id = $_SESSION['User_id'];
$id_Articolo = $_POST['articolo_id'];


if (!is_numeric($id_Articolo)) {
    echo json_encode(['error' => 'ID Articolo non valido']);
    exit;
}


$query = "SELECT * FROM carrello WHERE ID_Utente = $id AND ID_Articolo = $id_Articolo";
$res = mysqli_query($conn, $query);

if (mysqli_num_rows($res) > 0) {

    $update_query = "UPDATE carrello SET Quantità = Quantità + 1 WHERE ID_Utente = $id AND ID_Articolo = $id_Articolo";
    mysqli_query($conn, $update_query);

    $message = "Quantità aggiornata";
    echo json_encode(['message' => $message]);

} else {
    $insert_query = "INSERT INTO carrello (ID_Utente, ID_Articolo, Quantità) VALUES ($id, $id_Articolo, 1)";
    mysqli_query($conn, $insert_query);

    $message = "Articolo aggiunto al carrello";
    echo json_encode(['message' => $message]);
}


mysqli_close($conn);

?>
