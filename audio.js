	document.addEventListener("deviceready", onDeviceReady, false);

    // Record audio
	var state = 0; // 0 record, 1 stop, 2 playback   
	var src = "recording.mp3"; // name of auio file
	var audio; // the object for recording and play sound
	var directory; // holds a reference for directory reading
	
	function recordAudio() {
		$('#RecordOFF').attr('hidden','true');
		$('#RecordON').removeAttr('hidden');
		
        // Record audio
        audio.startRecord();

        // Stop recording after 10 sec
        var recTime = 5;
        var recInterval = setInterval(function() {
            recTime = recTime + 1;
            if (recTime >= 10) {
                clearInterval(recInterval);
                audio.stopRecord();
            }
        }, 1000);
    }
	
	function onDeviceReady() {
        //recordAudio();
		var audio = new Media(src, onSuccess, onError);
    }
	function stopRecord (){
		if(audio)
			audio.stopRecord();
		$('#RecordOFF').removeAttr('hidden');
		$('#RecordON').attr('hidden','true');
	}
	
	function playRecord (){ 
		if(audio)
			audio.play();
		$('#PlayOFF').attr('hidden','true');
		$('#PlayON').removeAttr('hidden');
	}
	
	function stopPlay (){
		if(audio)
			audio.stop();
		$('#PlayOFF').removeAttr('hidden');
		$('#PlayON').attr('hidden','true');
	}
	
	function onSuccess() {
        console.log("recordAudio():Audio Success");
    }

    // onError Callback 
    function onError(error) {
        alert('code: '    + error.code    + '\n' + 
              'message: ' + error.message + '\n');
    }
	
	function onback(){       
		window.location.replace('menu.html'); 
	}