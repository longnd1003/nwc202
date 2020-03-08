<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="style.css">
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
		<title>NWC Asking Service</title>
		<script src="https://kit.fontawesome.com/9b81e7de6f.js" crossorigin="anonymous"></script>
		<script src="https://code.jquery.com/jquery-3.4.1.min.js"</script>
		<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
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
								<!--<button id="recordButton" type="button" class="btn btn-light"><i class="fas fa-microphone-alt text-primary"></i></button>-->
								<!--<button id="stopButton" type="button" class="btn btn-light"><i class="far fa-stop-circle"></i></button>
								<!-- Button trigger modal -->
								<button id="recordButton" type="button" class="btn btn-light" data-toggle="modal" data-target="#staticBackdrop">
								  <i class="fas fa-microphone-alt text-primary"></i>
								</button>
								<!-- Modal -->
								<div class="modal fade" id="staticBackdrop" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
								  <div class="modal-dialog text-center modal-xl" role="document">
									<div class="modal-content justify-content-center">
									  <div class="modal-body">
										<div class="py-5">Recording your pretty voice ^^ !</div>
										<button id="stopButton" type="button" class="btn btn-lg btn-danger" data-dismiss="modal"><i class="far fa-stop-circle"></i></button>
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
		<script src="https://cdn.rawgit.com/mattdiamond/Recorderjs/08e7abd9/dist/recorder.js"></script>
		<script src="js/voiceRec.js"></script>
		<script src="js/messenger.js"></script>
	</body>
</html>