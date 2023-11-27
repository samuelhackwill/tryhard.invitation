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

const initialData = [
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

const aurevoirs = [
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
  "adiós",
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

const moreBonjours = [
  "Hello",
  "Hi",
  "Hey",
  "Bonjour",
  "Salut",
  "Coucou",
  "Salutations",
  "Grüezi",
  "Guten Tag",
  "Hallo",
  "Servus",
  "Buongiorno",
  "Ciao",
  "Salve",
  "Salutoni",
  "Hola",
  "Buenas",
  "Qué tal",
  "Hej",
  "Tja",
  "Labas",
  "Diena",
  "Sveiki",
  "Hei",
  "Bom dia",
  "Oi",
  "Alô",
  "Dia dhuit",
  "Haigh",
  "Hullo",
  "Bonny morn",
  "Aye",
  "Grüß Gott",
  "Hallo",
  "Hoi",
  "Buna",
  "Alo",
  "Szia",
  "Üdvözlet",
  "Hallo",
  "Hoi",
  "Dag",
  "Bonghjornu",
  "Salute",
  "Salutu",
  "Oghje",
];

const moreAdjectifs = [
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
  console.log(this.data.finished);
});

Template.home.helpers({
  theCaptcha() {
    if (index.get() >= initialData.length) {
      var aurevoir = aurevoirs[Math.floor(Math.random() * aurevoirs.length)];
      var adjectif =
        moreAdjectifs[Math.floor(Math.random() * moreAdjectifs.length)];
      return aurevoir + " " + adjectif;
    }

    // TODO :
    // if cookie is present, directly serve generative stuff
    return initialData[index.get()];
  },
});

Template.home.events({
  "click .pageContainer"() {
    document.getElementsByClassName("challengeInput")[0].focus();
  },
});
