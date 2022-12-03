import { ProductClass } from "./productClass.js";

class vegiProducts extends ProductClass{
    #amount;
    #pCat;
    constructor(pName, price, amount, pCat){
        super(pName,price);
        this.#amount=amount;
        this.#pCat=pCat;
    }
    #total(){
        return this.price * this.#amount;
    }
    displayP(){
        return this.display() + `\ amount: ${this.#amount} \ total: ${this.#total()}`;
    }
}

export default vegiProducts;