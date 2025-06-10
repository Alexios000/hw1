<?php
require 'db.php';

$query = "SELECT Immagine FROM abbigliamento_uomo ORDER BY RAND() LIMIT 9";
$res = mysqli_query($conn, $query);

$urls = [];


if ($res && mysqli_num_rows($res) > 0) {
    while ($row = mysqli_fetch_assoc($res)) {
        $urls[] = $row['Immagine'];
    }
}


echo json_encode($urls);


mysqli_close($conn);
?>