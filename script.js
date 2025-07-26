const songsList = [
    {
        Songsrc: "song1.mp3",
        SongName: "Teri gali mann ata sanam",
        ArtistName: "Atif Aslam"
    },
    {
        Songsrc: "song2.mp3",
        SongName: "Aur b dukh henn zamany mann",
        ArtistName: "Iqra Aslam",
    },
    {
        Songsrc: "song3.mp3",
        SongName: "Yahan insan Bikty henn",
        ArtistName: "Rahat Ali Khan",
    },
    {
        Songsrc: "song4.mp3",
        SongName: "Muhabbat tum sy Nafrat",
        ArtistName: "kainat Aslam",

    },
    {
        Songsrc: "song5.mp3",
        SongName: "LOver y hogya",
        ArtistName: "Osman Khan",
    },
]
const musicIcon = document.getElementById("musicIcon");
const songName = document.getElementById("songName");
const artistName = document.getElementById("artistName");
const myProgressBar = document.getElementById("myProgressBar");
const backPlay = document.getElementById("backPlay");
const masterPlay = document.getElementById("masterPlay");
const frontPlay = document.getElementById("frontPlay");

const audioPlay = document.getElementById("audio")
let currentIndex = 0;
function loadSong() {
    let newElement = songsList[currentIndex];
    audioPlay.src = newElement.Songsrc;
    songName.textContent = newElement.SongName;
    artistName.textContent = newElement.ArtistName;
    myProgressBar.value = 0
    audioPlay.currentTime = 0 ;
}
loadSong()

masterPlay.addEventListener("click", () => {
    if (audioPlay.paused) {
        audioPlay.play();
        masterPlay.classList.add('fa-pause')
        masterPlay.classList.remove('fa-play')

    }
    else {
        audioPlay.pause();
        masterPlay.classList.remove('fa-pause')
        masterPlay.classList.add('fa-play')
    }
})

backPlay.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + songsList.length) % songsList.length;
    loadSong();
    audioPlay.play()
})

frontPlay.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % songsList.length;
    loadSong()
    audioPlay.play()

})
audioPlay.addEventListener("timeupdate", () => {
    const progress = (audioPlay.currentTime / audioPlay.duration) * 100;
    myProgressBar.value = progress
})
myProgressBar.addEventListener("input", () => {
    const seekTime = (myProgressBar.value / 100) * audioPlay.duration;
    audioPlay.currentTime = seekTime;
})