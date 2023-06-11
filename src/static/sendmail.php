<?php
    use PHPMailler\PHPMailer;
    use PHPMailler\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailler.php';

    $mail = new PHPMailler(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHtmL(true);

    $mail->setFrom('alexandrhub@alexanderhub.ru', 'Egorov Agency');
    $mail->addAddress($_POST['email']);
    $mail->Subject = 'Привет! Спасибо что подписались на рассылку.';

    $body = '<h1> Спасибо что подписались на нашу рассылку </h1>'
    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
    }
    $mail->Body = $body;

    $mail->send()
?>