<?php

$data = json_decode(file_get_contents('php://input'), true);

if (empty($data['name']) || empty($data['phone'])) {
    http_response_code(400);
    exit;
}

$message = '<html><body style="font-family: sans-serif">';

$message .= '<div><b>Имя:</b> ' . $data['name'] . '</div>';
$message .= '<div><b>Телефон:</b> ' . $data['phone'] . '</div>';

if (isset($data['utm_source']))
    $message .= '<div><b>UTM Source:</b> ' . $data['utm_source'] . '</div>';
if (isset($data['utm_medium']))
    $message .= '<div><b>UTM Medium:</b> ' . $data['utm_medium'] . '</div>';
if (isset($data['utm_campaign']))
    $message .= '<div><b>UTM Campaign:</b> ' . $data['utm_campaign'] . '</div>';
if (isset($data['utm_content']))
    $message .= '<div><b>UTM Content:</b> ' . $data['utm_content'] . '</div>';

$message .= '</body></html>';

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=utf-8\r\n";
$headers .= "From: \"Школа SAY YES!\" <info@sayes.ru>\r\n";
$headers .= "X-Mailer: E-mail from sayes website\r\n";

mail('info@sayes.ru', 'Заявка на пробный урок (zoom.sayes.ru)', $message, $headers);

header('Content-Type: application/json');

echo json_encode(['ok' => true]);

exit;