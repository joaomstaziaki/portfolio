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

// Fetch data from database
$sql = "SELECT * FROM responses";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        echo "Name: " . $row["name"]. " - Age: " . $row["age"]. " - Telephone: " . $row["telephone"]. " - Country: " . $row["country"]. " - Income: " . $row["income"]. "<br>";
    }
} else {
    echo "0 results";
}

$conn->close();
?>