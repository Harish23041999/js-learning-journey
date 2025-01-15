//> = greter than
let age = 18;
console.log(age > 18); //false

let a = 20;
console.log(a > 18); //true

//>= : greter than equal to

let b = 18;
console.log(b >= 18); //true

//< = lesser than
let c = 20;
console.log(c < 18); //false

//<= : lesser than equal to
let d = 18;
console.log(d <= 18);//true

// == :compare value not type
console.log(5 == 5) // true
console.log(0 == "") // true
console.log(0 == false) // true
//console.log(null == undefine) // true
console.log(5 =='5') //(string) => true

// != :

console.log(5 != 5) //false
console.log(5 != 4) //true

//=== : compare value and type
console.log(5 === 5) //(typeof number) =>  true 
console.log(5 ==='5') //(typeof string) => fasle
console.log(0 === "") // false
console.log(0 === false) // false
//console.log(null === undefine) // false

// OR || Oparator

// The “OR” operator is represented with two vertical line symbols:

// result = a || b;

// are four possible logical combinations:

// alert( true || true );   // true
// alert( false || true );  // true
// alert( true || false );  // true
// alert( false || false ); // false

let hour = 100;

if (hour < 10 || hour > 18) {
  console.log( 'The office is closed.' );
}

// && oprator

// alert( true && true );   // true
// alert( false && true );  // false
// alert( true && false );  // false
// alert( false && false ); // false

let marks = 45;
if(marks>=33 && marks>=80){
    console.log("pass");
    console.log("gradeA");
};
