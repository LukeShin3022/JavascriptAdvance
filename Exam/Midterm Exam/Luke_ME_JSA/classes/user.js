class userClass{
    #userid;
    #fName;
    #lName;
    #email;
    #phone;
    #username;
    #role
    constructor(uid,fname,lname,email,phone,uname,role){
        this.#userid = uid;
        this.#username = uname;
        this.#fName = fname;
        this.#lName = lname;
        this.#email = email;
        this.#phone = phone;
        this.#role = role;
    }
    toObject(){
        return{
            uid:this.#userid,
            fullname:`${this.#fName} ${this.#lName}`,
            email:this.#email,
            phone:this.#phone,
            uname:this.#username,
            role:this.#role
        }
    }
}
export default userClass;