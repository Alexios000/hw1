<?php
require 'db.php';

$query = "SELECT * FROM abbigliamento_uomo ORDER BY RAND() LIMIT 9";
$res = mysqli_query($conn, $query);



$prodotti= [];

if (mysqli_num_rows($res) > 0) {
    
    while ($row = mysqli_fetch_assoc($res)) { 
        $prodotti[] = [
            'id' => $row['ID'],
            'nome' => $row['Nome'], 
            'colore' => $row['Colore'],
            'taglia' => $row['Taglia'],
            'prezzo' => $row['Prezzo'],
            'immagine' => $row['Immagine'],
        ];
    }
    
   
    echo json_encode($prodotti);
} else {
    echo json_encode([]);
    exit;
}


mysqli_close($conn);
?>
