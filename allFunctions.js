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
            if (username == details[i].Username) {
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

//console.log(changeProperty("Omodolapo", "First Name", "Adedolapo"))


// This function checks a user's details and appends it to the existing user array
const createUser = (username, password) => {
    users.push({"username" : username, "password" : password});
    return createDetails(username, firstName = '', lastName = '', phoneNumber = '', emailAdrress = '', accountBalance = '');
};


// This function accepts a user's details and appends it to the existing details array
const createDetails = (username, firstName, lastName, phoneNumber, emailAdrress, accountBalance) => {
    details.push({username, firstName, lastName, phoneNumber, emailAdrress, accountBalance});
        //"Username" : username, 
        //"First Name" : firstName, 
        //"Last Name" : lastName, 
        //"Phone Number" : phoneNumber, 
        //"Email Address" : emailAdrress, 
        //"Account Balance" : accountBalance});

    return details;
    
};


//console.log(create("Sumah", "0509"))


// Exporting functions
module.exports.checkDetails = checkDetails;
module.exports.deleteDetails = deleteDetails;
module.exports.getBalance = getBalance;
module.exports.checkProperty = checkProperty;
module.exports.changeProperty = changeProperty;
module.exports.replace = replace;
module.exports.createUser = createUser;
module.exports.createDetails = createDetails;