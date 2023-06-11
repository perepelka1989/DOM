const videoEl = document.querySelector('.video');
const playBtnEl = document.querySelector('.fa-play');
const pauseBtnEl = document.querySelector('.fa-pause');
const volumeEl = document.querySelector('.volume');
const currentTimeEl = document.querySelector('.current__time');
const timingEl = document.querySelector('.timing');
const volumeLevelEl = document.querySelector('.volume-level');


playBtnEl.addEventListener('click', () => {
    videoEl.play();
});

pauseBtnEl.addEventListener('click', () => {
    videoEl.pause();
});

videoEl.addEventListener('timeupdate', ()=> {
const minutes = Math.floor(videoEl.currentTime / 60)
const seconds = Math.floor(videoEl.currentTime % 60)

currentTimeEl.innerHTML = `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
timingEl.value=videoEl.currentTime / videoEl.duration * 100;

});

timingEl.addEventListener('input', () => {
    videoEl.currentTime=timingEl.value/100*videoEl.duration;
});



volumeEl.addEventListener('input', () => {
    // videoEl.volume = volumeEl.value
    const volume = volumeEl.value;
    videoEl.volume = volume;
    volumeLevelEl.innerText = Math.round(volume*10)
})