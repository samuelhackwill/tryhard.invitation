import "./leaderboard.html";

Template.leaderboard.onRendered(function () {
  setTimeout(function () {
    document.getElementById("leaderboard").classList.remove("opacity-0");
  }, 500);
});
