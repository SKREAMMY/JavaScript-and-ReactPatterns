// Singletons are classes which can be instantiated once,
//  and can be accessed globally. This single instance 
//  can be shared throughout our application, which 
//  makes Singletons great for managing global state 
//  in an application.

// SingleTon is default in ES2015 and no need to explicitly
// freeze the object.

let instance;

class DBConnection {
    constructor(uri) {
        if (instance) {
            throw new Error("Instance already created");
        }
        this.uri = uri;
        instance = this;
    }

    connect() {
        console.log(`DB ${this.uri} is connected`);
    }

    disconnect() {
        console.log("DB is disconnected");
    }
}

const connection = Object.freeze(new DBConnection("mongodb://..."));
connection.connect();

// const newcon = new DBConnection("abc");
// newcon.connect();