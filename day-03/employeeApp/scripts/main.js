import userClass from "./userClass.js";
import cookieClass from './cookieClass.js';
const cookieObj = new cookieClass();
const userList = new Map();
const depList = new Map();
const poList = new Map();
let logedUser = null;
if(cookieObj.getCookie('email')!=''){
    document.querySelector('#uname').value = cookieObj.getCookie('email');
}
const refreshFunc = ()=>{
    if(sessionStorage.getItem("userName") != null){
        userList.forEach((userObj)=>{
            if(sessionStorage.getItem("userName") == userObj.email){
                logedUser = new userClass(userObj.firstName,userObj.lastName,userObj.email,userObj.telephone,userObj.address,userObj.dob,userObj.ed,userObj.departmentId,userObj.positionId);
                return false;
            }
        });
        if(logedUser!=null){
            const details = document.querySelector("#details");
            const logoutBtn = document.createElement("button");
            const div = document.createElement("div");
            let arr = logedUser.userInfo();
            logedUser.fillPosition();
            details.style.display = "block";
            document.querySelector("#loginDiv").style.display = "none";
            logoutBtn.id = "logout";
            logoutBtn.innerText = "Logout";
            div.appendChild(logoutBtn);
            div.id = "eminfo";
            arr.forEach(function(val){
                div.appendChild(val);
            })
            details.appendChild(div);
            document.querySelector("#logout").addEventListener('click',()=>{
                logedUser = null;
                if(logedUser == null){
                    document.querySelector("#loginDiv").style.display = "block";
                    details.style.display = "none";
                    details.removeChild(document.querySelector("#eminfo"));
                }
                sessionStorage.removeItem("userName");
            });
        }
    }    
}

fetch('./data/user_info.json').then(
    
    (returnData)=>{
        returnData.json().then(
            (jsonData)=>{
                jsonData.forEach((userObj,idx)=>{
                    userList.set(idx,userObj);
                })
                refreshFunc();
            }
        )
    },
    (reason)=>console.log(reason)
);


    
const loginValid = (userObj,uname,pass)=>{
    if(userObj.email == uname && userObj.password == pass){
        return true;
    }
    return false;
}

const login = ()=>{
    let uname = document.querySelector('#uname').value;
    let pass = document.querySelector('#pass').value;
    userList.forEach((userObj)=>{
        if(loginValid(userObj,uname,pass)){
            logedUser = new userClass(userObj.firstName,userObj.lastName,userObj.email,userObj.telephone,userObj.address,userObj.dob,userObj.ed,userObj.departmentId,userObj.positionId);
            if(document.querySelector("#remember").checked){
                cookieObj.setCookie('email',userObj.email);
            }
            return false;
        }
    });
    if(logedUser!=null){
        const details = document.querySelector("#details");
        const logoutBtn = document.createElement("button");
        const div = document.createElement("div");
        let arr = logedUser.userInfo();
        sessionStorage.setItem("userName",logedUser.userEmail);
        logedUser.fillPosition();
        console.log(logedUser.userEmail);
        details.style.display = "block";
        document.querySelector("#loginDiv").style.display = "none";
        logoutBtn.id = "logout";
        logoutBtn.innerText = "Logout";
        div.appendChild(logoutBtn);
        div.id = "eminfo";
        arr.forEach(function(val){
            div.appendChild(val);
        })
        details.appendChild(div);
        document.querySelector("#logout").addEventListener('click',()=>{
            logedUser = null;
            if(logedUser == null){
                document.querySelector("#loginDiv").style.display = "block";
                details.style.display = "none";
                details.removeChild(document.querySelector("#eminfo"));
            }
            sessionStorage.removeItem("userName");
        });
    }

}

document.querySelector("#login").addEventListener('click',()=>{
    login();
});

refreshFunc();