fetch("https://httpbin.org/image/jpeg")
.then((response) => {
    console.log("Got the response");
    return response.blob();
})
.then((myblob) => {
    console.log("Got the blob");
    console.log(myblob);
    // var objectURL = URL.createObjectURL(myblob);
    // console.log(objectURL);
    // var myImage = document.createElement("img");
    // myImage.src = objectURL;
    // document.body.appendChild(myImage);
})
.catch((error) => {
    console.log(error);
})