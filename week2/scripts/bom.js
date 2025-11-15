const input = document.querySelector('#favchap');
console.log(input);
const button = document.querySelector('#addbutton');
console.log(button);
const list = document.querySelector('#list');
console.log(list);
const div1 = document.querySelector('div');
console.log(div1);
div1.style.fontWeight = 50;

button.addEventListener('click', function () {
    button.classList.toggle('test');
    /*
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        li.textContent = input.value.trim();
        li.append(deleteButton);
        list.append(li);
    }
        */
});