async function say_hello(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            reject("Async Hello !");
        }, 2000);
    })
};

async function greetings(){
    console.log("before");
    try{
        wish = await say_hello();
        console.log(wish);
        console.log("after");
        return wish;
    }catch(e){
        console.log("Got Error");
        console.log(e);
    }
}

x = greetings();
