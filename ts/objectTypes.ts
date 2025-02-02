// Object Types
// 1. object type
// object is a type that represents the non-primitive type, i.e. anything that is not number, string, boolean, symbol, null, or undefined.

let obj:object={name:"John",age:30};
console.log(obj);

// Why object type is not useful
// The object type is not useful because it can accept any type of object value. For example, the following code will not throw any error.
// let obj1:object=10;
// let obj2:object="Hello";
// let obj3:object=true;

// 2. Object type
// Object is a type that represents the instance of a class. It is a type that represents only non-primitive types.
// Syntax:
// let variableName:object=new ClassName();
// Example:
class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
}

// Creating an object of class Person
let person:object=new Person("John",30);

// How the above works 
// The above code will not throw any error because the object type can accept any type of object value.
// But if we try to access the properties of the object, it will throw an error because the object type does not know the properties of the object.
// console.log(person.name); // Error: Property 'name' does not exist on type 'object'.
// console.log(person.age); // Error: Property 'age' does not exist on type 'object'.

// So objects are good to use when 
// We dont know the properties of the object
// We dont know the type of the object
// We dont know the structure of the object
// We dont know the methods of the object

// But objects are not good to use when
// We know the properties of the object
// We know the type of the object
// We know the structure of the object
// We know the methods of the object

// 3. Type Assertion
// Type assertion is a way to tell the compiler what the real type of an object is. It is like type casting in other languages.
// Syntax:
// <type>variableName
// or
// variableName as type
// Example:
let obj4:any="Hello";

// Type inside object
let strLength1:number=(<string>obj4).length;
console.log(strLength1);