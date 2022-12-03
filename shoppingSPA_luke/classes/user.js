class user{
    #customerId;
    #userName;
    #first_name;
    #last_name;
    #email;
    constructor(customerId,userName,first_name,last_name,email){
        this.#customerId = customerId;
        this.#userName = userName;
        this.#first_name = first_name;
        this.#last_name = last_name;
        this.#email = email;
    }

    toObject(){
        return {
            cid:this.#customerId,
            fullname: `${this.#first_name} ${this.#last_name}`,
            unmae:this.#userName,
            email:this.#email
        }
    }
}

export default user;