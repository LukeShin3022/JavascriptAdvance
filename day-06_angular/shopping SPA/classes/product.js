class product{
    #pid;
    #pname;
    #price;
    constructor(pid,pname,price){
        this.#pid = pid;
        this.#pname = pname;
        this.#price = price;
    }
    toObject(){
        return{
            pid: this.#pid,
            pname: this.#pname,
            price: this.#price
        }
    }
}
export default product;