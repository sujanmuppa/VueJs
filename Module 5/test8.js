async function fetchUUID() {
    const response = await fetch("https://httpbin.org/uuid");
    const data = await response.json();
    // const data = response.json();
    console.log(data);
}

fetchUUID();
