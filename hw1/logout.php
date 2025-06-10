<?php
echo "Logout non effettuato.";
session_start();
session_unset();
session_destroy();

echo "Logout effettuato.";

?>