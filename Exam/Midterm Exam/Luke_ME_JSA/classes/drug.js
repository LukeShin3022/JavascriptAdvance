class drug{
    #did;
    #dname;
    #productof;
    #price
    constructor(did,dname,pdof,price){
        this.#did = did;
        this.#dname = dname;
        this.#productof = pdof;
        this.#price = price;
    }
    toObject(){
        return{
            did: this.#did,
            dname: this.#dname,
            pdof: this.#productof,
            price: this.#price
        }
    }
}
export default drug;