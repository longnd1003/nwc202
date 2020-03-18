const greetings = ['hello', 'alo', 'alô', 'a lô', 'a lo', 'hê lô', 'hế lô', 'helo', 'hêlô', 'chào', 'hi'];
const greetingsAns = ['Xin chào.', 'Chào bạn.', 'Hello.'];
const name = ['bạn tên gì', 'cậu tên gì', 'mày tên gì', 'tên bạn', 'tên cậu', 'tên anh', 'tên chị', 'tên mày', 'tên của bạn', 'tên của cậu', 'tên của anh', 'tên của chị', 'tên của mày'];
const nameAns = ['Tôi tên là HALT bót', 'Tôi tên là HALTBOT'];
//const goodMorning = ['Chúc buổi sáng tốt lành. Chúc bạn có một ngày tràn ngập những khoảnh khắc hào hứng và tuyệt vời!', 'Một đóa hoa cho ngày mới hạnh phúc, một lời chúc cho vạn sự bình an!', 'Chào ngày mới. Chúc bạn có một ngày tràn đầy năng lượng!'];
//const goodAfternoon = ['Chúc bạn có buổi chiều thật vui vẻ và làm việc thật hiệu quả!', 'Chúc bạn có một buổi chiều tràn đầy năng lượng!'];
//const goodEvening = ['Thay mặt hơn 9 tỷ người dân trên Trái Đất, chúc bạn buổi tối thật vui vẻ!', 'Chúc bạn có một buổi tối an lành, vui vẻ và chuẩn bị cho ngày mới năng động, nhiều niềm vui!'];
//const goodNight = ['Chúc bạn ngủ ngon và có những giấc mơ tuyệt vời. Một giấc ngủ ngon quên đi hết buồn phiền của ngày hôm nay để ngày mai sẽ là một ngày mới đầy may mắn và tràn ngập niềm vui nhé!', 'Hãy đem tất cả những niềm vui của ngày hôm nay vào giấc ngủ thật ngon để mơ thấy thật nhiều giấc mơ hạnh phúc bạn nhé!', 'Giơ tay lên! Cướp đây! Leo lên giường! Nằm xuống! Nhắm mắt lại! Chúc bạn ngủ ngon!'];
const unknownCommandResponse = ['Xin lỗi! Tôi chưa hiểu ý bạn là gì.', 'Bạn vui lòng nêu rõ câu hỏi nhé!', 'Xin lỗi bạn! Tôi chưa hiểu bạn nói gì.'];
const isAvailable = ['còn phòng', 'còn nhà', 'còn cho thuê'];
const include = ['bao gồm gì', 'bao gồm những gì'];
const address = ['ở đâu', 'địa chỉ', 'homestay ở đâu', 'homestay ở chỗ nào', 'homestay chỗ nào'];
const whereToGo = ['đi những đâu', 'đi chơi', 'chơi những đâu'];
const whereToSendInfo = ['gửi thông tin','gửi số điện thoại', 'gửi sđt', 'gửi tên', 'gửi tên và số điện thoại'];
const price = ['giá'];
const whatToDo = ['muốn đặt chỗ', 'muốn đặt phòng', 'cần làm gì', 'đặt chỗ', 'đặt phòng', 'đặt trước'];
const transfer = ['chuyển khoản', 'thanh toán', 'nhận tiền'];
const checkIn = ['check-in', 'check-out', 'checkin', 'check in', 'check out', 'checkout', 'giờ giấc'];
const abort = ['hủy đăng kí', 'đổi chỗ', 'đổi phòng', 'hủy phòng'];

