let myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

const myRequest = new Request("https://httpbin.org/post", {
    method: 'POST',  // Use uppercase for method
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
});

fetch(myRequest)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
