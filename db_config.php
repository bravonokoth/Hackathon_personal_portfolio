<?php
$host = 'localhost';
$dbname = 'pportfolio_db';
$username = 'root'; // Replace with your MySQL username
$password = 'Okothbravon@2'; // Replace with your MySQL password

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>