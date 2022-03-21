// This gets required methods
const {writeFile, readFile} = require('fs');
const { resolve } = require('path');

const writeData = (filename, obj) => {
    return new Promise((resolve, reject) => {
        const newObj = JSON.stringify(obj)
        writeFile(filename, newObj, (err, data) => {
            if (err) throw err;
        })
    })
}

const readData = (filename) => {
    return new Promise((resolve, reject) => {
        readFile(filename, 'utf8', (err, data) => {
            if (err) throw err;

            const a = JSON.parse(data);
            resolve(a);
            reject(new Error)
        })  
    })
} 

// This function checks the details of a user to be true
function checkDetails(username, password) {
    return new Promise((resolve, reject) => {
        const collected = readData('./users.txt')
        collected
            .then(users => {
                for (let i = 0; i < users.length; i++) {
                    if (username == users[i].username && password == users[i].password) {
                        resolve(true);
                    };
                };
                reject(new Error("Enter correct details"));
            })
    })
}

// This function deletes a user's details
function deleteDetails(username, password) {
    const collected = readData('./database.txt')
    collected
        .then(database => {
            checkDetails(username, password)
                .then(resolve => {
                    if (resolve === true) {
                        for (let i = 0; i < database.length; i++) {
                            if (username == database[i].username) {
                                database.splice(i, 1);
                                console.log('User has been deleted.')
                                console.log(database);   

                                writeData('./database.txt', database)
                                return
                            };
                        };
                    }
                })
                .catch(err => console.log(err.message))
        })
}

// This function gets the balance of a user and returns it.
function getBalance(username, password) {
    checkDetails(username, password)
        .then(resolve => {
            if (resolve === true) {
                const collected = readData('./database.txt')
                collected
                    .then(database => {
                        for (let i = 0; i < database.length; i++) {
                            if (username == database[i].username) {
                                console.log("Dear user, your account balance is", database[i].balance);
                            }; 
                        };
                    })
            }
        })
        .catch(err => console.log(err.message))
}

// This function updates the changed property
function updateProperty(username, password, property, newValue) {
    checkDetails(username, password) 
        .then(resolve => {
            checkProperty(property)
                .then(
                    updateProcess(username, property, newValue)
                        .then(result => console.log(result))
                )
        })
        .catch(err => console.log("Enter correct username and password."))
}

// // This function checks for the existence of a property
function checkProperty(property) {
    return new Promise((resolve, reject) => {
        const collected = readData('./database.txt')
        collected
            .then(details => {
                resolve(property in details[0]);
                reject(new Error("Property does not exist"))
            })
    })
}

// This function changes a property and ammends it in the database
function updateProcess(username, property, newValue) {
    return new Promise((resolve, reject) => {
        const collected = readData('./users.txt')
        collected
            .then(users => {
                if (property == "username") {
                    for (let i = 0; i < users.length; i++) {
                        if (username == users[i].username) {
                            users[i].username = newValue
                            
                            writeData('./users.txt', users)
                            console.log('Users.txt username has been updated')
                        }
                    }
                }
                const accepted = readData('./database.txt')
                accepted
                    .then(database => {
                        for (let i = 0; i < database.length; i++) {
                            if (username == database[i].username) {
                                database[i][property] = newValue;

                                console.log("Your data has been updated.")
                                resolve(database[i]);   

                                writeData('./database.txt', database)
                            };
                        };  
                    })
            })
    })
}

//This function adds to the existing users
function addToUser(username, password) {
    return new Promise((resolve, reject) => {
        const collected = readData('./users.txt')
        collected
            .then(users => {
                users.push({"username" : username, "password" : password})
                writeData('./users.txt', users)

                console.log("A new user details has been added to the users.")
                resolve(users)
            })
        })
}

// This function checks the details of a user to be true
function checkDetailsForCreate(username, password) {
    return new Promise((resolve, reject) => {
        const collected = readData('./users.txt')
        collected
            .then(users => {
                for (let i = 0; i < users.length; i++) {
                    if (username == users[i].username && password == users[i].password) {
                        reject(new Error("User already exist"));
                    };
                };
                resolve(true);
            })
    })
}

// This function creates a new user
function create(username, password) {
    const collected = readData('./users.txt')
    collected
        .then(users => {
            checkDetailsForCreate(username, password)
                .then(resolve => {
                    if (resolve === true) {
                        addToUser(username, password)
                            .then(resolve => console.log(resolve)),
                        addToDetails(username, firstName = '', lastName = '', phoneNumber = '', emailAdrress = '', accountBalance = '')
                            .then(resolve => console.log(resolve))
                    }
                })
                .catch(err => console.log(err.message))
        })
}

//This function adds to the existing database
function addToDetails(username, firstName, lastName, phoneNumber, emailAdrress, accountBalance) {
    return new Promise((resolve, reject) => {
        const collected = readData('./database.txt')
        collected
            .then(details => {
                details.push({
                    "username" : username, 
                    "first_name" : firstName, 
                    "last_name" : lastName, 
                    "phone_number" : phoneNumber, 
                    "email" : emailAdrress,
                    "balance" : accountBalance});

                writeData('./database.txt', details)

                console.log("A new user details has been added to the database.")
            
                resolve(details);
                reject(new Error)
            })
    })
}
