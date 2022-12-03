class shoppingCart{
    #cid;
    #shoppingList = new Map();
    #totalPrice;
    constructor(cid){
        this.#cid = cid;
    }
    addProduct(item){
        this.#shoppingList.set(item.pid,item.obj);
    }
    removeProduct(itemId) {
        this.#shoppingList.delete(itemId);
    }
    searchProduct(pid){
        return this.#shoppingList.has(pid);
    }
    getProduct(pid){
        return this.#shoppingList.get(pid);
    }
    calTotal(){
        let sum = 0;
        for(const product of this.returnValues()){
            sum += product.price * product.amount;
        }
        return sum;
    }
    returnValues(){
        return this.#shoppingList.values();
    }
}
export default shoppingCart;