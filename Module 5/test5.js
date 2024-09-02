formData = new FormData(document.getElementById('form'));

fetch("https://httpbin.org/put", {
    method: "PUT",
    body: formData
})
.then(response => response.json())
.then(result => {
    console.log('Success:', result);
})
.catch(error => {
    console.error('Error:', error);
});