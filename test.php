<!DOCTYPE html>
<html>

<head>
    <script src="js/jquery-3.4.1.min.js"></script>
    <title>Text to Speech</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script>
		function submit_form() {
			var data1=$("#uname").val();
			var data2=$("#pwd").val();
			var dataTosend='user='+data1+'&pwd='+data2;
			$.ajax({
				url: 'add-user.php',
				type: 'POST',
				data:dataTosend,
				async: true,
				success: function (data) {
					$("#gen").html(data)
				},
			});
		}
		</script>
</head>

<body>
    <form method="post">
		<input type="text" placeholder="username" id="uname" />
		<input type="password" placeholder="passowrd" id="pwd" />
		<button type="button" onclick="submit_form();">Submit</button>
	</form>
	<div id='gen'></div>
</body>

</html>