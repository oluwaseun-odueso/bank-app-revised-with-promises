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
async function getContent(){
    let content = await writeFile(filename, obj)
    console.log(content);
}

const readData = (filename) => {
    return new Promise((resolve, reject) => {
        readFile(filename, 'utf8', (err, data) => {
            if (err) throw 'There is an error';

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
            //.then(users => console.log(users))
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

                                // writeData('./database', database)

                                return
                            };
                        };
                    }
                    console.log('Uzser does not exist')
            })
        })
}


// This function gets the balance of a user and returns it.
function getBalance(username) {
    const collected = readData('./database.txt')
    collected
        .then(details => {
            for (let i = 0; i < details.length; i++) {
                if (username == details[i].username) {
                    console.log("Dear user, your account balance is", details[i]["Account Balance"]);
                }; 
            };
        })
}


function replace(username, property, newValue) {

}
// const replace = (username, property, newValue) => {
//     if (checkProperty == true) {
//         return changeProperty(username, property, newValue);
//     };
// };


// run functions here
deleteDetails("Princess", "4309")
// getBalance("CrossJanet")