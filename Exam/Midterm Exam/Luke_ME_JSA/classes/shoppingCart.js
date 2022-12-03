class shoppingCart{
    #uid;
    #shoppingList = new Map();
    #totalPrice;
    constructor(uid){
        this.#uid = uid;
    }
    addProduct(item){
        this.#shoppingList.set(item.did,item.obj);
    }
    removeProduct(itemId) {
        this.#shoppingList.delete(itemId);
    }
    searchProduct(did){
        return this.#shoppingList.has(did);
    }
    getProduct(did){
        return this.#shoppingList.get(did);
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