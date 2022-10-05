
console.log("welcome to spotify");

// initializing the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')
let masterSongName = document.getElementById('masterSongName')
let songItem = Array.from(document.getElementsByClassName('songItem'))
let timestamp = Array.from(document.getElementsByClassName('timestamp'))



let songs = [
    { songName: "MASTER BGM ", filepath: "songs/1.mp3", coverpath: "covers/cover1.jpg" },
    { songName: "BHEESHMA PARVAN BGM", filepath: "songs/2.mp3", coverpath: "covers/cover2.jpg" },
    { songName: "KATHTHI BGM", filepath: "songs/3.mp3", coverpath: "covers/cover3.jpg" },
    { songName: "KGF BGM", filepath: "songs/4.mp3", coverpath: "covers/cover4.jpg" },
    { songName: "KANNETHA DOORAM", filepath: "songs/5.mp3", coverpath: "covers/cover5.jpg" },
    { songName: "MANASSE MANASSE", filepath: "songs/6.mp3", coverpath: "covers/cover6.jpg" },
    { songName: "LOVELY", filepath: "songs/4.mp3", coverpath: "covers/cover7.jpg" },
]
// automatically putting the song name and cover photo
songItem.forEach((element, i) => {

    element.getElementsByTagName('img')[0].src = songs[i].coverpath
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName
})



// listen to events

// playing and pausing 
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})


audioElement.addEventListener('timeupdate', () => {
    
    // updating the seek bar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    myProgressBar.value = progress;
    


})


myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})





// playing the clicked song
const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlay();
        songIndex = parseInt(e.target.id);
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex - 1].songName
        // audioElement.currentTime = 0;
    })

})





// changing the play/pause symbol near the song name and in the bottom as well
let valueOfe = "fa-solid songItemPlay fa-circle-play"
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlay();
        // console.log(audioElement.currentTime)
        console.log(valueOfe)
        if (valueOfe == "fa-solid songItemPlay fa-circle-play") {
            audioElement.play();
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            valueOfe = e.target.classList.value
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            gif.style.opacity = 1;

        }

        else {


            audioElement.pause();
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');
            valueOfe = e.target.classList.value
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');
            gif.style.opacity = 0;

        }

    })
})



// playing the next song when clicking the next button
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 6) {
        songIndex = 1;
    } else {
        songIndex += 1
    }
    masterSongName.innerText = songs[songIndex].songName
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})



// playing the previous song when clicking the previous button
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 1) {
        songIndex = 6;
    } else {
        songIndex -= 1
    }
    masterSongName.innerText = songs[songIndex].songName
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

// putting the time duration of the song
