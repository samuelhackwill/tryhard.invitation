import "./challenge.html";

import { index } from "../pages/home.js";

Template.challenge.onCreated(function () {
  this.hasInteracted = new ReactiveVar(false);
});

Template.challenge.events({
  "keyup .challengeInput"(e) {
    const instance = Template.instance();

    if (!instance.hasInteracted.get()) {
      startCounter();
    }
    captchaLength = this.length;
    inputLength = e.currentTarget.value.length;
    if (inputLength >= captchaLength) {
      if (e.currentTarget.value == this) {
        console.log("epic win!");
        e.currentTarget.value = "";
        index.set(index.get() + 1);
        // timeEnd = new Date();
        // score = timeEnd - timeStart;
        // secs = score / 1000;
        document.getElementById("challengeStatus").innerHTML = "✅ ";
      } else {
        console.log("wrong challenge!");
        document.getElementById("challengeStatus").innerHTML = "❎ ";
      }
    }
  },
});

startCounter = function () {
  const instance = Template.instance();

  instance.hasInteracted.set(true);

  timer = setInterval(function () {
    decs = document.getElementById("challengeTimerDecs").innerHTML;
    decCount = Number(decs) - 1;
    if (decCount < 1) {
      decCount = 99;
      secs = document.getElementById("challengeTimerSecs").innerHTML;
      secCount = Number(secs) - 1;
      if (secCount < 0) {
        clearInterval(timer);
        console.log("finitos");
        document.getElementById("challengeTimerSecs").innerHTML = "00";
        document.getElementById("challengeTimerDecs").innerHTML = "00";
        return;
      }
      newSecs = String(secCount).padStart(2, "0");
      document.getElementById("challengeTimerSecs").innerHTML = newSecs;
    }
    newDecs = String(decCount).padStart(2, "0");
    document.getElementById("challengeTimerDecs").innerHTML = newDecs;
  }, 10);
};
