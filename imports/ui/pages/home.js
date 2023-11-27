import "./home.html";

import "../layouts/feed.js";

export let index = new ReactiveVar(0);

// const data = [
//   "J'ai la joie",
//   "de vous",
//   "inviter à",
//   "la première",
//   "présentation",
//   "publique de",
//   "mon prochain",
//   "spectacle en",
//   "cours d'écriture",
//   "TRYHARD",
//   "Cette *présentation*",
//   "aura lieu",
//   "ce vendredi",
//   "1er Décembre",
//   "2023 entre",
//   "18h30 et",
//   "19h30",
//   "à La Bellone",
//   "Bruxelles.",
//   "par ailleurs",
//   "bravo!",
//   "vous n'êtes",
//   "pas un robot.",
// ];

const data = [
  "bonjour cryptique",
  "coucou hasardeux",
  "salut hypocrite",
  "hi! prudent",
  "kenavo sardonique",
  "hola honteux",
  "sayonara risqué",
  "shalom audacieux",
  "habile buongiorno",
];

Template.home.onCreated(function () {
  console.log(this.data.finished);
});

Template.home.helpers({
  theCaptcha() {
    return data[index.get()];
  },
});

Template.home.events({
  "click .pageContainer"() {
    document.getElementsByClassName("challengeInput")[0].focus();
  },
});
