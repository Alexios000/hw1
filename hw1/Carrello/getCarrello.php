<?php
require 'db.php';

session_start();  
$userId = $_SESSION['User_id']; 

if (mysqli_connect_errno()) {
    die("Connessione fallita: " . mysqli_connect_error());
}


$sql = "SELECT 
            a.Nome, a.Colore, a.Taglia, a.Prezzo, a.Immagine, b.Quantità
        FROM carrello b
        JOIN abbigliamento_uomo a 
        ON b.ID_articolo = a.ID
        WHERE b.ID_utente = $userId";

$result = mysqli_query($conn, $sql);


$Carrello = [];

if (mysqli_num_rows($result) > 0) {
    
    while ($row = mysqli_fetch_assoc($result)) { 
        $Carrello[] = [
            'nome' => $row['Nome'], 
            'colore' => $row['Colore'],
            'taglia' => $row['Taglia'],
            'prezzo' => $row['Prezzo'],
            'immagine' => $row['Immagine'],
            'quantita' => $row['Quantità']
        ];
    }
    
   
    echo json_encode($Carrello);
} else {
    echo json_encode([]);
    exit;
}


mysqli_close($conn);
?>
