$('#switcher').click(() => {
    const audio = new Audio('./gemidao.mp3');
    console.log('urge to kill');
    console.log(audio);
    const playPromise = audio.play();
    playPromise
    .then(() => console.log('all went right'))
    .catch(() => console.log('something went badly wrong. Go call mom'))
});