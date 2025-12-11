<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

// Read JSON if available
$raw = file_get_contents("php://input");
$data = json_decode($raw, true);

// If JSON not available → use POST (FormData)
if (!$data) {
    $data = $_POST;
}

// Helper to safely get values
function getField($key, $default = "") {
    global $data;
    return isset($data[$key]) ? trim($data[$key]) :
           (isset($_POST[$key]) ? trim($_POST[$key]) : $default);
}

// Extract fields
$name     = getField("fullName");
$email    = getField("email");
$phone    = getField("phone");
$industry = getField("industry");
$message  = getField("message");

// Validation
if (empty($name) || empty($email)) {
    echo json_encode([
        "status" => "error",
        "message" => "Name and email are required."
    ]);
    exit;
}

// Email receiver
$to = "info@untpromed.ae"; 
$subject = "New Contact Form Submission";

// Email body
$body = "
Name: $name
Email: $email
Phone: $phone
Industry: $industry
Message:
$message
";

$headers = "From: noreply@untpromed.ae\r\n";
$headers .= "Reply-To: $email\r\n";

// Send email
if (mail($to, $subject, $body, $headers)) {
    echo json_encode([
        "status" => "success",
        "message" => "Message sent successfully!"
    ]);
} else {
    echo json_encode([
        "status" => "error",
        "message" => "Failed to send email."
    ]);
}
?>
