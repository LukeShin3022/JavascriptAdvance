let maxNum = 0;
let minNum = 100;
let sum = 0;
let cnt = 0;
export class productsClass{
    #id;
    #pName;
    #price;
    constructor(id, pName, price){
        this.#id = id;
        this.#pName = pName;
        this.#price = price;
    }

    get id(){
        return this.#id;
    }

    get pName(){
        return this.#pName;
    }
    
    get price(){
        return this.#price;
    }
    
    maxCalc(callbackFun){
        let price = this.#price;
        
        if (maxNum < price){
            maxNum = price;
        }
        // console.log(maxNum);
        callbackFun(maxNum);
    }
    
    minCalc(callbackFun){
        let price = this.#price;
        if(minNum > price){
            minNum = price;
        }
        callbackFun(minNum);

    }

    avgCalc(callbackFun){
        let price = this.#price;
        sum += price;
        cnt ++;
        callbackFun(sum/cnt);
    }
}