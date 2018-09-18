<?php 
    $name = $_POST['name'];
    $email = $_POST['email'];
    $apply_task = $_POST('apply_task');

    $email_from = 'alexandra.osmakova@gmail.com';

    $email_subject = "New Form Submission";

    $email_body = "User Name: $name.\n".
                        "User Email: $email.\n".
                            "User Message: $apply_task.\n";
    
    $to = "alexandra.osmakiva@gmail.com";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to, $email_subject, $email_body, $headers);

    header("Location: index.html");
?>