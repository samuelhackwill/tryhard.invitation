import "./feed.html";
import "../components/captcha.js";
import "../components/challenge.js";

import { hasFinished } from "../components/challenge.js";

Template.feed.helpers({
  hider() {
    if (hasFinished.get() == true) {
      return 0;
    } else {
      return 1;
    }
  },
});
