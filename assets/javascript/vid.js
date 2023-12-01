document.getElementById("enter").addEventListener("click", function() {
    
    const target = document.getElementById("enter");

    target.style.opacity = '0';
    target.addEventListener('transitionend', () => target.remove());

    if (typeof window == 'undefined') { 


    }
});

document.onclick = function(){
var video = document.getElementById('bgvid');
    video.play();
    console.log("video")
}


document.addEventListener("DOMContentLoaded", function () {
    $(document).ready(function () {
      $('.enter').click(function () {
        try {
          const audio = $('#video')[0];
  
          const canvas = document.getElementById("audioVisualizer");
          const ctx = canvas.getContext("2d");
  
          const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  
          const analyser = audioContext.createAnalyser();
          analyser.fftSize = 256;
          const bufferLength = analyser.frequencyBinCount;
          const dataArray = new Uint8Array(bufferLength);
  
          const source = audioContext.createMediaElementSource(audio);
          source.connect(analyser);
          analyser.connect(audioContext.destination);
  
          function drawVisualizer() {
            analyser.getByteFrequencyData(dataArray);
  
            ctx.clearRect(0, 0, canvas.width, canvas.height);
  
            const barWidth = (canvas.width / bufferLength) * 2;
            let x = 0;
  
            for (let i = 0; i < bufferLength; i++) {
              const barHeight = dataArray[i] / 2;
  
              const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
              gradient.addColorStop(0, "rgb(0, 0, 0)");
              gradient.addColorStop(1, "rgb(255, 255, 255)");
  
              ctx.fillStyle = gradient;
              ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
  
              x += barWidth + 2;
            }
  
            requestAnimationFrame(drawVisualizer);
          }
  
          drawVisualizer();
  
          const visualizer = document.getElementById("audioVisualizer");
  
          let isDragging = false;
          let offsetX, offsetY;
  
          visualizer.addEventListener("mousedown", (e) => {
            isDragging = true;
            offsetX = e.clientX - visualizer.getBoundingClientRect().left;
            offsetY = e.clientY - visualizer.getBoundingClientRect().top;
          });
  
          document.addEventListener("mousemove", (e) => {
            if (!isDragging) return;
  
            const newX = e.clientX - offsetX;
            const newY = e.clientY - offsetY;
  
            visualizer.style.left = newX + "px";
            visualizer.style.top = newY + "px";
          });
  
          document.addEventListener("mouseup", () => {
            isDragging = false;
          });
  
          $('#enter').hide();
          $('#margin-content').show();
  
          audio.play();
        } catch (error) {
          console.error("Error while trying to play audio:", error);
        }
      });
    });
  });
  