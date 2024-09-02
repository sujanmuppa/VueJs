async function say_hello(){
    return "Hello"
}

console.log("before");
wish = say_hello();
console.log(wish);
// wish.then((v)=> console.log(v));
console.log("after");