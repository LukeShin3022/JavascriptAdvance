const lucasPromise = new Promise((res,rej) =>{
    let mood = "bad";
    if(mood == "good") res("Lucas coming to the party");
    else{
        rej("Can't come to the party. Have a wonderful coursework to do.");
    }
});

lucasPromise.then(
    (value) =>{
        console.log(value);
    },(rejectReson)=>{
        console.log(rejectReson);
    }
)