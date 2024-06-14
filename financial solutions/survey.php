<?php
// Database configuration
$servername = "localhost";
$username = "cliente_edit";
$password = "avySgK5)qDaoPJpKicAYZhKY";
$dbname = "questionnaire_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST['name'];
$age = $_POST['age'];
$telephone = $_POST['telephone'];
$country = $_POST['country'];
$income = $_POST['income'];

// Insert data into database
$sql = "INSERT INTO responses (name, age, telephone, country, income) VALUES ('$name', '$age', '$telephone', '$country', '$income')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>