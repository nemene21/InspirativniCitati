let images = [
    "https://uschamber-co.imgix.net/https%3A%2F%2Fs3.us-east-1.amazonaws.com%2Fco-assets%2Fassets%2Fimages%2Finspiration.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=415&q=88&w=622&s=42519cbf8be8d98ba264d6d2b1f52448",

    "https://images.freeimages.com/images/small-previews/772/solitude-1436839.jpg",

    "https://images.unsplash.com/photo-1520371764250-8213f40bc3ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",

    "https://media.istockphoto.com/photos/loneliness-teenage-girls-picture-id1308753258?b=1&k=20&m=1308753258&s=612x612&w=0&h=WeV3FC-dhRsOetMD6cIMc3L-6GWKYrRk6Sq5mVpDyXE=",

    "https://images.freeimages.com/images/small-previews/2fc/shadow-man-in-the-night-1254955.jpg",

    "https://cdn.pixabay.com/photo/2019/09/29/22/06/light-bulb-4514505__480.jpg",

    "https://cdn.pixabay.com/photo/2018/08/05/12/10/plant-3585490__340.jpg",

    "https://cdn.pixabay.com/photo/2018/10/26/18/29/hiking-3775075__340.jpg",

    "https://cdn.pixabay.com/photo/2017/04/26/23/46/morning-2264051__340.jpg",

    "https://cdn.pixabay.com/photo/2017/09/28/13/47/woman-2795589__340.jpg",
    
    "https://cdn.pixabay.com/photo/2018/12/08/15/14/elephants-3863475__340.jpg",

    "https://cdn.pixabay.com/photo/2017/12/29/01/42/nature-3046567__340.jpg",

    "https://cdn.pixabay.com/photo/2017/11/03/18/26/man-2915187__340.jpg",

    "https://cdn.pixabay.com/photo/2018/02/15/19/42/sunset-3156176__340.jpg",

    "https://cdn.pixabay.com/photo/2014/09/07/21/34/child-438373__340.jpg"
];

let pozicije = [
    "bottomLeftText",
    "upperLeftText"
];

let fontovi = [
    "arial",
    "comic sans",
    "impact"
];

glagoli1 = [

    "have to",
    "should go",
    "must never",
    "are obligated to",
    "can't",
    "can",
    "should",
    "need to",
    "don't have to",
    "are able to",
    "are likely to",
    "are unlikely to",
    "sometimes might just",
    "might be able to"

]

glagoli2 = [

    "consume",
    "obtain",
    "get",
    "try out",
    "punch",
    "be worried about",
    "climb",
    "overcome",
    "be better than",
    "be obsessed with",
    "jump over",
    "try compeating with",
    "get attacked by",
    "sing about",
    "outrun",
    "become",
    "be in a conflict with",
    "train",
    "use",
    "posses"

];

imenice = [

    "potato",
    "brick",
    "building",
    "river",
    "butterfly",
    "rock",
    "table",
    "path",
    "telescope",
    "mountain",
    "lamp",
    "mug",
    "piano",
    "door"

];

recenicniZnakovi = [
    ".",
    "!"
];

function generate() {

    // Promjena slike
    slika = document.getElementById("slika");

    slika.src = images[Math.floor(Math.random() * images.length)];


    // Stavljanje teksta u div sa slikom
    let hold = document.getElementById("hold");

    hold.classList.remove("fadeIn");
    hold.offsetHeight;
    hold.classList.add("fadeIn");

    hold.style.fontWeight = String(Math.floor(450 + Math.random() * 100)) + "px"; // Promjena fonta
    hold.style.fontSize = String(Math.floor(34 + Math.random() * 22)) + "px";
    hold.style.fontFamily = fontovi[Math.floor(Math.random() * fontovi.length)];

    let text = document.getElementById("tekstSlike");

    text.classList.remove("bottomLeftText"); text.classList.remove("upperLeftText");

    text.classList.add(pozicije[Math.floor(Math.random() * pozicije.length)]); // Resetiranje elementa koji drži tekst

    let citat = "";

    if (Math.random() < 0.8) citat += "You"; // Zamjenica

    else                     citat += "We";

    citat += " ";

    citat += glagoli1[Math.floor(Math.random() * glagoli1.length)]; // Glagol 1

    citat += " ";

    citat += glagoli2[Math.floor(Math.random() * glagoli2.length)]; // Glagol 2

    citat += " ";

    let imenica = imenice[Math.floor(Math.random() * imenice.length)]

    if (imenica[0] == "a" || imenica[0] == "e" || imenica[0] == "i" || imenica[0] == "o" || imenica[0] == "u")  // Stavi an ako je prvo slovo otvornik

        citat += "an";

    else

        citat += "a";

    citat += " ";

    citat += imenica // Dodaj imenicu

    citat += recenicniZnakovi[Math.floor(Math.random() * recenicniZnakovi.length)] // Dodaj recenicni znak

    text.textContent = citat;

}

generate();