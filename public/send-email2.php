<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Получаем текстовые данные из формы
    $name = $_POST["name"];
    $surname = $_POST["surname"];
    $phone = $_POST["phone"];
    $time = $_POST["time"];
    $serviceName = $_POST["serviceName"];
    $length = $_POST["length"];
    $width = $_POST["width"];
    $height = $_POST["height"];
    $comments = $_POST["comments"];

    // Проверка и обработка загруженных файлов
    $uploadedFiles = [];
    if (isset($_FILES['photos'])) {
        foreach ($_FILES['photos']['tmp_name'] as $key => $tmpName) {
            $fileName = $_FILES['photos']['name'][$key];
            $fileTmpName = $_FILES['photos']['tmp_name'][$key];
            $filePath = "uploads/" . basename($fileName);

            // Сохраняем файл
            if (move_uploaded_file($fileTmpName, $filePath)) {
                $uploadedFiles[] = $filePath;
            }
        }
    }

    // Формируем тело сообщения
    $to = "awer100@gmail.com";
    $subject = "New Service Request";
    $message = "Name: $name\nSurname: $surname\nPhone: $phone\nPreferred Time: $time\nService Name: $serviceName\nRoom Size - Length: $length, Width: $width, Height: $height\nComments: $comments\n";

    // Добавляем пути загруженных файлов в сообщение
    if (!empty($uploadedFiles)) {
        $message .= "\nUploaded Photos:\n" . implode("\n", $uploadedFiles);
    }

    // Отправляем email
    if (mail($to, $subject, $message)) {
        echo json_encode(["success" => true, "message" => "Email sent successfully with photos."]);
    } else {
        echo json_encode(["success" => false, "message" => "Failed to send email."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request."]);
}
?>