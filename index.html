<!DOCTYPE html>
<html>
<head>
	<title>Chat</title>
	<meta charset="UTF-8">
	<script src="https://code.jquery.com/jquery-3.2.1.js" integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE=" crossorigin="anonymous"></script>
	<script type="text/javascript" src="AjaxPush.js"></script>
</head>
<body>
	<script type="text/javascript">
		var comet = new AjaxPush('listener.php', 'sender.php');
		var n = new Function("return (Math.random()*190).toFixed(0)");

		// create anonymous users
		var c = "rgb(" + n() + ", " + n() + "," + n() + ")";
		var template = "<strong style='color: " + c + "'>" + 'user_' + n() + "</strong>: ";

		// listener
		comet.connect(function(data) { $("#history").append(data.message) + "<br>"; });

		// sender
		var send = function() {
			comet.doRequest({ message: template + $("#message").val() + "<br>" }, function(){
				$("#message").val('').focus();
			})
		}
	</script>

	<input type="text" autofocus id="message" placeholder="your message!">
	<button onclick="send()">Send</button><br><br>
	<div id="history"></div>
</body>
</html>