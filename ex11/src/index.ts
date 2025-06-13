type User = {
    name: string;
    id: number;
    email: string;
};

const users: User[] = [];

function AddUser(name: string, email: string): void {
    const NewUser: User = {
        id: users.length + 1,
        name,
        email,
    };
    users.push(NewUser)
};

//AddUser("Rafa", "Rafa@gmail.com");
//console.log(users[0])

function FindUserEmail(email: string): User | undefined {
    return users.find(user => user.email === email);
};

//console.log(FindUserEmail("Rafa@gmail.com"))

function AddUserSafe(name: string, email: string): string {
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        return "user already in db";
    } else {
        AddUser(name, email);
        return "user has added to db";
    }
};

//console.log(AddUserSafe("Lucas", "Lc@gmail.com"))
//console.log(users)

enum TransactionStatus {
    PROCESS = "PROCESS",
    CHECKED = "CHECKED",
    PENDING = "PENDING"
}

type SelfUser = {
    username: string
    transactionStatus?: TransactionStatus
}

function UserStatus(nickname : string): string{
    const InsertUS: SelfUser = {
        username: nickname
    }
    return InsertUS.username
}

function MadeAPurchase(user: string, UserStatus : string): object {
    const ClientStatus: SelfUser = {
        username: UserStatus,
        transactionStatus: TransactionStatus.CHECKED
    }
    return ClientStatus
}

