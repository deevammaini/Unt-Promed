<?php
// -------------------- CORS HEADERS --------------------
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS, GET');
header('Access-Control-Allow-Headers: Content-Type, Accept, Authorization');
header('Access-Control-Max-Age: 3600');
header('Content-Type: application/json');

// -------------------- OPTIONS REQUEST --------------------
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// -------------------- LOAD PHPMailer --------------------
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

// -------------------- GET JSON DATA --------------------
$data = json_decode(file_get_contents('php://input'), true);

$fullName = trim($data['fullName'] ?? '');
$email = trim($data['email'] ?? '');
$countryCode = trim($data['countryCode'] ?? '+971');
$phone = trim($data['phone'] ?? '');
$industry = trim($data['industry'] ?? '');
$message = trim($data['message'] ?? '');

// Optional: split full name into first/last
$parts = explode(' ', $fullName);
$first_name = $parts[0] ?? '';
$last_name = $parts[1] ?? '';
$full_phone = $countryCode . $phone;
$msg = $message;

if (empty($email) || empty($fullName)) {
    echo json_encode(['status' => 'error', 'message' => 'Name and email are required.']);
    exit();
}

// -------------------- SEND EMAIL --------------------
$mail = new PHPMailer(true);

try {
    // SMTP Settings
    $mail->isSMTP();
    $mail->Host       = "smtp.gmail.com";
    $mail->SMTPAuth   = true;
    $mail->Username   = "webdeveloper.india@yellowstonexps.com";
    $mail->Password   = "jvvs ukad apin cpzb"; // Gmail App Password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // ---------------- Admin Email ----------------
    $mail->setFrom("webdeveloper.india@yellowstonexps.com", "Website Contact");
    $mail->addAddress("webdeveloper.india@yellowstonexps.com", "Admin");
    $mail->isHTML(true);
    $mail->Subject = "New Contact Query from " . $fullName;
    $mail->Body = "
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> $fullName</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $full_phone</p>
        <p><strong>Message:</strong><br>$msg</p>
    ";
    $mail->send();

    // ---------------- User Auto-Reply ----------------
    $mail->clearAddresses();
    $mail->addAddress($email, $first_name);
    $mail->Subject = "Thank You for Contacting Us";
    $mail->Body = "
        <h2>Hello $first_name,</h2>
        <p>Thank you for reaching out to us.</p>
        <p>We have received your query and our team will contact you soon.</p>
        <br>
        <p><strong>Your Message:</strong><br>$msg</p>
        <br>
        <p>Regards,<br><strong>Almuznah Fashion</strong></p>
    ";
    $mail->send();

    echo json_encode(['status' => 'success', 'message' => 'Your message has been sent successfully!']);
} catch (Exception $e) {
    echo json_encode(['status' => 'error', 'message' => "Email sending failed: " . $mail->ErrorInfo]);
}
?>
