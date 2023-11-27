import "./challenge.html";

import { index } from "../pages/home.js";

export const hasFinished = new ReactiveVar(false);

Template.challenge.onCreated(function () {
  this.hasInteracted = new ReactiveVar(false);
});

Template.challenge.events({
  "keydown .challengeInput"(e) {
    keyPress = e.originalEvent.key;
    if (keyPress.startsWith("Arrow")) {
      e.preventDefault();
      console.log(keyPress);
      return;
    }
  },

  "keyup .challengeInput"(e) {
    const instance = Template.instance();

    if (!instance.hasInteracted.get()) {
      startCounter();
    }
    captchaLength = this.length;
    inputLength = e.currentTarget.value.length;
    if (inputLength >= captchaLength) {
      if (e.currentTarget.value == this) {
        e.currentTarget.value = "";
        index.set(index.get() + 1);
        // timeEnd = new Date();
        // score = timeEnd - timeStart;
        // secs = score / 1000;
        document.getElementById("challengeStatus").innerHTML = "✅ ";
      } else {
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
        hasFinished.set(true);
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
