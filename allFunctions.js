// This function checks the details of a user to be true
const checkDetails = (username, password) => {
    for (let i = 0; i < users.length; i++) {
        if (username == users[i].username && password == users[i].password) {
            return true;
        };
    };
    return false;
};


// This function deletes user details
const deleteDetails = (username, password) => {
    if (checkDetails(username, password) == true) {
        for (let i = 0; i < details.length; i++) {
            if (username == details[i].username) {
                details.splice(i, 1);
                return details;
            };
        };
    };
};


// This function gets the balance of a user and returns it.
const getBalance = (username) => {
    for (let i = 0; i < details.length; i++) {
        if (username == details[i].Username) {
            return details[i]["Account Balance"];
        };
    };
};


// This function checks for the existence of a property
const checkProperty = (property) => {
    return property in details[0];
};


const changeProperty = (username, property, newValue) => {
    for (let i = 0; i < details.length; i++) {
        if (username == details[i].Username) {
            details[i][property] = newValue;
            return details[i];
        };
    };
};

const replace = (username, property, newValue) => {
    if (checkProperty == true) {
        return changeProperty(username, property, newValue);
    };
};

// console.log(changeProperty("Omodolapo", "First Name", "Adedolapo"))

// Last stop, to continue from here.
// This function checks a user's details and appends it to the existing user array
const createUser = (username, password) => {
    users.push({"username" : username, "password" : password});
    return createDetails(username, firstName = '', lastName = '', phoneNumber = '', emailAdrress = '', accountBalance = '');
};

// Function to check the details of a new user
const create = (username, password) => {
    for (let i = 0; i < users.length; i++) {
        if (username == users[i].username && password == users[i].password) {
            return "User already exist!" 
        }

        else if (username == users[i].username && password != users[i].password) {
            return "Kindly user another username."
        }

        else if (username != users[i].username && password == users[i].password) {
            return "Kindly use another password."
        }
    }
    return createUser(username, password)
};


// This function accepts a user's details and appends it to the existing details array
const createDetails = (username, firstName, lastName, phoneNumber, emailAdrress, accountBalance) => {
    details.push({username, firstName, lastName, phoneNumber, emailAdrress, accountBalance});

        // "username" : username, 
        // "first_name" : firstName, 
        // "last_name" : lastName, 
        // "phone_number" : phoneNumber, 
        // "email" : emailAdrress, 
        // "balance" : accountBalance});

    // return details;
};

createDetails("tani", "Tanimola", "Oni", "09060060054", "tuna@yahoo.com", "8599")


//console.log(create("Sumah", "0509"))


// Exporting functions
module.exports.checkDetails = checkDetails;
module.exports.deleteDetails = deleteDetails;
module.exports.getBalance = getBalance;
module.exports.checkProperty = checkProperty;
module.exports.changeProperty = changeProperty;
module.exports.replace = replace;
module.exports.createUser = createUser;
module.exports.create = create
module.exports.createDetails = createDetails;


// const main = (username, password) => {
//     if (checkDetails(username, password) == true) {
//         console.log("Your account balance is", getBalance(username))
//     }

//     else {
//         console.log("This customer does not exist.")
//     }
// }

// main("Adebisi", "thegirl")