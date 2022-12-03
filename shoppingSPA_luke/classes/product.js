class product{
    #pId;
    #pName;
    #price;
    constructor(pid,pname,price){
        this.#pId = pid;
        this.#pName = pname;
        this.#price = price;
    }

    toObject(){
        return {
            pid: this.#pId,
            pname:this.#pName,
            price:this.#price
        }
    }
}
export default product;