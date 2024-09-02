function say_hi() {
    return new Promise((resolve,reject) => {
        // resolve after 2 seconds
        setTimeout(() => {
            reject("rejected");
        }, 2000);
    });
}

console.log("before");
const wish = say_hi().then((v) => {
    console.log(v);
    return "resolved";
}).catch((v) => {
    console.log(v);
    return "rejected";
})
console.log(wish);
console.log("after");
console.log("End of script");