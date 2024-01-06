<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $subject = 'Feedback Received';
    $body = "Name: $username\n\nEmail: $email\n\nFeedback:\n$message";

    $headers = 'From: feedback@example.com';

    mail('youremail@example.com', $subject, $body, $headers);

    http_response_code(200);
}

?>
