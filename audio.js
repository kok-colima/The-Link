	var AP;
    function onstart() {
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
	
	document.addEventListener("deviceready", onDeviceReady, true);

    // Record audio
	var state = 0; // 0 record, 1 stop, 2 playback   
	var src = "recording.mp3"; // name of auio file
	var mediaRec; // the object for recording and play sound
	var directory; // holds a reference for directory reading
	
	function recordAudio() {
		$('#RecordOFF').attr('hidden','true');
		$('#RecordON').removeAttr('hidden');
		
		mediaRec = new Media(src, onSuccess, onError);
		
        // Record audio
        mediaRec.startRecord();

        // Stop recording after 10 sec
        var recTime = 0;
        var recInterval = setInterval(function() {
            recTime = recTime + 1;
            if (recTime >= 10) {
                clearInterval(recInterval);
                mediaRec.stopRecord();
            }
        }, 1000);
    }
	
	function onDeviceReady() {
        //recordAudio();
    }
	function stopRecord (){
		if(mediaRec)
			mediaRec.stopRecord();
		$('#RecordOFF').removeAttr("hidden");
		$('#RecordON').attr('hidden','true');
	}
	
	function playRecord (){ 
		if(mediaRec)
			mediaRec.play();
		$('#PlayOFF').attr('hidden','true');
		$('#PlayON').removeAttr('hidden');
	}
	
	function stopPlay (){
		if(mediaRec)
			mediaRec.stop();
		$('#PlayOFF').removeAttr('hidden');
		$('#PlayON').attr('hidden','true');
	}
	
	function onSuccess() {
        console.log("recordAudio():Audio Success");
    }

    // onError Callback 
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' + 
              'message: ' + error.message + '\n');
    }
	
	function onback(){       
		window.location.replace('menu.html'); 
	}