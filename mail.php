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
    $file_name=$_FILES['file']['tmp_name'];
    $file_type=$_FILES['file']['type'];
    
    $boundary = md5(date('r', time()));
    $headers = "MIME-Version: 1.0\r\n";
	$headers .= "From: <dilipagarwal142kk@gmail.com>\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=" . $boundary . "\r\n"; 
    
    $message = "\r\n\r\n--" . $boundary . "\r\n"; 
	$message .= "Content-type: text/plain; charset=\"iso-8859-1\"\r\n";
	$message .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
	$message .= $msg."\r\n";
    $message .= "";
    $message .= "\r\n\r\n--" . $boundary . "\r\n";
    $message .= "Content-type:".$file_type."\r\n";
	$message .= "Content-Transfer-Encoding: base64\r\n";
    $message .= "Content-Disposition: attachment; filename=".$file_name."\r\n"; 
    $message .= base64_encode(file_get_contents($file_name)); 
	$message .= "\r\n\r\n--" . $boundary . "--"; 

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





            

    
    $to = "alexandra.osmakova@gmail.com";
    $headers = "From: $email_from \r\n";

    $ok = mail($to, $email_subject, $message, $email_body, $headers);
?>