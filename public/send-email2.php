<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $surname = $_POST["surname"];
    $phone = $_POST["phone"];
    $time = $_POST["time"];
    $serviceName = $_POST["serviceName"];
    $length = $_POST["length"];
    $width = $_POST["width"];
    $height = $_POST["height"];
    $comments = $_POST["comments"];
    
    $to = "awer100@gmail.com";
    $subject = "New Service Request";
    $message = "Name: $name\nSurname: $surname\nPhone: $phone\nTime: $time\nService: $serviceName\nRoom Size: Length: $length, Width: $width, Height: $height\nComments: $comments";

    // Отправка email
    if (mail($to, $subject, $message)) {
        echo json_encode(["success" => true, "message" => "Email sent successfully."]);
    } else {
        echo json_encode(["success" => false, "message" => "Failed to send email."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request."]);
}
?>