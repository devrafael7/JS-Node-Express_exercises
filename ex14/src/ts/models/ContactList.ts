class Contact {
    name: string;
    phoneNumber: string;

    constructor(cName: string, cPhoneNumber: string){
        this.name = cName;
        this.phoneNumber = cPhoneNumber;
    }
}

class Agenda {
    contacts: Contact[] = [];

    add(contact: Contact): void {
        this.contacts.push(contact);
    }

    remove(name: string){
        this.contacts = this.contacts.filter(c => c.name !== name);
    }

    toList(): void {
        this.contacts.forEach(c => console.log(`${c.name}: ${c.phoneNumber}`));
    }
}

const agenda1 = new Agenda();
agenda1.add(new Contact("Maria", "(99)99999-9999"));
agenda1.add(new Contact("Duda", "(99)99999-9999"));
agenda1.toList();
agenda1.remove("Maria");
agenda1.toList();