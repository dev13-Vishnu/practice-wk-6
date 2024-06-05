function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("successfull");
        }, 1000);
    });
}


fetchData()
.then((userData) => {
    console.log("User data :",userData);
}).catch((err) => {
    console.error("Error fetching data:",err);
});