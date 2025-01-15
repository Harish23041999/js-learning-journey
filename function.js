//Functions in JavaScript are reusable blocks of code designed to perform specific tasks. They allow you to organize, reuse, and modularize code. It can take inputs, perform actions, and return outputs.

function sum() {
      console.log('hello function');
};

sum();

function print1to5(){
    for(i = 0;i<= 5; i++ ){
        console.log(`num ${i}`);
    };
};
print1to5();

function rollDice(){
    let random = Math.floor(Math.random()*6)+1

    console.log(random);
};
rollDice();
rollDice();
rollDice();

//function argument

function sum(a,b){
   console.log(`sum is: ${a+b}`);
};

sum(98,78);

function PrintTable(n){
    for(i = n;i<=n*10;i+=n){
         console.log(i);
    }
};
PrintTable(6);

// return keyword


 function isAdult(age){

    
    if(age>=18){
        return 'is Adult';
    }else{
        return 'not adult';''
    }

    console.log('bye bye');
 }
isAdult(78);

// function expression

// const greet = function(name) {
//     return `Hello, ${name}!`;
// };
// console.log(greet("Ananya"));

// higher order function:JavaScript Higher-Order Functions are functions that can accept other functions as arguments, return functions, or both.

function multipleGreet(func,count){
   for( let i =0;i<=count;i++){
           func();
   };
};

let greet = function(){
    console.log('Namste JavaScript');
};

multipleGreet(greet,3)

// function as return value

function multiplier(factor) {
    return function (x) {
        return x * factor;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); 
console.log(triple(5));