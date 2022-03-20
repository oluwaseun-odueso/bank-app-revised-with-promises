// This gets required methods
const {writeFile, readFile} = require('fs');
const { resolve } = require('path');


// const obj = [
//     {
//         "name" : "Toluwani",
//         "age" : 30,
//         "town" : "Ado-Ekiti"
//     }
// ]
const writeData = (filename, obj) => {
    return new Promise((resolve, reject) => {
        const newObj = JSON.stringify(obj)
        writeFile(filename, newObj, (err, data) => {
            if (err) throw err;

            console.log('Data has been written.')
            //resolve(a);
        })
    })
}

const readData = (filename) => {
    return new Promise((resolve, reject) => {
        readFile(filename, 'utf8', (err, data) => {
            if (err) throw err;

            //console.log("Data has been read.")
            const a = JSON.parse(data);
            resolve(a);
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
                reject(false);
            })
    })
}

function deleteDetails(username, password) {
    const collected = readData('./database.txt')
    collected
        .then(database => {
            checkDetails(username, password)
                .then(resolve => {
                    if (resolve) {
                        // console.log(database)
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
                    console.log('User does not exist')
            })
        })
}


// This function gets the balance of a user and returns it.
function getBalance(username) {
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


// This function updates the changed property
function updateChangedProperty(username, password, property, newValue) {
    checkDetails(username, password) 
        .then(
            checkProperty(property)
                .then(
                    changeProperty(username, property, newValue)
                        .then(result => console.log(result))
                )
        )
}

updateChangedProperty("CrossJanet", "034", "first_name", "Oluwaseun")


// // This function checks for the existence of a property
function checkProperty(property) {
    return new Promise((resolve, reject) => {
        const collected = readData('./database.txt')
        collected
            .then(details => {
                resolve(property in details[0]);
            })
    })
}


// This function changes a property and ammends it in the database
function changeProperty(username, property, newValue) {
    return new Promise((resolve, reject) => {
        const collected = readData('./users.txt')
        collected
            .then(users => {
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





// run functions here
// deleteDetails("Princess", "4309")
// getBalance("CrossJanet")
// updateDetails("DanielSumah", "bobonabigiboy")
// checkProperty("username")
// checkProperty("last_name")
//     .then(res => console.log(res))
// changeProperty("Crossjanet", "034", "phone_number", "09073347721")
    // .then(res => console.log(res))
