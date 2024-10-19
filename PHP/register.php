<?php

include 'connection.php';

$email = $_POST['email'];
$username = $_POST['username'];
$password = $_POST['password'];


$sql = "INSERT INTO user (email, username, password) VALUES ('$email', '$username', '$password')";


if ($conn->query($sql) === TRUE) {
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}


$conn->close();
