fetch('./data.json')
.then((response) => {
    if (!response.ok) {
        throw new Error(`${response.status}`);
    }
    return response.json();
})
.then((data) => {
    const container = document.getElementById("dummy");
    container.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;  
}).catch((error) => {
    document.getElementById("dummy").innerHTML = `Error: ${error}`;
});
