<?php
session_start();

if (isset($_SESSION['username'])||(($_SESSION['Logged'])==true)) {
    return; 
}


header("Location: hw1.php");

?>