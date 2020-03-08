<!DOCTYPE html>
<html>

<head>
    <script src="js/jquery-3.4.1.min.js"></script>
    <title>Text to Speech</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script>
		function submit_form(e) {
			$("#send").attr("disabled", true);
			var text = 'input=' + $("#input-text").val();
			$.ajax({
				url: 'tts.php',
				type: 'POST',
				data: text,
				async: true,
				success: function (data) {
					$("#tts-result").html(data)
				},
			});
			$('#send').attr("disabled", false);
		}
		
	</script>
	<style>
		audio {
			display: none;
		}
	</style>
</head>

<body>
    <div>
        <h1>Text to speech</h1>
        <form name="form-tts" id="form-tts" method="POST" enctype="multipart/form-data">
            <textarea id="input-text" name="input-text" maxlength="5000" placeholder="Input text (max 5000 characters)" 
                rows="5"></textarea>
            <button id="send" type="button" onclick="submit_form();">Send</button>
        </form>
		<div id="tts-result"></div>
    </div>
    <div>
        <h1>Speech to text</h1>
        <form name="form-stt" id="form-stt" method="POST" action="stt.php" enctype="multipart/form-data">
            <input name="input-audio" id="input-audio" type="file" />
            <input name="submit-stt" id="submit-stt" type="submit" value="Send" />
        </form>
    </div>
</body>

</html>