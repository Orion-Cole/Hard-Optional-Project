const changeTitle = (newText) => { //click event
    document.getElementById('web-title').textContent = newText;
}

const changeBackground = () => { //key down event
    document.getElementById('searchBar').style.backgroundColor = 'red';
}

const makeGreen = () => { //on key up event
    document.getElementById('searchBar').style.backgroundColor = 'green';
}

document.addEventListener('wheel', (event) => { //Wheel event
    if (event.deltaY < 0) {
        body.style.fontSize = '50%';
    } else {
        body.style.fontSize = '100%';
    }
});
