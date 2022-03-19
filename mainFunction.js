// This gets required methods
// const checkUserDetails = require('./checkDetails');
const fs = require('fs');


// This reads database.txt 
let userDatabase = fs.readFile('./userDatabase.txt', 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
});


// This reads users.txt 
// let users = fs.readFile('./users.txt', 'utf8', (err, data) => {
//     if(err) throw err;
//     return data;
// });

// let userDatabaseObject = JSON.parse(userDatabase);
// let usersObject = JSON.parse(users);

// console.log(userDatabaseObject)