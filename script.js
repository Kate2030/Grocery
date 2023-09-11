const groceries = document.getElementsByClassName("groceries")[0];
const pencil = document.getElementById("pencil");
const allItems = document.getElementById("allItems");
const userInput = document.getElementById("userInput");

pencil.addEventListener('click', function () {
    allItems.innerHTML = '';
})

userInput.addEventListener('keydown', function (event) {
    if (event.key == "Enter")
        addItem();
})

function addItem() {
    var h3 = document.createElement('h3');
    h3.innerHTML = '- ' + userInput.value;

    h3.addEventListener('click', function () {
        h3.style.textDecoration = 'line-through';
    })

    allItems.insertAdjacentElement('beforeend', h3);

    userInput.value = '';
}