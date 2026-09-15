function lat_mod_date() {
    let date = new Date();
    let full_year = date.getFullYear();
    const pspan = document.querySelector("#cyear");
    pspan.innerHTML = `${full_year}`;

    document.querySelector("#lastModified").innerHTML = `Last modified: ${document.lastModified}`;
}