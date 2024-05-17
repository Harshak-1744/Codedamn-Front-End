fetch('./data.json')
.then((response) => {
    if(!response.ok){
        throw new Error(`${response.status}`)
    }
    return response.json();
})
.then((data) => {
    console.log(data)
    document.getElementById("dummy").innerHTML = `<pre>${JSON.stringify(data,null,2)}</pre>`;
}).catch((error) => {
    console.error(error)
})