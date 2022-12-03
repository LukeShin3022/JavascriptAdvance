class user{
    #customerId;
    #userName;
    #first_name;
    #last_name;
    #email;
    constructor(Cid,uname,fname,lname,email){
        this.#customerId = Cid;
        this.#userName = uname;
        this.#first_name = fname;
        this.#last_name = lname;
        this.#email = email;
    }
    toObject(){
        return{
            cid:this.#customerId,
            fullname:`${this.#first_name} ${this.#last_name}`,
            uname:this.#userName,
            email:this.#email
        }
    }
}
export default user;