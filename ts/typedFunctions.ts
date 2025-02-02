// Adding types to functions
// TypeScript allows us to add types to functions. We can add types to the parameters and return type of the function.
// Syntax:
// function functionName(parameter1:type,parameter2:type,...):returnType{
//     // function body
// }
// Example:
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(10, 20)); // 30
// In the above code, we have added types to the parameters and return type of the function add. The function add takes two parameters of type number and returns a number.
// We can also add types to the parameters and return type of the function using arrow function.
// Syntax:
// const functionName=(parameter1:type,parameter2:type,...):returnType=>{
//     // function body
// }
// Example:
const add1 = (a: number, b: number): number => {
    return a + b;
};

// Complex example with objects in parameters and return type without interface
function printName(person: { name: string, age: number }): string {
    return person.name;
}

// paramter as functin type
function add2(a: number, b: number, callback: (result: number) => void) {
    callback(a + b);
}

// How this function will work 
// We are passing 10 and 20 as the first two arguments and a function as the third argument.
// The function will add the first two arguments and call the function that we passed as the third argument with the result.
// The function that we passed as the third argument will print the result.
add2(10, 20, (result) => {
    console.log(result); // 30
});


