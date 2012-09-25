		var AP;
		function ghostHunter() {
			AP = Math.floor((Math.random()*10)+1);	
		}
	   
		function toConnect() {     
			$.mobile.changePage('connect.html?'+AP);  
		}
		
		function toCamera() {       
			$.mobile.changePage('camera.html?'+AP); 
		}
		
		function toAudio() {      
			$.mobile.changePage('audio.html?'+AP); 
		}