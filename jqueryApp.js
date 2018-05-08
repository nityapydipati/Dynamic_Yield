
//loads as soon as the initial window loads
window.onload = function() {
 	// Adding the '+' button to the interface
 	var addBtn = document.createElement("a");
 	addBtn.classList.add("add-btn");
 	addBtn.innerHTML = "+";
 	document.body.appendChild(addBtn);
 	var container = document.createElement("div");
 	container.id = "container";
 	document.body.appendChild(container);
 	var count=0;
 	//Create iFrameChatBox
 	var iframeChatBox = {
 		//example set of users
 		user: ['Bob','Haley','Richard','Emma','Joe','Claire','Holly','Miachel','Jim','Pam'],
 		
 		targetOrigin: '*',
 		createFrame: function() {
 			var iframe = document.createElement("iframe");
 			container.appendChild(iframe);
 			iframe.srcdoc =
 				"<link rel='stylesheet' type='text/css' href='iframe.css'/>" +
 				"<div id='containerheader'></div>" + "<ul id='chat-area'></ul>" +
 				"<form id='form' class='form'>" +
 				"<label for='message' id='chats'>["+this.user[count] +
 				"]:</label>" +
 				"<textarea  id='message' placeholder='Write message'></textarea>" +
 				"<button id='submit' type='submit' value='send'>Send</button>" +
 				"</form>" + "<script src='frame.js'></script>";
 			count++;

 		},
 		//push the message to all the iframes
 		pushMessage: function(msg, targetOrigin) {
 			var allIframes = document.getElementsByTagName("iframe");
 			for (var i = 0; i < allIframes.length; i++) {
 				allIframes[i].contentWindow.postMessage(msg, targetOrigin);
 			}
 		},
 	};
 	window.addEventListener('message', function(e) {
 		//Post msg to all iframes
 		iframeChatBox.pushMessage(e.data, iframeChatBox.targetOrigin);
 	});
 	//When the '+' button is clicked then automatically add an iframe
 	addBtn.addEventListener('click', function() {
 		iframeChatBox.createFrame();
 	});
 };