const height = document.querySelector("#inpt1");

const weight = document.querySelector("#inpt2");

const button = document.querySelector("#btn");

const output = document.querySelector("#output");

var bmi = 0;

function checkBMI(){
  
 
const wt = weight.value;
const ht = height.value;

   htSquare = ht * ht;

   bmi = wt * 10000 / htSquare;


    output.innerText =`Your Body Mass Index is ${bmi.toFixed(2)}`


    
    
}


button.addEventListener("click",checkBMI)