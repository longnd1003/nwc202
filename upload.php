<?php

    if (isset($_POST['submit-stt'])) {
        if (isset($_FILES['input-audio'])) {
            if ($_FILES['input-audio']['error'] > 0) {
                echo 'Cannot upload file.';
            }
            else {
                move_uploaded_file($_FILES['input-audio']['tmp_name'], './upload/'.$_FILES['input-audio']['name']);
            }
        }
        else {
            echo 'Choose a file';
        }
    }
    
?>