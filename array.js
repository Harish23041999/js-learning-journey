let arr =[23,45,67,60,89,28];
console.log(arr);
console.log(arr[5]);
//mix values
let arr1 =[23,45,67,60,89,28,"string","ram",obj={name:"harish",age:25},function hii(){alert("bye")}];

console.log(arr1.length);



 console.log(arr1[8]);
console.log(arr1[9]);

//add new index postion
arr1[7] = 'Jay Shree ram';
console.log(arr1[7]);

//let fruits = ["Apple", "Orange", "Plum"];

// fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]
// fruits[3] = 'Lemon';

//console.log( fruits.length ); // 3

//An array, just like an object, may end with a comma:
// let fruits = [
//     "Apple",
//     "Orange",
//     "Plum",
//   ];
//   console.log(fruits[0]);

//calculate the last element index and then access it: fruits[fruits.length - 1].

//   let fruits = ["Apple", "Orange", "Plum"];
//   console.log(fruits[fruits.length-1]);


// //get last element with at
//   let fruits = ["Apple", "Orange", "Plum"];
//   console.log(fruits.at-1);
//   // same as fruits[fruits.length-1]

//Arrays in JavaScript can work both as a queue and as a stack. They allow you to add/remove elements, both to/from the beginning or the end.
 
//arrays methos

//   let fruits = ["Apple", "Orange", "Plum"];
//   fruits.push("mango");// add to end
//   console.log(fruits);
//   fruits.pop();//delet form end and return it
//   console.log(fruits);


//   let fruits = ["Apple", "Orange", "Plum"];
//   fruits.shift();//Extracts the first element of the array and returns it:
//    console.log(fruits);
//     fruits.unshift("mango");
//     console.log(fruits);//Add the element to the beginning of the array:


let fruits = ["Apple", "Orange", "Plum"];
let cars  = ["BMW", "Audi", "Tesla","TATA","Mercedese","Maruti 800","TATA Nano"];
console.log(fruits.indexOf("Orange"));//retrun index
console.log(fruits.includes("Orange"));// serach for values


let concat = cars.concat(fruits);// add to arrays ['BMW', 'Audi', 'Tesla', 'Apple', 'Orange', 'Plum']
console.log(concat);
console.log(fruits.reverse());//revrese the array ['Plum', 'Orange', 'Apple']

console.log(cars.slice(1,5));// copies the poration of array ['Audi', 'Tesla', 'TATA', 'Mercedese']
console.log(cars.slice(-2));// ['Maruti 800', 'TATA Nano'] last two array

console.log(cars.splice(1,1,"Gwagon"));// ['BMW', 'Gwagon', 'Tesla', 'TATA', 'Mercedese', 'Maruti 800', 'TATA Nano']
//splice add remove replace element splice(start,deletcount,item....)

console.log(cars.sort());// sort the array assending dessending order

let nestedarry = [[2,4],[5,6],[7,8]];
console.log(nestedarry[0][0]);









