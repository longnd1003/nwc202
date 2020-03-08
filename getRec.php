<?php 
	$input = $_FILES['audio']['tmp_name'];
	$output = date("dmYhis").'.wav';
	if (move_uploaded_file($input, $output)) {
		exit('Audio file Uploaded');
	}
	exit(print_r($_FILES));
?>