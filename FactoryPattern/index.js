// The factory pattern is useful when we have to create 
// multiple smaller objects that share the same 
// properties. A factory function can easily return 
// a custom object depending on the current environment,
//  or user-specific configuration.

// In JavaScript, the factory pattern isn’t much more 
// than a function that returns an object without using 
// the new keyword. ES6 arrow functions allow us to 
// create small factory functions that implicitly 
// return an object each time.


const createStudent = (name, age, gender) => ({
    name, age, gender
});

const student1 = createStudent("kp", 24, "male");

console.log(student1);
