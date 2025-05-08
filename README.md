## Using keyof in TypeScript

The use of keyof keyword in TypeScript is many.It is a powerful tool that creates a union type of all the keys of a given object type, ensuring type safety when accessing object properties. 

An example, considering an interface User with properties id, name, and email. By using keyof User, we can  create a type UserKeys that is a union of these keys: 'id' | 'name' | 'email'. This allows us  to write functions like getUserProperty, which takes a User object and a key of type UserKeys, returning the corresponding value while ensuring only valid keys are used. This prevents errors related to accessing non-existent properties It will through error .

## Union and Intersection Types in TypeScript

### Union Types

Union types allow a variable to hold more than one type. This is useful when a value can be of different types.

// Example of a union type
function printId(id: number | string) {
    console.log("Your ID is: " + id);
}

In this example, the printId function can accept either a number or a string as its argument.

### Intersection Types

Intersection types combine multiple types into one. This is useful when we want to merge properties from different types.
 
// Example of an intersection type
interface Person {
    name: string;
}

interface Employee {
    employeeId: number;
}

// Combining Person and Employee
type Dev = Person & Employee;

const member: Dev = {
    name: "New",
    employeeId: 1234
};


In this example, the Dev type is an intersection of Person and Employee, meaning it must have both name and employeeId properties.





