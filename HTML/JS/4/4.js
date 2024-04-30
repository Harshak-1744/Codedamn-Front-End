//Objective:  Create a basic webpage that changes its theme

function DarkTheme() {
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('#paragraph').style.color = 'white';
}

function LightTheme() {
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('#paragraph').style.color = 'black';
}