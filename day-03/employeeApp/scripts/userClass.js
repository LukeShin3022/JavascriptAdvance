class userClass{
    #firstName;
    #lastName;
    #email;
    #telephone;
    #address;
    #dob;
    #ed;
    #departmentId;
    #positionId;
    #depName;
    #poName;
    constructor(firstName,lastName,email,telephone,address,dob,ed,did,pid){
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#email = email;
        this.#telephone = telephone;
        this.#address = address;
        this.#dob = dob;
        this.#ed = ed;
        this.#departmentId = did;
        this.#positionId = pid;
    }
    #searchId(obj,id,proName){
        if(obj[proName] == id){
            return obj;
        }
        return false;
    }

    get userName(){
        return this.#firstName+" "+this.#lastName;
    }

    get userEmail(){
        return this.#email;
    }

    userInfo(obj){
        const h2 = document.createElement("h2");
        const p = document.createElement("p");
        // const details = document.querySelector("#details");
        let arr = [];
        p.innerText = "UserName: "+this.#firstName+" "+this.#lastName+"\nPhone: "+this.#telephone+"\nAddress: "+this.#address+"\nDate of Birth: "+this.#dob+"\nEmployment Date: "+this.#ed;
        h2.innerText = "Welcome "+this.userName;

        // console.log("A "+Object.keys(obj).length+obj);
        // details.appendChild(h2);
        // details.appendChild(p);
        arr.push(h2,p);
        // console.log(arr);

        return arr;
    }

    loggedIn(){

    }
    
    fillPosition(){
        fetch('./data/positions.json').then(
            (response)=>{
                response.json().then(
                    (jsonData)=>{
                        jsonData.forEach((obj)=>{
                            let pObj = this.#searchId(obj,this.#positionId,'pid');
                            if(pObj) {
                                this.#poName = pObj['p_name'];
                                return false;
                            }
                        })
                    }
                )
            }
        )
    }

}
export default userClass;