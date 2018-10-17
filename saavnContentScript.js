let songNameElement = document.getElementById("player-track-name");
let progressBarElement = document.getElementById("track-elapsed");
let currentSongTitle = "";

let songChangeCallback = function (mutationsList, observer) {
    if(songNameElement.childNodes.length == 0){
        console.log("Not playing anything currently.Please start a song.");
        return;
    }
    if (currentSongTitle.localeCompare(songNameElement.childNodes[0].textContent)) {
        console.log("Song changed...");
        currentSongTitle = songNameElement.childNodes[0].textContent;

        console.log("Playing " + currentSongTitle + "..");
        playSongIfNotPlaying();
    }
};
let songChangeObserver = new MutationObserver(songChangeCallback);
let config = {
    childList: true
};

// capture change events on songNameElement
songChangeObserver.observe(songNameElement, config);

let playSongIfNotPlaying = function () {
    console.log("Checking if song is being played..");
    let progressBarValueAtStart = progressBarElement.textContent;

    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 3000);
    }).then(() => {
        // check if progress bar moved while the promise was being resolved
        if (progressBarValueAtStart === progressBarElement.textContent) {
            console.log("Not playing...");
            pressPlayButton();
        }
        else {
            console.log("Song playing already..");
        }
    });
};

let pressPlayButton = function(){
    console.log("Play button clicked..");
    
    // click pause element if play element is hidden
    if(!document.getElementById("play").className.includes("hide"))
    {
        document.getElementById("play").click();
    }
    else
    {
        document.getElementById("pause").click();
    }
};

// play if not playing at the start
playSongIfNotPlaying();