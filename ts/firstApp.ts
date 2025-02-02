// By default if we dont define any type when we declare a variable, it will be of type any
let a;
a=10;
a="Hello";
//  type script wont throw any error for above code

// -----

// But if we define the type of the variable, then it will throw an error if we try to assign a different type value to it
let b:number;
b=10;
b="Hello"; // Error: Type 'string' is not assignable to type 'number'.

// -----
// We can also define the type of the variable while declaring it
let c:number=10;
c="Hello"; // Error: Type 'string' is not assignable to type 'number'.

// -----
// We can also define the type of the variable while declaring it
let d:number=10;
d=20; // No Error

// -----
// We can also define the type of the variable while declaring it
let e:number=10;
e=20.5; // No Error



