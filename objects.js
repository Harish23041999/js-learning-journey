//object in JavaScript is a data structure used to store related data collections. It stores data as key-value pairs, where each key is a unique identifier for the associated value. Objects are dynamic, which means the properties can be added, modified, or deleted at runtime.

//Creation sing Object Literal
// initialize an object with curly braces {}, setting properties as key-value pairs.

const Employee1 = {
  name: "Sourav",
  age: 23,
  job: "dot net Developer",
};
console.log(Employee1);

//Basic Operations on JavaScript Objects

// access an object’s properties using either dot notation or bracket notation

const Employee2 = {
  name: "shubham",
  age: 24,
  job: " java Developer",
};
console.log(Employee2.job);
console.log(Employee2["job"]);

//Modifying Object Properties
//Properties in an object can be modified by reassigning their values.

const Employee3 = {
  name: "rahul",
  age: 20,
  job: " mern stack Developer",
};
console.log(Employee3);
Employee3.age = 25;
console.log(Employee3);

//Adding Properties to an Object

const Employee4 = {
  name: "yogesh",
  age: 21,
  job: " junior stack Developer",
};
console.log(Employee4);
Employee4.city = "pune";
console.log(Employee4);

//Removing Properties from an Object
//The delete operator removes properties from an object.

let obj = { model: "Tesla", color: "Red" };
delete obj.color;

console.log(obj);

//object chaning

const company = {
  Employee1: {
    name: "Sourav",
    age: 23,
    job: "dot net Developer",
  },
  Employee2: {
    name: "shubham",
    age: 24,
    job: " java Developer",
  },
  Employee3: {
    name: "rahul",
    age: 20,
    job: " mern stack Developer",
  },
  Employee4: {
    name: "yogesh",
    age: 21,
    job: " junior stack Developer",
  },
};

// console.log(Employee3.name);
// console.log(Employee2.job);
// console.log(company);

// ittrating obkects

for (let key in company) {
  value = company[key];
  console.log(key, value);
}
