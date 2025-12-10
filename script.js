const timer = document.getElementById("timer");
let remainingSeconds = 120;

const id = setInterval(() => {
  if (remainingSeconds === -1) {
    clearInterval(id);
    return;
  }

  const minutes = `${Math.floor(remainingSeconds / 60)}`;
  const seconds = `${remainingSeconds % 60}`;
  timer.innerText = `${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}`;

  --remainingSeconds;
}, 1000);
