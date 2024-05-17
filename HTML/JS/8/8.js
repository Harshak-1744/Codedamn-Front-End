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
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    console.log("Search term:", searchTerm); 

    
    const results = jsonData.filter(book =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) 
    );

    const resultIds = results.map(book => book.id);

    console.log("Search results:", results.id);  
    const container = document.getElementById("dummy");
    container.innerHTML = `<pre>${JSON.stringify(results, null, 2)}</pre>`;
}


