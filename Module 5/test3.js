data = {"name": "sujan", "city": "kathmandu"};

fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
.then((response) => {
    console.log(response);
    if (!response.ok){
        throw new Error("HTTP error, status = " + response.status);
    }
    return response.json();
})
// .then((response) => {
//     return response.json();
// })
.then((data) => {
    console.log("success:", data);
})
.catch((error) => {
    console.log("error:", error);
})