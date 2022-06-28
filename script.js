let audio = new Audio('sound.mp3');
let button = document.getElementById('button');





button.addEventListener('click', () => {
    if(audio.paused){
        audio.src = `sound.mp3`;
        audio.play();
        button.classList.remove('fa-play-circle');
        button.classList.add('fa-pause-circle');
        // audio.loop = true
    }
    else{
        audio.pause();
        button.classList.remove('fa-pause-circle');
        button.classList.add('fa-play-circle');
    }
})

