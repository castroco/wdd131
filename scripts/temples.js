function load_info() {
    let today = new Date();
    let js_year = today.getFullYear();
    const year = document.querySelector("#year");
    year.innerHTML = `${js_year}`;
    document.querySelector("#modified").innerHTML = `Last modified: ${document.lastModified}`;


    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });

}