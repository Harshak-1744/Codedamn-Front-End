let jsonData = [];

// Fetch the books data from a local JSON file
fetch('./data.json')
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})
.then(data => {
    jsonData = data.books;  // Save the books data for later use
    console.log("Books loaded:", jsonData);  // Log the loaded books data to the console
})
.catch(error => {
    console.error('Fetching error:', error);
    document.getElementById("dummy").innerHTML = `Error: ${error}`;
});

// Function to search books by title, author, or ID
function searchData() {
    const searchTerm = document.getElementById("searchInput").value.trim();
    console.log("Search term:", searchTerm);

    let results;
    if (isNaN(searchTerm)) {
        // Search by title or author if searchTerm is not a number

        const searchId = parseInt(searchTerm, 10);
        results = jsonData.filter(book =>
            results = jsonData.filter(book => book.id === searchId)||
            book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase())
        );
    } 

    console.log("Search results:", results);  // Log the array of found books
    const container = document.getElementById("dummy");
    // Display the results or a 'not found' message if no results
    container.innerHTML = results.length > 0 ?
        `<pre>${JSON.stringify(results, null, 2)}</pre>` :
        `<pre>No books found matching '${searchTerm}'</pre>`;
}
