function say_hi() {
    return new Promise((resolve) => {
        // resolve after 2 seconds
        setTimeout(() => {
            resolve("Hi");
        }, 2000);
    });
}

console.log("before");
const wish = await say_hi();
wish.then((v) => console.log(v));   
// say_hi().then((v) => console.log(v));
console.log("after");
