function back() {
window.open("index.html","_self")
}

var users = new Array();
var passes = new Array();

function init(){
	users.push("AppleGeekSquad");
	passes.push("alpine");	
	users.push("mutantkidsonyx@gmail.com");
	passes.push("EksplOIt");
}

function login(){
	
	
	for(var i = 0;i<users.length;i++){
		if(document.getElementById("user").value == users[i]){
			if(document.getElementById("pass").value == passes[i]){
				window.open("https://applegeeksquad.github.io/berlus/sections/exploits.html");	
			}
		}
	}
}
