<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="style.css">
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
		<title>NWC Asking Service</title>
	</head>

	<body>
		<div class="container py-3 px-4">
			<div class="row rounded-lg overflow-hidden shadow mt-3">
				<!-- Chat Box-->
				<div class="col pt-3">
					<div id="msg-zone" class="px-4 py-5 chat-box bg-light"></div>
					<!-- Typing area -->
					<form id="chat" action="javascript:sendMsg();">
						<div class="input-group">
							<input id="input-msg" type="text" placeholder="Type a message" class="form-control rounded-0 border-0 py-4 px-4 bg-light" required>
							<div class="input-group-append">
								<button type="submit" class="btn btn-light"><i class="fa fa-paper-plane text-primary"></i></button>
								<!-- Button trigger modal -->
								<button id="recordButton" type="button" class="btn btn-light" data-toggle="modal" data-target="#staticBackdrop">
								  <i class="fas fa-microphone-alt text-primary"></i></button>
								<!-- Modal  -->
								<div class="modal fade" id="staticBackdrop" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
								  <div class="modal-dialog text-center modal-xl" role="document">
									<div class="modal-content justify-content-center">
									  <div class="modal-body">
										<div id="visualizer" class="pb-5"></div>
										<button id="stopButton" type="button" class="btn btn-lg btn-danger mb-4" data-dismiss="modal"><i class="far fa-stop-circle"></i></button>
									  </div>
									</div>
								  </div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		<div id="tts-audio"></div>
		<script src="https://code.jquery.com/jquery-3.4.1.min.js"</script>
		<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
		<script src="https://kit.fontawesome.com/9b81e7de6f.js" crossorigin="anonymous"></script>
		<script src="js/app.js"></script>
		<script src="js/messenger.js"></script>
		<script src="js/WebAudioRecorder.min.js"></script>
	</body>
</html>