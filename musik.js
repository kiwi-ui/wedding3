var audio, playbtn, mutebtn, seek_bar;
function initAudioPlayer(){
	audio = new Audio();
	audio.src = "AOM.mp3";
	audio.loop = true;
	audio.play();
	// Set object references
	playbtn = document.getElementById("playpausebtn");
	// Add Event Handling
	playbtn.addEventListener("click",playPause);
	// Functions
	function playPause(){
		if(audio.paused){
		    audio.play();
		    playbtn.style.background = "url(https://image.flaticon.com/icons/svg/189/189889.svg) no-repeat";
	    } else {
		    audio.pause();
		    playbtn.style.background = "url(https://image.flaticon.com/icons/svg/148/148744.svg) no-repeat";
	    }
	}
	
}
window.addEventListener("load", initAudioPlayer);
