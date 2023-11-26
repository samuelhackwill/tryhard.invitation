import "./captcha.html";

Template.captcha.helpers({
  ranSeed() {
    return Math.floor(Math.random() * 100);
  },
  ranId() {
    _id = this.replace(/[ ',;"()]/g, "");
    return _id;
  },
});
