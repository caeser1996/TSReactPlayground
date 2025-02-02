// Custom types
// TypeScript allows us to create our own custom types. We can create custom types using the type keyword.
// Syntax:
// type typeName=type;
// Example:
type stringOrNumber = string | number;

let user:stringOrNumber="abc";

// Function type
type addType=(a:number,b:number)=>number;

const add3:addType=(a,b)=>a+b;

console.log(add3(10,20)); // 30

// Object type
type personType={name:string,age:number};

let person1:personType={name:"John",age:30};

console.log(person1);

// Array type
type numberArray=number[];

let arr7:numberArray=[10,20,30];

console.log(arr7);

// Union type
type stringOrNumber1=string|number;

let userId1:stringOrNumber1="abc";

userId1=123;

console.log(userId1);

// Intersection type

type personType1={name:string}&{age:number};

let person2:personType1={name:"John",age:30};

console.log(person2);

// Type alias

type stringOrNumber2=string|number;

let userId2:stringOrNumber2="abc";