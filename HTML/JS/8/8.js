let jsonData = [];

fetch('./data.json')
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})
.then(data => {
    jsonData = data.books;  
    console.log("Books loaded:", jsonData);  
})
.catch(error => {
    console.error('Fetching error:', error);
    document.getElementById("dummy").innerHTML = `Error: ${error}`;
});


function searchData() {
    const searchTerm = document.getElementById("searchInput").value.trim();
    console.log("Search term:", searchTerm);

    let results;
    if (!isNaN(searchTerm) && searchTerm !== "") {  
        const searchId = parseInt(searchTerm, 10);
        results = jsonData.filter(book => book.id === searchId);
    } else {
        results = jsonData.filter(book =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    console.log("Search results:", results);  
    const container = document.getElementById("dummy");
    container.innerHTML = results.length > 0 ?
        `<pre>${JSON.stringify(results, null, 2)}</pre>` :
        `<pre>No books found matching '${searchTerm}'</pre>`;
}
