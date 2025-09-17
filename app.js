const audio = new Audio(
  "https://moosic.my.mail.ru/file/251ad6412c0e673acfc809685ed63eb4.mp3?k2=c66cf83ab35d17a6d48714d00bca4847"
);

window.onload = function () {
  var merrywrap = document.getElementById("merrywrap");
  var box = merrywrap.getElementsByClassName("giftbox")[0];
  var step = 1;
  var stepMinutes = [2000, 2000, 1000, 1000];
  function init() {
    box.addEventListener("click", openBox, false);
  }
  function stepClass(step) {
    merrywrap.className = "merrywrap";
    merrywrap.className = "merrywrap step-" + step;
  }
  function openBox() {
    if (step === 1) {
      box.removeEventListener("click", openBox, false);
      audio.play();
    }
    stepClass(step);
    if (step === 3) {
    }
    if (step === 4) {
      return;
    }
    setTimeout(openBox, stepMinutes[step - 1]);
    step++;
  }

  init();
};
