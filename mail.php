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


    
    /*$message ="Текст сообщения";
    
    $filename = "file.doc";
    $filepath = "files/file.doc";
    
    
    $boundary = "--".md5(uniqid(time())); 
    
    $mailheaders = "MIME-Version: 1.0;\r\n"; 
    $mailheaders .="Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n"; 
    
    $multipart = "--$boundary\r\n"; 
    $multipart .= "Content-Type: text/html; charset=windows-1251\r\n";
    $multipart .= "Content-Transfer-Encoding: base64\r\n";    
    $message_part = '\r\n';
    $multipart .= chunk_split(base64_encode(iconv("utf8", "windows-1251", $message)));
     
        $fp = fopen($filepath,"r"); 
            if (!$fp) 
            { 
                print "Не удается открыть файл22"; 
                exit(); 
            } 
    $file = fread($fp, filesize($filepath)); 
    fclose($fp); 
    
    
    $message_part = "\r\n--$boundary\r\n"; 
    $message_part .= "Content-Type: application/octet-stream; name=\"$filename\"\r\n";  
    $message_part .= "Content-Transfer-Encoding: base64\r\n"; 
    $message_part .= "Content-Disposition: attachment; filename=\"$filename\"\r\n"; 
    $message_part .= \r\n;
    $message_part .= chunk_split(base64_encode($file));
    $message_part .= "\r\n--$boundary--\r\n";
    
    $multipart .= $message_part; */

    

    $email_from = 'alexandra.osmakova@gmail.com';

    $email_subject = "New Form Submission";

    $email_body = "User Name: $user_name.\n".
                    "User Company Name: $company_name.\n".
                    "User Telephon Number: $telephone.\n".
                    "User Email: $email.\n".
                    "User Message: $apply_task.\n".
                    "Development: $development.\n".
                    "Support: $support.\n".
                    "Advertising: $advertising.\n";


            

    
    $to = "alexandra.osmakova@gmail.com";
    $headers = "From: $email_from \r\n";

    $ok = mail($to, $email_subject, $email_body, $headers);

    /*if (time_nanosleep(5, 0)) {
        unlink($filepath);
} */
?>