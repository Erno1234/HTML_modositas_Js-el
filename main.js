window.addEventListener("load",init)
function init(){
    document.getElementById("tartalom").innerHTML = '<p>Javascriptből írok ide.</p>';
kedvencszavak()
}
function kedvencszavak(){
    const szavak = ["Egy", "Kettő", "Nulltíz", "Alma"]
    document.getElementById("tartalom").innerHTML = "<ul>";
    for(let index = 0; index< szavak.length; index++){
        //document.getElementById("tartalom").innerHTML += "<p>" + szavak[index]+ "</p>";

        document.getElementById("tartalom").innerHTML += (`<li> ${szavak[index]} </li>`);
    }
    document.getElementById("tartalom").innerHTML += "</ul>";
}
