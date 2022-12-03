// import product from "./product.js";

class shoppingCart{
    #cid;
    #shoppingList = new Map();
    #totalPrice;
    constructor(cid){
        this.#cid = cid;
    }
    addProduct(item){
        this.#shoppingList.set(item.pid,item.Total);
    }
    removeProduct(itemId){
        this.#shoppingList.delete(itemId);
    }
    calTotal(){
        let sum = 0;
        this.#shoppingList.forEach((itemTotal,pid)=>{
            sum += itemTotal
        })
    }
}
export default shoppingCart;