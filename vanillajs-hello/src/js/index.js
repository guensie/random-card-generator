import $ from "jquery";
//include bootstrap npm library into the bundle
import 'bootstrap';
//include your own styles
import '../style/index.scss';

window.onload = function () {
     document.querySelector(".button").addEventListener('click', cardMaker);
};

function cardMaker(){
    let cardNumber = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
    let randomSuit=['\u2660','\u2663','\u2665','\u2666'];
    let aux = randomNumber();
    let cux = suitNumber();
    document.querySelector(".numbera").innerHTML = cardNumber[aux];
    document.querySelector(".numberb").innerHTML = cardNumber[aux];
    document.querySelector(".suita").innerHTML = randomSuit[cux];
    document.querySelector(".suitb").innerHTML = randomSuit[cux];
    document.querySelector(".suitc").innerHTML = randomSuit[cux];

if (cux >1) {
    document.querySelector(".card").style.color = "red";
} else if (cux <2) {
    document.querySelector(".card").style.color = "black";
}
}

function randomNumber(){
     return Math.floor((Math.random() *12)+1);
}

function suitNumber(){
    return Math.floor((Math.random() *4));
    
}







