/*
    This is your main stylesheet, you should use it only
    to include other styles into your web app.
*/
//include jquery into the bundle and store its contents into the $ variable
import $ from "jquery";
//include bootstrap npm library into the bundle
import 'bootstrap';
//include your own styles
import '../style/styles.scss';

window.onload = () => {
  document.querySelector('.card').classList.add(generateRandomSuit());
  document.querySelector('.card').innerHTML = (generateRandomNumber());


};

let generateRandomNumber = () => {
    let numbers = ['A', '2', '3', '4', '5', '6', '7','8','9', 'J','Q','K'];
    let indexNumbers = Math.floor(Math.random() * numbers.length);
    return numbers[indexNumbers];
};

let generateRandomSuit = () => {
    let suit =['Diamond', 'Hearts', 'Spade', 'Clubs'];
    let indexSuit = Math.floor(Math.random() * numbers.length);
     return suits[indexSuit];
       
};

   
    

    