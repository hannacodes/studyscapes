
// This function actually controls when the sound plays. 
// It also changes the buttons icon from play to pause and vice versa.
function playSound(audioID){
    let sound = document.getElementById(audioID);
    let button = document.getElementById("play".concat(audioID));

    if(sound.paused){
        if(audioID == "2" || audioID == "3"){
            sound.volume = 0.5;
        }
        sound.play();
        button.innerHTML = " &#10074&#10074";
    } else {
        sound.pause();
        button.innerHTML = "&#9658";
    }
}

// This function changes the volume based on the values on the input range. 
function changeVolume(audioID){
    let sound = document.getElementById(audioID);
    let volume = document.getElementById("volume".concat(audioID));
    let level = parseInt(volume.value);

    sound.volume = level/100;

}

function random(source){
    let num = Math.floor(Math.random() * 6);
    if(source == num && num != 5){
        num = num + 1;
    } else {
        num = num - 1;
    }
    switch (num){
        case 1:
            location.href = "seattle.html";
            break;
        case 2:
            location.href = "sandiego.html";
            break;
        case 3:
            location.href = "yellowstone.html";
            break;
        case 4:
            location.href = "nyc.html";
            break;
        case 5:
            location.href = "rit.html";
            break;
    }


}
