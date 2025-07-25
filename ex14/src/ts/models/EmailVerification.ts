class User {
    public name: string;
    public email: string;
    public password: string;

    constructor(name: string, email: string, password: string){
        this.name = name;
        this.email = email;
        this.password = password;
    };
};

class UserService{
    private users: User[] = [];

    register(user: User): string {
        const exist = this.users.find(u => u.email === user.email);
        if (exist) return "Email already registered!";
        this.users.push(user);
        return "User registered successfully!";
    }

    list(): void {
        this.users.forEach(u => console.log(`${u.name} - ${u.email}`));
    }
}

const service1 = new UserService();
console.log(service1.register(new User("Lucas", "lucas@gmail.com", "AS2938@snap*9")));
console.log(service1.register(new User("Lucas", "lucas@gmail.com", "AS2938@snap*9")));
service1.list();


