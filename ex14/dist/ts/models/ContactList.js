"use strict";
class Contact {
    constructor(cName, cPhoneNumber) {
        this.name = cName;
        this.phoneNumber = cPhoneNumber;
    }
}
class Agenda {
    constructor() {
        this.contacts = [];
    }
    add(contact) {
        this.contacts.push(contact);
    }
    remove(name) {
        this.contacts = this.contacts.filter(c => c.name !== name);
    }
    toList() {
        this.contacts.forEach(c => console.log(`${c.name}: ${c.phoneNumber}`));
    }
}
const agenda1 = new Agenda();
agenda1.add(new Contact("Maria", "(99)99999-9999"));
agenda1.add(new Contact("Duda", "(99)99999-9999"));
agenda1.toList();
agenda1.remove("Maria");
agenda1.toList();
