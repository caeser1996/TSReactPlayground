// Primitive types

// 1. Number
// Number is a primitive type in TypeScript
let num:number=10;
let num1:number=10.5;
let num2:number=0x123; // Hexadecimal
let num3:number=0b1010; // Binary
let num4:number=0o123; // Octal

// 2. String
// String is a primitive type in TypeScript
let str:string="Hello";
let str1:string='Hello';
let str2:string=`Hello`;

// 3. Boolean
// Boolean is a primitive type in TypeScript
let bool:boolean=true;
let bool1:boolean=false;

// 4. Undefined
// Undefined is a primitive type in TypeScript
let und:undefined=undefined;

// 5. Null
// Null is a special type in TypeScript which can have only one value, null
let nul:null=null;

// 6. Symbol
// Symbol is a new primitive type in ES6
let sym:Symbol=Symbol("key1");

// 7. Any
// By default if we dont define any type when we declare a variable, it will be of type any
let any:any=10;
let any1:any="Hello";

// 8. Void
// Void is used when a function does not return anything
function display():void{
    console.log("Hello");
}

// 9. Never
// Never is used when a function never returns anything
function throwError():never{
    throw new Error("Error Occured");
}
