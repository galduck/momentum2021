const clock = document.querySelector("h2#clock");

function getClock(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// setInterval(sayHello, 5000); // 5초마다 실행됨 
// setTimeout(sayHello, 5000); // 5초 후에 한 번만 실행됨

getClock();
setInterval(getClock,1000);

clock.padStart(2,"0");