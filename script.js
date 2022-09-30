const number1 = document.getElementById("Num1");
const number2 = document.getElementById("Num2");
const number3 = document.getElementById("Num3");

let n1=document.querySelector("#input");

const call1=document.querySelector("#called");
const call2=document.querySelector("#called");
const call3=document.querySelector("#called");

let button=document.querySelector("#buttons");
let btn=document.querySelectorAll("#btn");

setInterval(()=>{
    let random1= Math.floor(Math.random()*100);
    number1.innerText = '' + random1;

    let random2= Math.floor(Math.random()*100);
    number2.innerText = '' + random2;

    let random3= Math.floor(Math.random()*100);
    number3.innerText = '' + random3;

},5000);

call1.addEventListener('click',()=>{
    Input.value += number1.innerText;
    console.log(input.value);
});

 Call2.addEventListener('click',function(){
    Input.value += number2.innerText;
    console.log(input.value);
});

Call3.addEventListener('click',function(){
    Input.value += number3.innerText;
    console.log(input.value);
});

button.addEventListener('click', function(){
    input.value=eval(input.value);
    console.log(input.value);
});
