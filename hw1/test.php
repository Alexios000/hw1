<?php

session_start();
$_SESSION['Logged'] = 'true'; 
echo json_encode(["Logged" => $_SESSION['Logged']]);

?>
