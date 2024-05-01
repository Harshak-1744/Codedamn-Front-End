function updateImage(src, description) {
    const mainImage = document.querySelector('#mainImage');
    mainImage.src = src;
    document.querySelector('#description').textContent = description;
}