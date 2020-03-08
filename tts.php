<?php

$logfile = fopen("./log/log_tts.txt", "a") or die("Unable to write log.");
$starttime = microtime(true);

ob_start(); // begin collecting output

$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => 'https://api.fpt.ai/hmi/tts/v5',
    CURLOPT_CUSTOMREQUEST => 'POST',
    CURLOPT_POSTFIELDS => $_POST['input'],
    CURLOPT_HTTPHEADER => array(
        'api-key: jHjjZ9DXH16UJ4rxXGIn9qvNfdVH66rR',
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
    echo '<audio controls autoplay>
			<source src="' . $audiolink . '" type="audio/mpeg">
		  </audio>';
}

$diff = microtime(true) - $starttime;

fwrite($logfile, $diff);
fwrite($logfile, "\n");

fclose($logfile);
?> 