fetch("https://httpbin.org/get")
.then((response) => {
    return response.text();
})
.then((data) => {
    console.log(data);
})