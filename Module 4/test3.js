async function say_hi(){
    return new Promise((resolve, reject) => {
        // resolve after 2 seconds
        setTimeout(() => {
            resolve("Hi");
        }, 2000);
    });
}

console.log("before");
wish = say_hi();
wish.then((v) => console.log(v));

console.log("after");