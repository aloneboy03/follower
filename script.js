'use strict';

let num = document.querySelector('.num').textContent;
let num1 = document.querySelector('.num1').textContent;
let num2 = document.querySelector('.num2').textContent;

let x = 0;

let twitter = setInterval(function(){
    x = x + 300;
    document.querySelector('.num').textContent = x;
    if(x >= 12000){
        clearInterval(twitter);
    }
}, 30);

let y = 0;

let youTube = setInterval(function(){
    y = y + 125;
    document.querySelector('.num1').textContent = y;
    if(y >= 5000){
        clearInterval(youTube);
    }
}, 30);

let z = 0;

let facebook = setInterval(function(){
    z = z + 100;
    document.querySelector('.num2').textContent = z;
    if(z >= 7500){
        clearInterval(facebook);
    }
}, 15);