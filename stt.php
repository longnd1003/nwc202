<?php

	function format_period($seconds_input)
	{
	  $hours = (int)($minutes = (int)($seconds = (int)($milliseconds = (int)($seconds_input * 1000)) / 1000) / 60) / 60;
	  return (($hours < 10) ? "0" : "").$hours.':'.(($minutes < 10) ? "0" : "").($minutes % 60).':'.(($seconds < 10) ? "0" : "").($seconds % 60).(($milliseconds === 0)?'':'.'.(($milliseconds < 10) ? "0" : "").rtrim($milliseconds % 1000, '0'));
	}

	$input = $_FILES['audio']['tmp_name'];
	$outputFile = "./audio/".date("dmYhis").'.mp3';
	move_uploaded_file($input, $outputFile);
	
    $log_folder = $_SERVER['DOCUMENT_ROOT'] . "/logs/";
	$file_path = $_SERVER['DOCUMENT_ROOT'] . "/logs/messagesLog.csv";
	if (!file_exists($log_folder)) {
		mkdir($_SERVER['DOCUMENT_ROOT']."/logs/", 0777, true);
	}
	$logfile = fopen($file_path, "a") or die("Unable to write log.");
	
	$s_date = date("d-m-Y H:i:s");
	$s_time = microtime(true);
    
    ob_start(); // begin collecting output
    
    $curl = curl_init();

	$filePath = $outputFile;

	curl_setopt_array($curl, array(
	  CURLOPT_URL => "https://api.fpt.ai/hmi/asr/general",
	  CURLOPT_CUSTOMREQUEST => "POST",
	  CURLOPT_POSTFIELDS => array("filename" => file_get_contents($filePath)),
	  CURLOPT_HTTPHEADER => array(
		"api-key: 2cfCUOeKkprqCboDLJI4eHhPCAdPhENX"
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
    	
	unlink($outputFile);
	
	$diff = microtime(true) - $s_time;
	$log = array ("Message: ".$final, "Sent at: ".$s_date, "Processing time: ".format_period($diff));
	fputcsv($logfile, $log);
    
    fclose($logfile);
	
?>