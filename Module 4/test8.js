async function say_hello(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            reject("Async Hello !");
        }, 2000);
    })
};

async function greetings(){
    console.log("before");
    wish = await say_hello();
    console.log(wish);
    console.log("after");
    return wish;
}

x = greetings();

x.then((v) => {
    console.log("Success");
    console.log(v);
}).catch((e) =>{
    console.log("Error");
    console.log(e);
})