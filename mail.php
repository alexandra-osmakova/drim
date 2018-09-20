<?php
    header("Location: index.html?sended=true");
    $user_name = $_POST['name'];
    $company_name = $_POST['company_name'];
    $email = $_POST['email'];
    $telephone = $_POST['phone'];
    $apply_task = $_POST['apply_task'];
    $development = $_POST['development'];
    $support = $_POST['support'];
    $advertising = $_POST['advertising'];
    $boundary = md5(rend());

    $headers = array(
        'MIME Version: 1.0'.
        'From: {$email_from}'.
        'Content-Type: multipart/mixed; boundary = {$boundary}'
        );

    $message = array(
        "--{$boundary}".
        "Content-Type: text/plain: charset = utf-8 ".
        "Content-Transform-Encoding: 7bit".
        "".
        chunk_split($body).
        "--{$boundary}".
        "Content-Type: ($file['type']); name = ($file ['name'])".
        "Content-Disposition: attachment; filename = ($file [name]).
        "Content-Transfer-Encoding: base64".
        "".
        chunk_split(base64_encode(file_get_contacts($file['path']))).
        "--{$boundary}--".
    )

    if(isset($_FILE['uploaded_file'])) {
        $file = array();
        'name' => $_FILE['file']['name'],
        'size' => $_FILE['file']['size'],
        'type' => $_FILE['file']['type'],
        'path' => $_FILE['file']['tmp_name'],
    }

    $email_from = 'alexandra.osmakova@gmail.com';

    $email_subject = "New Form Submission";

    $email_body = "User Name: $user_name.\n".
                    "User Company Name: $company_name.\n".
                    "User Telephon Number: $telephone.\n".
                    "User Email: $email.\n".
                    "User Message: $apply_task.\n".
                    "Development: $development.\n".
                    "Support: $support.\n".
                    "Advertising: $advertising.\n".
                    "File details:
                            Name: {$file['name']}.
                            Size: {$file['size']}.
                            Type: {$file['type']}";





            

    
    $to = "alexandra.osmakova@gmail.com";
    $headers = "From: $email_from \r\n";

    $ok = mail($to, $email_subject, $email_body, implode('\r\n', $message). implode('\r\n', $headers) $file, $headers);
?>