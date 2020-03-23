<?php

	function format_period($seconds_input)
	{
	  $hours = (int)($minutes = (int)($seconds = (int)($milliseconds = (int)($seconds_input * 1000)) / 1000) / 60) / 60;
	  return (($hours < 10) ? "0" : "").$hours.':'.(($minutes < 10) ? "0" : "").($minutes % 60).':'.(($seconds < 10) ? "0" : "").($seconds % 60).(($milliseconds === 0)?'':'.'.(($milliseconds < 10) ? "0" : "").rtrim($milliseconds % 1000, '0'));
	}

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

	curl_setopt_array($curl, array(
		CURLOPT_URL => 'https://api.fpt.ai/hmi/tts/v5',
		CURLOPT_CUSTOMREQUEST => 'POST',
		CURLOPT_POSTFIELDS => $_POST['input'],
		CURLOPT_HTTPHEADER => array(
			'api-key: 2cfCUOeKkprqCboDLJI4eHhPCAdPhENX',
			'speed: ',
			'voice: ' . $_POST['voice']
		),
	));

	$response = curl_exec($curl);
	$err = curl_error($curl);

	curl_close($curl);

	if ($err) {
		echo 'cURL Error #:' . $err;
	} else {
		echo $response;
	}

	$result = ob_get_clean();

	$pattern = '/[a-zA-Z]+:\/\/\S+.mp3/';
	if (preg_match($pattern, $result, $matches)) {
		$audiolink = $matches[0];
		while (true) {
			$headers = @get_headers($audiolink);
			if (strpos($headers[0], '404') === false) {
				break;
			}
		}
		echo $audiolink;
	}

	$diff = microtime(true) - $s_time;
	$log = array ("Message: ".$_POST['input'], "Sent at: ".$s_date, "Processing time: ".format_period($diff));

	fputcsv($logfile, $log);

	fclose($logfile);
?> 