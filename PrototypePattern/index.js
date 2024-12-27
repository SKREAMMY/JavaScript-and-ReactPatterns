class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    bark() {
        console.log(`${this.name} is barking`);
    }
}

const user = (firstName, lastName) => ({
    firstName,
    lastName,
    checkLastOnline: (data) => {
        console.log(data);

    }
})

const user1 = user("kiran", "kumar");
const user2 = user("Ajith", "hari");

console.log(user1.firstName);
console.log(user2.firstName);

// This would return false as different memory is created for each object.
console.log(user1.checkLastOnline === user2.checkLastOnline);



const max = new Dog("max", 2);
const fin = new Dog("fin", 3);

console.log(max);
console.log(max.bark() === fin.bark());
// this will return true as both objects refer to the
// same function