		var AP;
		function ghostHunter() {
			AP = Math.floor((Math.random()*10)+1);	
		}
	   
		function toConnect() {     
			window.location.replace('connect.html?'+10);  
		}
		
		function toCamera() {       
			$.mobile.changePage('camera.html?'+AP); 
		}
		
		function toAudio() {      
			$.mobile.changePage('audio.html?'+AP); 
		}
		
		function closeApp(){
			navigator.app.exitApp();
		}