	   		function toConnect() {     
			window.location.replace('connect.html');  
		}
		
		function toCamera() {       
			$.mobile.changePage('camera.html'); 
		}
		
		function toAudio() {      
			$.mobile.changePage('audio.html'); 
		}
		
		function closeApp(){
			navigator.app.exitApp();
		}