const isAvailableAns = 'Bên mình vẫn còn 2 nhà bạn nhé.';
const includeAns = ['HALT Homestay bao gồm: - Nhà loại 1 gồm phòng khách và phòng ngủ (cho 4 người, có thể tối đa lên đến 6 người). - Nhà loại 2 gồm phòng khách và phòng ngủ (cho cặp đôi, có thể ở nhóm 4 người). - Dùng chung: 1 sân rộng, 1 bếp rộng và khu phụ (phân biệt nam nữ).', 'HALT Homestay bao gồm:<br>- Nhà loại 1 gồm phòng khách và phòng ngủ (cho 4 người, có thể tối đa lên đến 6 người).<br>- Nhà loại 2 gồm phòng khách và phòng ngủ (cho cặp đôi, có thể ở nhóm 4 người).<br>- Dùng chung: 1 sân rộng, 1 bếp rộng và khu phụ (phân biệt nam nữ).'];
const addressAns = 'Địa chỉ Homestay ở: Khu Tập Thể Công Trình Giao Thông 208, Ngõ 142 Phú Viên, Bồ Đề, Long Biên, Hà Nội bạn nhé.';
const whereToGoAns = ['Tại đây bạn có thể thưởng thức các bữa ăn ngon tại Khu Ẩm Thực Ven Sông Hồng sát bên dòng sông hay tự nấu ăn bằng cách đi chợ làng dân giã hay mua sắm tại Trung Tâm Thương Mại AEON MALL cách nhà 3km. Trong ngày, các bạn rất thuận tiện để trải nghiệm các tour du lịch truyền thống: Làng Gốm Bát Tràng, Làng Rắn Lệ Mật, Chùa Linh Ứng. Cách HALT Homestay không xa, vài trăm mét thôi, bạn còn có thể vui thú check in, chụp hình tại các địa điểm thơ mộng: Vườn Hồng Thanh Sơn, Vườn Nhãn, Thung Lũng Tình Yêu, Phim Trường. Đặc biệt di chuyển qua Cầu Chương Dương chỉ 1,5km là bạn đã ở trong lòng phố cổ Hà Nội bằng các phương tiện công cộng hay tự mình trải nghiệm bằng dịch vụ xe đạp rồi đấy.', 'Tại đây bạn có thể thưởng thức các bữa ăn ngon tại Khu Ẩm Thực Ven Sông Hồng sát bên dòng sông hay tự nấu ăn bằng cách đi chợ làng dân giã hay mua sắm tại Trung Tâm Thương Mại lớn AEON MALL cách nhà 3km. Trong ngày, các bạn rất thuận tiện để trải nghiệm các tour du lịch truyền thống: Làng Gốm Bát Tràng, Làng Rắn Lệ Mật, Chùa Linh Ứng.<br>Cách HALT Homestay không xa, vài trăm mét thôi, bạn còn có thể vui thú check in, chụp hình tại các địa điểm thơ mộng: Vườn Hồng Thanh Sơn, Vườn Nhãn, Thung Lũng Tình Yêu, Phim Trường.<br>Đặc biệt di chuyển qua Cầu Chương Dương chỉ 1,5km là bạn đã ở trong lòng phố cổ Hà Nội bằng các phương tiện công cộng hay tự mình trải nghiệm bằng dịch vụ xe đạp rồi đấy.<br>'];
const priceAns = ['HALT Homestay có các mức giá khác nhau dành cho cuối tuần, ngày thường và các dịp lễ tết. - Đối với ngày thường: + Giá nhà loại 1 là 9 triệu 5 trăm ngàn đồng/ngày. + Giá nhà loại 2 là 8 triệu 5 trăm ngàn đồng/ngày. - Đối với ngày cuối tuần và các dịp lễ, Tết: + Giá nhà loại 1 là 11 triệu đồng/ngày. + Giá nhà loại 2 là 10 triệu đồng/ngày.', 'HALT Homestay có các mức giá khác nhau dành cho cuối tuần, ngày thường và các dịp lễ tết.<br>- Đối với ngày thường:<br>+ Giá nhà loại 1 là 9 triệu 5 trăm ngàn đồng/ngày.<br>+ Giá nhà loại 2 là 8 triệu 5 trăm ngàn đồng/ngày.<br>- Đối với ngày cuối tuần và các dịp lễ, Tết:<br>+ Giá nhà loại 1 là 11 triệu đồng/ngày.<br>+ Giá nhà loại 2 là 10 triệu đồng/ngày.<br>'];
const whatToDoAns = ['Bạn vui lòng cung cấp tên và số điện thoại liên lạc. Bạn cần chuyển khoản thành công 100% số tiền tương ứng với số ngày bạn book (lưu ý: khách chịu phí chuyển khoản). Chứng minh thư hoặc hộ chiếu bản photocopy cần được chuẩn bị sẵn để gửi lại người quản lý khu khi nhận nhà. - Nội dung chuyển khoản cần ghi rõ: Ngày book, Số điện thoại, Tên khách. Bạn vui lòng chuyển khoản 100% tiền thuê để được giữ chỗ. Sau khi hoàn tất thủ tục booking, bạn vui lòng inbox lại cho page để xác nhận đăng kí.', 'Bạn vui lòng cung cấp tên và số điện thoại liên lạc. Bạn cần chuyển khoản thành công 100% số tiền tương ứng với số ngày bạn book (lưu ý: khách chịu phí chuyển khoản). Chứng minh thư hoặc hộ chiếu bản photocopy cần được chuẩn bị sẵn để gửi lại người quản lý khu khi nhận nhà.<br>Nội dung chuyển khoản cần ghi rõ: Ngày book, Số điện thoại, Tên khách.<br>Bạn vui lòng chuyển khoản 100% tiền thuê để được giữ chỗ. Sau khi hoàn tất thủ tục booking, bạn vui lòng inbox lại cho page để xác nhận đăng kí.<br>'];
const whereToSendInfoAns = ['Bạn vui lòng gửi đến fanpage HALT Homestay (có tích xanh). Ngoài ra, bạn có thể gửi email đến bộ phận liên lạc của Homestay tại địa chỉ contact a còng haltHomestay.com nhé.', 'Bạn vui lòng gửi đến fanpage HALT Homestay (có tích xanh). Ngoài ra, bạn có thể gửi email đến bộ phận liên lạc của Homestay tại địa chỉ contact@haltHomestay.com nhé.'];
const checkInAns = 'Giờ nhận phòng là 2h chiều ngày bạn book. Còn giờ trả phòng là 2h chiều ngày cuối hạn thuê phòng bạn nhé!';
const abortAns = ['Có nhé bạn! - Hủy hoặc đổi ngày đặt phòng tối thiểu 15 ngày trước ngày đặt phòng sẽ được chuyển trả lại 95% tổng số tiền đặt. - Trước 7 đến 14 ngày đặt phòng bạn sẽ được chuyển trả 50% tổng số tiền đặt. - Trước 4 đến 6 ngày đặt phòng bạn sẽ được chuyển trả 30% tổng số tiền đặt. - Trước 3 ngày bạn sẽ không thể hủy phòng hay đổi ngày được nữa. - Ví dụ: Bạn đặt phòng ngày 11/6. Nếu bạn hủy vào ngày 4/6 sẽ được hoàn lại 50% tiền, hủy vào 7/6 thì sẽ được hoàn 30%, hủy vào ngày 8/6 sẽ không được hoàn tiền. Lưu ý là bạn chịu phí chuyển khoản nhé!', 'Có nhé bạn!<br>- Hủy hoặc đổi ngày đặt phòng tối thiểu 15 ngày trước ngày đặt phòng sẽ được chuyển trả lại 95% tổng số tiền đặt.<br>- Trước 7 đến 14 ngày đặt phòng bạn sẽ được chuyển trả 50% tổng số tiền đặt.<br>- Trước 4 đến 6 ngày đặt phòng bạn sẽ được chuyển trả 30% tổng số tiền đặt.<br>- Trước 3 ngày bạn sẽ không thể hủy phòng hay đổi ngày được nữa.<br>- Ví dụ: Bạn đặt phòng ngày 11/6. Nếu bạn hủy vào ngày 4/6 sẽ được hoàn lại 50% tiền, hủy vào 7/6 thì sẽ được hoàn 30%, hủy vào ngày 8/6 sẽ không được hoàn tiền. Lưu ý là bạn chịu phí chuyển khoản nhé!'];
const transferAns = ['Thông tin tài khoản nhận tiền: - Tên tài khoản: NGUYỄN ĐỨC LONG (Long đẹp trai). - Số tài khoản: 189115118. - Ngân hàng Việt Nam Thịnh Vượng (VPBank) – Chi nhánh Hồ Chí Minh.', 'Thông tin tài khoản nhận tiền:<br>- Tên tài khoản: NGUYỄN ĐỨC LONG (Long đẹp trai).<br>- Số tài khoản: 189115118.<br>- Ngân hàng Việt Nam Thịnh Vượng (VPBank) – Chi nhánh Hồ Chí Minh.<br>'];

