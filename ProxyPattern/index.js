// The Proxy object allows you to create an object that
// can be used in place of the original object, but
// which may redefine fundamental Object operations
// like getting, setting, and defining properties.
// Proxy objects are commonly used to log property
// accesses, validate, format, or sanitize inputs, and
// so on.

// potentially used for validations and data analytics

// why to create proxy rather than just add these validations directly
// in to your object??
// Because every time you create an object, memory needs to be allocated for these
// functions, which are not really efficient.

const user = {
    firstName: 'Kiran',
    lastName: "Kumaravel pillai",
    username: "kpk",
    age: "24",
    email: "kiran@gmail.com"
};

const userProxy = new Proxy(user, {
    get: (target, property) => {
        console.log(`${new Date()} | The value of the ${property} is ${Reflect.get(target, property)}`);

    },

    set: (target, property, value) => {
        if (property === "username") {
            // assuming some validations are done.
            // throw new Error("validation failed");

        }
        return Reflect.set(target, property, value);

    }
})

userProxy.username = "kumar";
userProxy.username;