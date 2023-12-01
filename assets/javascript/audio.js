var button = document.getElementById('enter');
// var audio = new Audio('https://cdn.discordapp.com/attachments/1160879486208852038/1180228873212928050/blameSpotify.mp3');
audio.volume = .100;
button.addEventListener('click', function() {
  audio.play();
  button.style.display = 'none';
});
