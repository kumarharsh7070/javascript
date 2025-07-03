class user {
    constructor(username){
    this.username = username;

    }

    logme(){
        console.log(`username: ${this.username}`);
        
    }
    // --------------static-------------------------
     static createid(){
        return '123'
    }
}

const chai = new user("harsh","harsh@gmail.com","1234")
console.log(chai.createid());
