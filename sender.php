<?php

$message = isset($_GET["message"]) ? $_GET["message"] : "";
file_put_contents("text.txt", $message);