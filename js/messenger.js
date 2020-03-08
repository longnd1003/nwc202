function sendMsg() {
	var inputMsg = $("#input-msg").val();
	$('div#new-msg').removeAttr('id');
	$("#msg-zone").append("<div id=\"new-msg\" class=\"media w-50 ml-auto mb-3\"><div class=\"media-body\"><div class=\"bg-primary rounded py-3 px-3 mb-2\"><p class=\"text-small mb-0 text-white\">" + inputMsg + "</p></div><p class=\"small text-muted\">12:00 PM | Aug 13</p></div></div>");
	document.getElementById("input-msg").value = "";
}

function getBotMsg() {
	var text = 'input=' + $("#bot-msg").text();
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
	
}