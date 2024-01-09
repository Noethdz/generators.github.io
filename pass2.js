var title = document.getElementById("c2");
var contador = 0;
var clave;
var cl;

function doPassword() {
    tamaño = parseInt(prompt("DE QUE TAMAÑO DESEAS TU CONTRASEÑA?\n (No debe ser mayor a 25 digitos)"));
    if (isNaN(tamaño) || tamaño.length < 1 || tamaño > 25 || tamaño == 0) {
        return 'El dato ingresado no es un número o número valido, es menor a 1 digito o es mayor a 25 digitos';
    } else {
        var letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + 'abcdefghijklmnopqrstuvwxyz0123456789@#$';
        var pass = "";
        for (let index = 0; index < tamaño; index++) {
            var randomIndex = Math.floor(Math.random() * letter.length);
            pass += letter[randomIndex];
        }
    }
    return pass;
}

function doPass() {
    contador += 1;
    title.innerHTML = doPassword();
    clave = title.lastChild.nodeValue;

    if (contador > 0) {
        save(clave);
    }
}

function save(clave) {
    var passwords = [];
    passwords.push(clave);
    return clave;
}