const countDate = new Date('jan 1, 2022 00:00:00').getTime();

const count = setInterval(function() {
  const dateNow = new Date().getTime();
  const difference = countDate - dateNow;
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor ((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor ((difference % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days
  document.getElementById("hours").innerHTML = hours
  document.getElementById("minutes").innerHTML = minutes
  document.getElementById("seconds").innerHTML = seconds
}, 1000)