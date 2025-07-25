"use strict";
class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    ;
}
;
class UserService {
    constructor() {
        this.users = [];
    }
    register(user) {
        const exist = this.users.find(u => u.email === user.email);
        if (exist)
            return "Email already registered!";
        this.users.push(user);
        return "User registered successfully!";
    }
    list() {
        this.users.forEach(u => console.log(`${u.name} - ${u.email}`));
    }
}
const service1 = new UserService();
console.log(service1.register(new User("Lucas", "lucas@gmail.com", "AS2938@snap*9")));
console.log(service1.register(new User("Lucas", "lucas@gmail.com", "AS2938@snap*9")));
service1.list();
