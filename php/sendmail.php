<?php

require '../vendor/phpmailer/src/Exception.php';
require '../vendor/phpmailer/src/PHPMailer.php';
require '../vendor/phpmailer/src/SMTP.php';
require __DIR__ . '/../vendor/autoload.php';


$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/..');
$dotenv->load();


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

try {
    if (
        isset($_POST['email'], $_POST['name'], $_POST['subject'], $_POST['message']) &&
        !empty($_POST['email']) && !empty($_POST['name']) && !empty($_POST['subject']) && !empty($_POST['message'])
    ) {
        //Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.hostinger.com';
        $mail->SMTPAuth = true;
        $mail->Username = getenv('SMTP_USER');
        $mail->Password = getenv('SMTP_PASS');
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = 465;

        //Recipients
        $mail->setFrom(getenv('SMTP_USER'), 'Yuka Suzuki');
        $mail->addAddress(getenv('SMTP_USER'), 'Yuka Suzuki');
        $mail->addReplyTo($_POST['email'], $_POST['name']);

        // Content
        $mail->isHTML(true);
        $mail->Subject = $_POST['subject'];
        $mail->Body = "Email from: " . $_POST['email'] . "<br><br>" . nl2br(e($_POST['message']));
        $mail->AltBody = "Email from: " . $_POST['email'] . "\n\n" . e($_POST['message']);


        $mail->send();
        echo 'Message has been sent';
    } else {
        echo 'Error: All fields are required.';
    }
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

function e($string)
{
    return htmlentities($string, ENT_QUOTES, 'UTF-8');
}
