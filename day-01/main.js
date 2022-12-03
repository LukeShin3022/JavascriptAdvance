import vegiProducts from './js/vegiProducts.js';
import { ProductClass as pc } from './js/productClass.js';
    

    let scores = [95,90,90];
    // const p1 = new ProductClass("Monster", "ttt");
    // const s1 = new StudentClass("Luke","Shin","Korea",scores);
    const orange = new vegiProducts("oranges", 10, 4, "Fruits");
    // const orange = new vp("banana", 10, 5, "1");
    const p1 = new pc("M2", 4);
    // p1.price = 20;
    document.querySelector("h2").innerText = s1.display();
    document.querySelector("h3").innerText = p1.display();
    document.querySelector("h4").innerText = orange.displayP();