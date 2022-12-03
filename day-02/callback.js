const names =['jun','take','luke','lucas'];
const cars =['Ford','bmw','Benz'];
const students = [
    {name:'Lucas', mark:80},
    {name:'Luke', mark:88},
    {name:'taka', mark:67},
    {name:'jay', mark:67}

]
const table = document.createElement('table');
const body = document.querySelector('body').appendChild(table);


const tablePoper= (value, idx, array)=>{
    // console.log(value.name);
    const tr = document.createElement("tr");
    const tdname = document.createElement("td");
    const tdmark = document.createElement("td");
    tdname.innerText = value.name;
    tdmark.innerText = value.mark;
    tr.appendChild(tdname);
    tr.appendChild(tdmark);
    table.appendChild(tr);
    // document.
}

const student = (arr,callbackFun) =>{
    callbackFun(arr);    
}

const display = (disValue) =>{
    document.querySelector("h1").innerText = disValue;
}

const simpleSum = (num1, num2, callbackFun) => {
    let result = num1 + num2;
    callbackFun(result);
}

students.forEach(tablePoper);
body.appendChild(table);
