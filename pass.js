var el_down = document.getElementById("c1");

function generateP() {
    var pass = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz0123456789@#$';

    for (let i = 1; i <= 10; i++) {
        var char = Math.floor(Math.random() *
            str.length + 1);
        pass += str.charAt(char)
    }
    return pass;
}

function gfg_Run() {
    el_down.innerHTML = generateP();
}