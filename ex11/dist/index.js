"use strict";
const users = [];
function AddUser(name, email) {
    const NewUser = {
        id: users.length + 1,
        name,
        email,
    };
    users.push(NewUser);
}
;
//AddUser("Rafa", "Rafa@gmail.com");
//console.log(users[0])
function FindUserEmail(email) {
    return users.find(user => user.email === email);
}
;
//console.log(FindUserEmail("Rafa@gmail.com"))
function AddUserSafe(name, email) {
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        return "user already in db";
    }
    else {
        AddUser(name, email);
        return "user has added to db";
    }
}
;
//console.log(AddUserSafe("Lucas", "Lc@gmail.com"))
//console.log(users)
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["PROCESS"] = "PROCESS";
    TransactionStatus["CHECKED"] = "CHECKED";
    TransactionStatus["PENDING"] = "PENDING";
})(TransactionStatus || (TransactionStatus = {}));
function UserStatus(nickname) {
    const InsertUS = {
        username: nickname
    };
    return InsertUS.username;
}
function MadeAPurchase(user, UserStatus) {
    const ClientStatus = {
        username: UserStatus,
        transactionStatus: TransactionStatus.CHECKED
    };
    return ClientStatus;
}
