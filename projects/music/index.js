let prog = document.getElementById("progress");
let sng = document.getElementById("song");
let pico = document.getElementById("playIcon");
let img = document.getElementsByClassName("song-img");
// grab progress bar, songfile, play icon and song image

// if song data loaded then
sng.onloadedmetadata = function(){
    prog.max = sng.duration;
    // set progress bar maxium slider limit to song duration
    prog.value = sng.currentTime;
    // set progress bar time value to song current time
}

function Plause(){
    if(pico.classList.contains("fa-pause")){
        // if play button shows instead pause and is clicked then
        sng.pause();
        // pause song
        pico.classList.remove("fa-pause")
        // remove pause icon
        pico.classList.add("fa-play");
        // add play button
    }
    else{
        // if play button shows instead of pause and is clicked then
        sng.play();
        // play song
        pico.classList.add("fa-pause")
        // add pause icon
        pico.classList.remove("fa-play");
        // remove play button
    }
}

if(sng.play()){
    // if song is playing then
    setInterval(()=>{
        prog.value = sng.currentTime;
    },500)
    // set delay in time that the progress bar will update its data to the songs current time
}

prog.onchange = function(){
    // if progress bar manually changed then
    sng.play();
    // song play
    sng.currentTime = prog.value;
    // set songs current time to the progress bars value
}

function Restart(){
    // if restart button clicked
    sng.currentTime = 0;
    // set song current time to 0
    sng.pause();
    // pause song
    pico.classList.remove("fa-pause")
    // remove pause button
    pico.classList.add("fa-play");
    // add play button
}

function pageload(){
    // on page loading then
    sng.pause();
    // pause song so it doesnt auto start
}