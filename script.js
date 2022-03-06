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

function changeVolume(audioID){
    let sound = document.getElementById(audioID);
    let volume = document.getElementById("volume".concat(audioID));
    let level = parseInt(volume.value);

    sound.volume = level/100;

}
