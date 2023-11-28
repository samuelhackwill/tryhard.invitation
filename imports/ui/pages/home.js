import "./home.html";

import "../layouts/feed.js";

export let index = new ReactiveVar(0);

initialData = [
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

aurevoirs = [
  "goodbye",
  "farewell",
  "see you later",
  "take care",
  "au revoir",
  "adieu",
  "salut",
  "à bientôt",
  "auf wiedersehen",
  "tschüss",
  "bis bald",
  "auf wiedersehen",
  "tschüss",
  "bis dann",
  "ade",
  "arrivederci",
  "addio",
  "ciao",
  "a presto",
  "hasta luego",
  "hasta pronto",
  "nos vemos",
  "adjö",
  "vi ses",
  "viso gero",
  "sudie",
  "iki",
  "ardievas",
  "adeus",
  "até logo",
  "até breve",
  "tchau",
  "cheerio",
  "haste ye back",
  "guidbye",
  "tschüss",
  "bis bald",
  "servus",
  "la revedere",
  "adio",
  "pe curând",
  "pa",
  "szia",
  "szervusz",
  "tot ziens",
  "vaarwel",
  "tot later",
  "doei",
  "avvedeci",
  "addiu",
  "arrivederci",
];

moreBonjours = [
  "hello",
  "hi",
  "hey",
  "bonjour",
  "salut",
  "coucou",
  "salutations",
  "grüezi",
  "guten tag",
  "hallo",
  "servus",
  "buongiorno",
  "ciao",
  "salve",
  "salutoni",
  "hola",
  "buenas",
  "qué tal",
  "hej",
  "tja",
  "labas",
  "diena",
  "sveiki",
  "hei",
  "bom dia",
  "oi",
  "alô",
  "dia dhuit",
  "haigh",
  "hullo",
  "bonny morn",
  "aye",
  "grüss gott",
  "hallo",
  "hoi",
  "buna",
  "alo",
  "szia",
  "üdvözlet",
  "hallo",
  "hoi",
  "dag",
  "bonghjornu",
  "salute",
  "salutu",
  "oghje",
];

moreAdjectifs = [
  "apathique",
  "déterminé",
  "désinvolte",
  "résolu",
  "définitif",
  "terminal",
  "sceptique",
  "empathique",
  "indifférent",
  "assertif",
  "illégal",
  "coupable",
  "pragmatique",
  "passionné",
  "zélé",
  "décontracté",
  "implacable",
  "persévérant",
  "confiant",
  "dubitatif",
  "nostalgique",
  "stoïque",
  "altruiste",
  "blasé",
  "truculent",
  "intrépide",
  "assertif",
  "indolent",
  "intrigué",
  "tolérant",
  "exalté",
];

Template.home.onCreated(function () {
  console.log(
    "has visited before? ",
    localStorage.getItem("visited") == "true"
  );

  shuffleArray(aurevoirs);
  shuffleArray(moreBonjours);
  shuffleArray(moreAdjectifs);

  if (localStorage.getItem("visited") == "true") {
    initialData = [];
    for (let index = 0; index < 10; index++) {
      var moreBonjour = moreBonjours.shift();
      var adjectif = moreAdjectifs.shift();
      initialData.push(moreBonjour + " " + adjectif);
    }
  }

  localStorage.setItem("visited", "true");
  console.log(this.data.finished);
});

Template.home.helpers({
  theCaptcha() {
    if (index.get() >= initialData.length) {
      var aurevoir = aurevoirs.shift();
      var adjectif = moreAdjectifs.shift();
      return aurevoir + " " + adjectif;
    }

    return initialData[index.get()];
  },
});

Template.home.events({
  "click .pageContainer"() {
    document.getElementsByClassName("challengeInput")[0].focus();
  },
});

clearData = function () {
  localStorage.removeItem("visited");
};

shuffleArray = function (array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
