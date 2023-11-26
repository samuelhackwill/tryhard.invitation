import "./challenge.html";

import { index } from "../pages/home.js";

Template.challenge.onCreated(function () {
  timeStart = new Date();
});

Template.challenge.events({
  "keyup .challengeInput"(e) {
    captchaLength = this.length;
    inputLength = e.currentTarget.value.length;
    if (inputLength >= captchaLength) {
      if (e.currentTarget.value == this) {
        console.log("epic win!");
        e.currentTarget.value = "";
        index.set(index.get() + 1);
        timeEnd = new Date();
        score = timeEnd - timeStart;
        secs = score / 1000;
        document.getElementById("challengeStatus").innerHTML =
          "✅ " + secs + " secondes";
      } else {
        console.log("wrong challenge!");
        document.getElementById("challengeStatus").innerHTML = "❎ ";
      }
    }
  },
});
