function DarkTheme() {
    document.querySelector('body').style.backgroundColor = "#28282B"
}

function LightTheme() {
    document.querySelector('body').style.backgroundColor = "#E8EFCF";
}

function updateImage(src, description) {
    const mainImage = document.querySelector('#mainImage');
    mainImage.src = src;
    document.querySelector('#description').textContent = description;
}
