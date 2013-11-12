/*
 * RTalk UI
 */

function log(message) {
	console.log(message);

 	//var s = "<p>" + new Date() + ": " + message + "</p>";
 	var s = "" + new Date() + ": " + message + "<br/>";
 	$('.debug-log-content').append(s);

 	$(".debug-log-content").scrollTop($(".debug-log-content")[0].scrollHeight);
}

function add_post(who, message) {
	var p = "<p>&lt;"+who+"&gt; "+message+"</p>";
	$('.chat-log').append(p);

	$(".chat-log").scrollTop($(".chat-log")[0].scrollHeight);
}

$("#chat-text").keyup(function(event){
    if(event.keyCode == 13){
    	var message = $('#chat-text').val();
        add_post("yourself", message);
        $('#chat-text').val('');
    }
});