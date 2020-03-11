<?php

	$input = $_FILES['audio']['tmp_name'];
	$outputFile = "./audio/".date("dmYhis").'.mp3';
	move_uploaded_file($input, $outputFile);
	
    $logfile = fopen("./log/log_stt.txt", "a") or die("Unable to write log.");
    
    $starttime = microtime(true);
    
    ob_start(); // begin collecting output
    
    $curl = curl_init();

	$filePath = $outputFile;

	curl_setopt_array($curl, array(
	  CURLOPT_URL => "https://api.fpt.ai/hmi/asr/general",
	  CURLOPT_CUSTOMREQUEST => "POST",
	  CURLOPT_POSTFIELDS => array("filename" => file_get_contents($filePath)),
	  CURLOPT_HTTPHEADER => array(
		"api-key: gOlLVlO9XINUzFUJTQdqAochL70LURR3"
	  ),
	));
    
    $response = curl_exec($curl);
    $err = curl_error($curl);
    
    curl_close($curl);
    
    if ($err) {
      echo "cURL Error #:" . $err;
    } else {
      echo $response;
    }
    
    $result = ob_get_clean();
    
    if (preg_match('/\: ".*"}]/', $result, $output)) {
        $output[0] = preg_replace_callback('/\\\\u([0-9a-fA-F]{4})/', function ($outputUnicode) {
            return mb_convert_encoding(pack('H*', $outputUnicode[1]), 'UTF-8', 'UTF-16BE');
        }, $output[0]);
        $final = preg_replace('/(: ")|("}])/', '', $output[0]);
		$final = preg_replace('/ +\./', '.', $final);
		$final = preg_replace('/ +\,/', ',', $final);
		$final = preg_replace('/ +\:/', ':', $final);
		$final = preg_replace('/ +\;/', ';', $final);
		echo $final;
    }
    	
    $diff = microtime(true) - $starttime;
      
    fwrite($logfile, $diff);
    fwrite($logfile, "\n");
    
    fclose($logfile);
	
?>