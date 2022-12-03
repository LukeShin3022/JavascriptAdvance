import { productsClass } from "./js/productClass.js";

const tablePoper = (value)=>{
    // console.log(value.id);
    const tbody = document.querySelector('table tbody');
    const tr = document.createElement("tr");
    const tdid = document.createElement("td");
    const tdpname = document.createElement("td");
    const tdprice = document.createElement("td");
    tdid.innerText = value.id;
    tdpname.innerText = value.item_name;
    tdprice.innerText = value.price;
    tr.append(tdid);
    tr.appendChild(tdpname);
    tr.appendChild(tdprice);
    tbody.appendChild(tr);

    const product = new productsClass(value.id, value.item_name, value.price);
    product.maxCalc(displayMax);
    // console.log(maxNum);
    product.minCalc(displayMin);
    product.avgCalc(displayAvg);
}

const displayMax= (disValue) =>{
    const h1 = document.querySelectorAll("h1");
    console.log(disValue);
    h1[0].innerText = "Max Price : "+disValue;
}
const displayMin= (disValue) =>{
    const h1 = document.querySelectorAll("h1");
    h1[1].innerText = "Min Price: "+disValue;
}
const displayAvg= (disValue) =>{
    const h1 = document.querySelectorAll("h1");
    h1[2].innerText = "Average: " + disValue.toFixed(2);
}


let asyncJson = async()=>{
    const loadJson = new Promise((res)=>{
        let xmlReq = new XMLHttpRequest();
        xmlReq.onload = ()=>{
            if(xmlReq.status==200)
            res(xmlReq.response);
        }
        xmlReq.open('GET','./data/products.json');
        xmlReq.send();
    });
    
    const jsonData = JSON.parse(await loadJson);
    jsonData.forEach(tablePoper);
    
    
};


asyncJson();

// maxminCalc();