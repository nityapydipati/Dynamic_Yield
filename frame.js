window.onload = function() {
 	//targetOrigin specific target
 	var domain = "*";
 	
 	// notification of creating a new chat window
 	var newFrame = document.getElementById("chats").textContent;
 	parent.postMessage(newFrame + " joined the conversation",
 		domain);
 	// Post message by send button
 	document.getElementById("form").addEventListener('submit', function(event) {
 		var labelMessage = document.getElementById("chats").innerHTML;
 		var message = document.getElementById("message").value;
 		parent.postMessage(labelMessage + message, domain);
 		// 	//Reset filled form
 		document.getElementById("form").reset();
 		event.preventDefault();
 	});
 	// Post message by enter key
 	document.getElementById("message").addEventListener("keydown", function(
 		event) {
 		// Enter is pressed
 		if (event.keyCode == 13) {
 			var labelMessage = document.getElementById("chats").innerHTML;
 			var message = document.getElementById("message").value;
 			parent.postMessage(labelMessage + message, domain);
 			//Reset filled form
 			document.getElementById("form").reset();
 		}
 	});
 	// push new chat message to the parent window, only if not empty
 	window.addEventListener('message', function(e) {
 		//Separate frame name from message
 		var index = e.data.indexOf(':');
 		var frameName = e.data.slice(0, index);
 		var msg = e.data.slice(index + 1);
 		// if not empty
 		
		var newComment = document.createElement("div");
		newComment.innerHTML = "<li id='chat-bubble'>" + frameName +
			'<br>' + msg + "</li>";
		document.getElementById("chat-area").appendChild(newComment);
 		
 		// always scroll window to the bottom of the chat
 		window.setTimeout(function() {
 			var ulList = document.getElementById('chat-area');
 			ulList.scrollTop = ulList.scrollHeight;
 		}, 0);
 	});
 };