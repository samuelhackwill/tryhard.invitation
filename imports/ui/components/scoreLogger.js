import "./scoreLogger.html";

Template.scoreLogger.onCreated(function () {
  setTimeout(function () {
    document.getElementById("scoreLogger").classList.remove("opacity-0");
  }, 500);
});
