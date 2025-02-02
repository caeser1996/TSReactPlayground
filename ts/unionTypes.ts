// Union types 

// Union types are used to combine multiple types into one type. We use the pipe symbol (|) to separate the types.
// Syntax:
// let variableName:type1|type2|type3|...;
// Example:


let userId: string|number = 'abc';
userId = 123; // No Error

// userId = true; // Error: Type 'boolean' is not assignable to type 'string | number'.
