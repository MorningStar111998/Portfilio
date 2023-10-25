<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Gather user input
    $nom = $_POST["nom"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Create an email message
    $to = "your-email@example.com"; // Replace with your email address
    $subject = "New message from $nom";
    $headers = "From: $email";
    $messageBody = "Name: $nom\nEmail: $email\nMessage: $message";

    // Send the email
    $success = mail($to, $subject, $messageBody, $headers);

    if ($success) {
        echo "Message sent successfully. Thank you!";
    } else {
        echo "Sorry, there was a problem sending your message.";
    }
}
