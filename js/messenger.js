$(document).ready(function () {
    var welcomeMsg = "Xin chào các bạn!";
    botCreateMsg(welcomeMsg);
	botCreateAudio(welcomeMsg);
});

function getVoice() {
	var url_string = window.location.href;
	var url = new URL(url_string);
	var voice = url.searchParams.get("voice");
	return voice;
}

function sendMsg() {
    var inputMsg = $("#input-msg").val();
	var today = new Date();
	var time = today.getHours() + ":" + today.getMinutes();
    $("#msg-zone").append("<div class=\"media w-50 ml-auto mb-3\"><div class=\"media-body\"><div class=\"bg-primary rounded py-3 px-3 mb-2\"><p class=\"text-small mb-0 text-white\">" + inputMsg + "</p></div><p class=\"small text-muted\">Sent at " + time + "</p></div></div>");
    document.getElementById("input-msg").value = "";
}

function botCreateAudio(inputMsg) {
    var text = 'input=' + inputMsg + '&voice=' + getVoice();
    $.ajax({
        url: 'tts.php',
        type: 'POST',
        data: text,
        async: true,
        success: function (data) {
            $("#tts-audio").html(data)
        },
    });
}

function botCreateMsg(msg) {
	var today = new Date();
	var time = today.getHours() + ":" + today.getMinutes();
    $("#msg-zone").append("<div class=\"media w-50 mb-3\"><img src=\"img/restaurant.png\" alt=\"user\" width=\"50\" class=\"rounded-circle\"><div class=\"media-body ml-3\"><div class=\"bg-light rounded py-3 px-3 mb-2\"><p id=\"bot-msg\" class=\"text-small mb-0 text-muted\">" + msg + "</p></div><p class=\"small text-muted\">Received at " + time + "</p></div></div>");
}
