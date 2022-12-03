let output = "";
const getJson = new Promise((res,rej)=>{
    const xmlReq = new XMLHttpRequest();
    xmlReq.onload = ()=>{
        if(xmlReq.status==200){
            res(xmlReq.response);
        }else{
            rej(xmlReq.statusText);
        }
    }
    // xmlReq.open('GET','./data/products.json');
    xmlReq.open('GET','./data/mydetails.txt');
    xmlReq.send();
}).then(
    (output)=>{document.querySelector('h1').innerText = output;},
    (err)=>{console.log(err)}
)

// const jsonLoad = ()=>{
//     const xmlReq =new XMLHttpRequest();

//     xmlReq.onreadystatechange = ()=>{
//         if(xmlReq.readyState == 4 && xmlReq.status == 200){
//             console.log(xmlReq.responseText);
//             console.log(xmlReq);
//         }
//     }
//     xmlReq.open('GET','./data/mydetails.txt');
//     xmlReq.send();
// }
// jsonLoad();
document.querySelector('h1').innerText = output;