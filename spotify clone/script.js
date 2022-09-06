// Initialise variable
let songIndex = 0
let audioDiv = new Audio('songs/1.mp3')
let playBtn = document.getElementById('playBtn')
let progressBar = document.getElementById('ProgressBar')
let gif = document.getElementById('gif')
let songItems = Array.from(document.getElementsByClassName('songItem'))
let songPlay = Array.from(document.getElementsByClassName('songPlay'))
let nextSong = document.getElementById('next')
let prevSong = document.getElementById('prev')
let mainSongName = document.getElementById('mainSongName')


let songs = [
    {songName: "Tum Tum", filePath: 'songs/1.mp3', coverPath: 'covers/1.jpg'},
    {songName: "Pasori", filePath: 'songs/2.mp3', coverPath: 'covers/2.jpg'},
    {songName: "Halamithi habibo", filePath: 'songs/3.mp3', coverPath: 'covers/3.jpg'},
    {songName: "Naato Naato", filePath: 'songs/4.mp3', coverPath: 'covers/4.jpg'},
    {songName: "Faded", filePath: 'songs/5.mp3', coverPath: 'covers/5.jpg'},
    {songName: "Memories", filePath: 'songs/6.mp3', coverPath: 'covers/6.jpg'},
    {songName: "Girls like you", filePath: 'songs/7.mp3', coverPath: 'covers/7.jpg'},
    {songName: "Chaiyya Chaiyya", filePath: 'songs/8.mp3', coverPath: 'covers/8.jpg'},
    {songName: "Dil Deewana", filePath: 'songs/9.mp3', coverPath: 'covers/9.jpg'},
    {songName: "Legion", filePath: 'songs/11.mp3', coverPath: 'covers/10.jpg'},
]

songItems.forEach((element, i)=>{
    // console.log(element, i)
    element.getElementsByTagName('img')[0].src = songs[i].coverPath
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName
})

// Handle play/pause click
playBtn.addEventListener('click', ()=>{
    if(audioDiv.paused || audioDiv.currentTime <= 0){
        audioDiv.play()
        playBtn.classList.remove('fa-play-circle')
        playBtn.classList.add("fa-pause")
        gif.style.opacity = 1
    }else{
        audioDiv.pause()
        playBtn.classList.remove("fa-pause")
        playBtn.classList.add('fa-play-circle')
        gif.style.opacity = 0
    }
})

// Listen to Events
audioDiv.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate')
    // update seekbar
    let progress = parseInt((audioDiv.currentTime/audioDiv.duration) * 100)
    progressBar.value = progress
})

progressBar.addEventListener('change', ()=>{
    audioDiv.currentTime = progressBar.value * audioDiv.duration / 100
})

// function to play song
const playSong = index => {
        audioDiv.src = `songs/${index+1}.mp3`
        audioDiv.currentTime = 0
        audioDiv.play()
        playBtn.classList.remove('fa-play-circle')
        playBtn.classList.add('fa-pause')
        mainSongName.innerText = songs[index].songName
         gif.style.opacity = 1
}


// play song directly from div

const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
        element.classList.remove('fa-pause')
        element.classList.add('fa-play-circle')

       
    })
}

songPlay.forEach((element) => {
    element.addEventListener('click', (e)=>{
        makeAllPlay()
        songIndex = parseInt(e.target.id)
        // e.target.classList.remove('fa-play-circle')
        // e.target.classList.add('fa-pause')
        playSong(songIndex)
    })
})

nextSong.addEventListener('click', ()=>{
    if(songIndex > 9){
        songIndex = 0
    }else{
        songIndex++
    }
    playSong(songIndex)
})

prevSong.addEventListener('click', ()=>{
    if(songIndex <= 0){
        songIndex = 0
    }else{
        songIndex--
    }
    playSong(songIndex)
})

