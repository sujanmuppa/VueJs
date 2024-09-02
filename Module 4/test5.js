async function say_hello(){
    console.log("Hello world!!");
}
async function say_hi() {
    // return new Promise((resolve) => {
    //     // resolve after 2 seconds
    //     setTimeout(() => {
    //         console.log("In Hi !!");
    //         resolve("Hi");
    //     }, 0);
    // });
    await say_hello();
    console.log("In Hi !!");
}

async function greetings(){
    console.log("before");
    const wish = await say_hi(); // wish is "Hi" here, not a Promise
    console.log(wish);           // directly log the resolved value
    console.log("after");
}

async function greetings1(){
    console.log("before");
    const wish = await say_hi(); // wish is "Hi" here, not a Promise
    console.log(wish);           // directly log the resolved value
    console.log("after1");
}
greetings();
greetings1();
console.log("End of script");

