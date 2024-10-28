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
    
    // Формируем название подпапки на основе даты и имени клиента
    $baseDir = "uploads/";
    $date = date("Y-m-d");
    $baseFolderName = $date . "_" . preg_replace("/[^a-zA-Z0-9]/", "_", $name); // Очищаем имя от спецсимволов
    $folderName = $baseFolderName;
    $i = 1;
    
    // Проверяем, существует ли папка, и если да, добавляем порядковый номер
    while (file_exists($baseDir . $folderName)) {
        $folderName = $baseFolderName . "_" . $i;
        $i++;
    }
    
    // Создаем папку
    $folderPath = $baseDir . $folderName;
    mkdir($folderPath, 0777, true);

    // Создаем массив для хранения путей загруженных файлов
    $uploadedFiles = [];
    if (isset($_FILES['photos'])) {
        foreach ($_FILES['photos']['tmp_name'] as $key => $tmpName) {
            $fileName = basename($_FILES['photos']['name'][$key]);
            $filePath = $folderPath . "/" . $fileName;

            // Сохраняем файл
            if (move_uploaded_file($tmpName, $filePath)) {
                $uploadedFiles[] = $filePath;
            }
        }
    }

    // Сохраняем данные формы в текстовый файл
    $formData = "Name: $name\nSurname: $surname\nPhone: $phone\nPreferred Time: $time\nService Name: $serviceName\nRoom Size - Length: $length, Width: $width, Height: $height\nComments: $comments\n";
    $formFilePath = $folderPath . "/form_data.txt";
    file_put_contents($formFilePath, $formData);

    // Формируем и отправляем email
    $to = "info@but-style.com";
    $subject = "New Service Request";
    $message = $formData;

    // Заголовки для письма с вложениями
    $boundary = md5(time());
    $headers = "From: sender@example.com\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

    // Тело письма
    $body = "--$boundary\r\n";
    $body .= "Content-Type: text/plain; charset=\"utf-8\"\r\n";
    $body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $body .= $message . "\r\n";

    // Добавляем файлы как вложения
    foreach ($uploadedFiles as $file) {
        $fileContent = file_get_contents($file);
        $fileName = basename($file);
        $body .= "--$boundary\r\n";
        $body .= "Content-Type: application/octet-stream; name=\"$fileName\"\r\n";
        $body .= "Content-Disposition: attachment; filename=\"$fileName\"\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
        $body .= chunk_split(base64_encode($fileContent)) . "\r\n";
    }

    // Завершаем тело письма
    $body .= "--$boundary--";

    // Отправляем письмо
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["success" => true, "message" => "Email sent successfully with attachments."]);
    } else {
        echo json_encode(["success" => false, "message" => "Failed to send email with attachments."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request."]);
}
?>