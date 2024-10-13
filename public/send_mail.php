<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные формы
    $name = htmlspecialchars($_POST['name']);
    $surname = htmlspecialchars($_POST['surname']);
    $phone = htmlspecialchars($_POST['phone']);
    $time = htmlspecialchars($_POST['time']);
    $email = htmlspecialchars($_POST['email']);

    // Формируем сообщение для отправки
    $to = "info@but-style.com"; // Замените на ваш email
    $subject = "New Contact Form Submission";
    $message = "
    Name: $name
    Surname: $surname
    Phone: $phone
    Preferred Time: $time
    Email: $email
    ";
    // Заголовки письма
    $headers = "From: no-reply@yourdomain.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Отправляем email
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["success" => true, "message" => "Email sent successfully."]);
    } else {
        echo json_encode(["success" => false, "message" => "Failed to send email."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request method."]);
}
?>