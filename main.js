const {readFile, writeFile, read} = require('fs');

const readUser = () => {
    return new Promise ((resolve, reject) => {
        readFile('./users.txt', (err, data) => {
            const a = JSON.parse(data)
            resolve(a)
        })
    })
}

async function checkIfUserExist(newData) {
    const exist = await readUserDB()
}

async function writeUserDB(newData){
    const existing = await readUser()

    existing.push(newData)
    const updated = JSON.stringify(existing)

    writeFile('./data.txt', updated, () => {
        console.log("new user added")
    })
}

writeUserDB({'tt' : 6})