function get_data() {
    let date = new Date();
    let full_year = date.getFullYear();
    const year_span = document.querySelector("#currentyear");
    let year = `${full_year}`;
    year_span.innerHTML = year;

    document.querySelector("#lastModified").innerHTML = `Last modified: ${document.lastModified}`;
}

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});