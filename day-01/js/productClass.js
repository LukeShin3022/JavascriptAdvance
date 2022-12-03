export class ProductClass{
    #pName;
    #price;
    constructor (pName, price){
        try{
            this.#pName = pName;
            if(price<=0 || typeof price != "number"){
                throw "Price Should be above 0 number!!!";
            }
            this.#price = price;
        }catch(err){
            console.log(err);
            this.#price = 1;
        }
    }
    get pName(){
        return this.#pName;
    }
    set price(newprice){
        this.#price = newprice;
    }
    get price(){
        return this.#price;
    }       
    display(){
        return `Product Name:${this.#pName} \ price: ${this.#price}`;
    }

}