var msgId = 0;
var send = false;
var userMsg;
var fmtBotMsg = "Chào mừng bạn đến với dịch vụ HALT Homestay. Tôi tên là HALTBOT. Tôi có thể giúp gì cho bạn?";
var botMsg = "Chào mừng bạn đến với dịch vụ HALT Homestay. Tôi tên là HALT bót. Tôi có thể giúp gì cho bạn?";
var inputField = document.getElementById('input-msg');
var sendButton = document.getElementById('sendButton');
var audio = document.createElement('audio');

$(document).ready(function () {
    botCreateMsg();
	$("#btn-loader").hide();
});

function getVoice() {
	var url_string = window.location.href;
	var url = new URL(url_string);
	var voice = url.searchParams.get("voice");
	if (voice === "") {
		window.location.href = "/";
	} else {
		return voice;
	}
}

function sendMsg() {
	userMsg = inputField.value;
	var today = new Date();
	var time = (today.getHours() < 10 ? '0' : '') + today.getHours() + ":" + (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
    $("#msg-zone").append("<div id=\"" + msgId + "\" class=\"media w-50 ml-auto mb-3\"><div class=\"media-body\"><div class=\"bg-primary py-3 px-3 mb-2\"><p class=\"text-small mb-0 text-white\">" + userMsg + "</p></div><p class=\"small text-dark\">Sent at " + time + "</p></div></div>");
	var getMsg = document.getElementById(msgId);
	var topPos = getMsg.offsetTop;
	document.getElementById('msg-zone').scrollTop = topPos;
	document.getElementById("input-msg").value = "";
	msgId++;
	processMsg();
}

function processMsg() {
	inputField.placeholder = "HALTBOT is replying...";
	inputField.disabled = true;
	sendButton.disabled = true;
	userMsg = userMsg.replace(/\s+/g,' ').trim();
	var word;
	for (word of isAvailable) {
		if (userMsg.toUpperCase().includes(word.toUpperCase())) {
			fmtBotMsg = isAvailableAns;
			botMsg = isAvailableAns;
			botCreateMsg();
			return;
		}
	}
	for (word of include) {
		if (userMsg.toUpperCase().includes(word.toUpperCase())) {
			fmtBotMsg = includeAns[1];
			botMsg = includeAns[0];
			botCreateMsg();
			return;
		}
	}
	for (word of address) {
		if (userMsg.toUpperCase().includes(word.toUpperCase())) {
			fmtBotMsg = addressAns;
			botMsg = addressAns;
			botCreateMsg();
			return;
		}
	}
	for (word of whereToGo) {
		if (userMsg.toUpperCase().includes(word.toUpperCase())) {
			fmtBotMsg = whereToGoAns[1];
			botMsg = whereToGoAns[0];
			botCreateMsg();
			return;
		}
	}
	for (word of whereToSendInfo) {
		if (userMsg.toUpperCase().includes(word.toUpperCase())) {
			fmtBotMsg = whereToSendInfo[1];
			botMsg = whereToSendInfo[0];
			botCreateMsg();
			return;
		}
	}
	for (word of price) {
		if (userMsg.toUpperCase().includes(word.toUpperCase())) {
			fmtBotMsg = priceAns[1];
			botMsg = priceAns[0];
			botCreateMsg();
			return;
		}
	}
	for (word of whatToDo) {
		if (userMsg.toUpperCase().includes(word.toUpperCase())) {
			fmtBotMsg = whatToDoAns[1];
			botMsg = whatToDoAns[0];
			botCreateMsg();
			return;
		}
	}
	for (word of checkIn) {
		if (userMsg.toUpperCase().includes(word.toUpperCase())) {
			fmtBotMsg = checkInAns;
			botMsg = checkInAns;
			botCreateMsg();
			return;
		}
	}
	for (word of abort) {
		if (userMsg.toUpperCase().includes(word.toUpperCase())) {
			fmtBotMsg = abortAns[1];
			botMsg = abortAns[0];
			botCreateMsg();
			return;
		}
	}
	for (word of transfer) {
		if (userMsg.toUpperCase().includes(word.toUpperCase())) {
			fmtBotMsg = transferAns[1];
			botMsg = transferAns[0];
			botCreateMsg();
			return;
		}
	}
	for (word of name) {
		if (userMsg.toUpperCase().includes(word.toUpperCase())) {
			fmtBotMsg = nameAns[1];
			botMsg = nameAns[0];
			botCreateMsg();
			return;
		}
	}
	for (word of greetings) {
		if (userMsg.toUpperCase().includes(word.toUpperCase())) {
			var i = Math.floor(Math.random() * 3);
			fmtBotMsg = greetingsAns[i];
			botMsg = greetingsAns[i];
			botCreateMsg();
			return;
		}
	}
	var i = Math.floor(Math.random() * 3);
	fmtBotMsg = unknownCommandResponse[i];
	botMsg = fmtBotMsg;
	botCreateMsg();
}

function botCreateMsg() {
	var text = 'input=' + botMsg + '&voice=' + getVoice();
    $.ajax({
        url: 'tts.php',
        type: 'POST',
        data: text,
        async: true,
        success: function (data) {
			audio.src = data;
			audio.play();
			var today = new Date();
			var time = (today.getHours() < 10 ? '0' : '') + today.getHours() + ":" + (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
			$("#msg-zone").append("<div id=\""+ msgId + "\" class=\"media w-50 mb-3\"><img src=\"img/avatar.png\" alt=\"user\" width=\"50\" class=\"rounded-circle\"><div class=\"media-body ml-3\"><div class=\"bg-dark py-3 px-3 mb-2\"><p id=\"bot-msg\" class=\"text-small mb-0 text-white\">" + fmtBotMsg + "</p></div><p class=\"small text-dark\">Received at " + time + "</p></div></div>");
			var getMsg = document.getElementById(msgId);
			var topPos = getMsg.offsetTop;
			document.getElementById('msg-zone').scrollTop = topPos;
			msgId++;
			inputField.placeholder = "Type a message";
			inputField.disabled = false;
			sendButton.disabled = false;
        },
    });
}