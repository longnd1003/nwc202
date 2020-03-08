<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <title>NWC Asking Service</title>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://kit.fontawesome.com/9b81e7de6f.js" crossorigin="anonymous"></script>
    <script src="js/messenger.js"></script>
</head>

<body>
    <div class="container py-3 px-4">
        <div class="row rounded-lg overflow-hidden shadow mt-3">
            <!-- Chat Box-->
            <div class="col pt-3">
                <div id="msg-zone" class="px-4 py-5 chat-box bg-white"></div>

                <!-- Typing area -->
                <form action="javascript:sendMsg();" class="bg-light">
                    <div class="input-group">
                        <input id="input-msg" type="text" placeholder="Type a message" class="form-control rounded-0 border-0 py-4 px-4 bg-light" required>
                        <div class="input-group-append">
                            <button type="submit" class="btn btn-link"> <i class="fa fa-paper-plane"></i></button>
                            <button type="button" class="btn btn-link" onclick="getVoice();"> <i class="fas fa-microphone-alt"></i></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div id="tts-audio"></div>
</body>