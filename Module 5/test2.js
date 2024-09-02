fetch("https://httpbin.org/uuid/404")
.then(function(response){
    console.log(response);
    if(!response.ok){
        throw new Error("HTTP error, status = " + response.status);
    }
    return response.json();
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
})