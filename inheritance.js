class user {
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`username is ${this.username}`);
        
    }
}

class teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addcourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai = new teacher("harsh","har@gmail.com","1234");
chai.addcourse()
const masalachai = new user("rishu");
masalachai.logme()
console.log(chai instanceof teacher);
