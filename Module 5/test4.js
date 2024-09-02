form = new FormData(document.getElementById('form'));   
fetch("https://httpbin.org/post", {
    method: "POST",
    body: form
})
.then(response => response.json())
.then(result => {
    console.log('Success:', result);
})
.catch(error => {
    console.error('Error:', error);
});