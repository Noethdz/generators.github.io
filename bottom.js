function createBtn() {

    newBoton = document.createElement('button');
    contenidoBoton = document.createTextNode("New");
    newBoton.appendChild(contenidoBoton);
    newBoton.style.width = "100px";
    newBoton.style.fontSize = "50%";

    let ubicarElemeto = document.getElementById("botones");
    document.body.insertBefore(newBoton, ubicarElemeto);

}