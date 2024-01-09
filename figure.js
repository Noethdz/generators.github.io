function createFigure() {

    var figura = parseInt(prompt("¿QUE FIGURA DESEA GENERAR?\n1.-Rombo\n2.-Romboide\n3.-Trapecio\n4.-Trapezoide\n5.-Pentagono\n6.-Hexagono\n7.-Heptagono"));
    if (isNaN(figura) || figura.length < 1 || figura > 7 || figura == 0) {
        alert('El dato ingresado no es un número valido, por favor ingrese un número entre 1 y 7');
    }
    if (figura == 1) {

        const ALTURA_CANVAS = 150,
            ANCHURA_CANVAS = 300;

        const canvas = document.querySelector("#canvas");
        canvas.width = ANCHURA_CANVAS;
        canvas.height = ALTURA_CANVAS;
        const contexto = canvas.getContext("2d");
        contexto.lineWidth = 5;
        contexto.strokeStyle = "#212121";
        contexto.fillStyle = "#C2185B";
        contexto.beginPath();
        contexto.moveTo(55, 5);
        contexto.lineTo(105, 55);
        contexto.lineTo(55, 105);
        contexto.lineTo(5, 55);
        contexto.closePath();
        contexto.stroke();
        contexto.fill();

    }
    if (figura == 2) {
        const ALTURA_CANVAS = 200,
            ANCHURA_CANVAS = 400;

        const canvas = document.querySelector("#canvas");
        canvas.width = ANCHURA_CANVAS;
        canvas.height = ALTURA_CANVAS;
        const contexto = canvas.getContext("2d");
        contexto.lineWidth = 5;
        contexto.strokeStyle = "#212121";
        contexto.fillStyle = "#30A010";
        contexto.beginPath();
        contexto.moveTo(25, 5);
        contexto.lineTo(125, 5);
        contexto.lineTo(105, 80);
        contexto.lineTo(5, 80);
        contexto.closePath();
        contexto.stroke();
        contexto.fill();

    }
    if (figura == 3) {
        const ALTURA_CANVAS = 200,
            ANCHURA_CANVAS = 400;

        const canvas = document.querySelector("#canvas");
        canvas.width = ANCHURA_CANVAS;
        canvas.height = ALTURA_CANVAS;

        const contexto = canvas.getContext("2d");
        contexto.lineWidth = 5;
        contexto.strokeStyle = "#212121";
        contexto.fillStyle = "#0E75EC";
        contexto.beginPath();
        contexto.moveTo(25, 5);
        contexto.lineTo(125, 5);
        contexto.lineTo(125, 80);
        contexto.lineTo(5, 80);
        contexto.closePath();
        contexto.stroke();
        contexto.fill();
    }
    if (figura == 4) {
        const ALTURA_CANVAS = 200,
            ANCHURA_CANVAS = 400;

        const canvas = document.querySelector("#canvas");
        canvas.width = ANCHURA_CANVAS;
        canvas.height = ALTURA_CANVAS;

        const contexto = canvas.getContext("2d");
        contexto.lineWidth = 5;
        contexto.strokeStyle = "#212121";
        contexto.fillStyle = "#D0D4DD";
        contexto.beginPath();
        contexto.moveTo(25, 5);
        contexto.lineTo(115, 25);
        contexto.lineTo(145, 80);
        contexto.lineTo(5, 80);
        contexto.closePath();
        contexto.stroke();
        contexto.fill();
    }
    if (figura == 5) {
        const ALTURA_CANVAS = 200,
            ANCHURA_CANVAS = 400;

        const canvas = document.querySelector("#canvas");
        canvas.width = ANCHURA_CANVAS;
        canvas.height = ALTURA_CANVAS;

        const contexto = canvas.getContext("2d");

        contexto.lineWidth = 5;
        contexto.strokeStyle = "#212121";
        contexto.fillStyle = "#513617";
        contexto.beginPath();
        contexto.moveTo(100, 5);
        contexto.lineTo(145, 38);
        contexto.lineTo(130, 80);
        contexto.lineTo(70, 80);
        contexto.lineTo(55, 38);
        contexto.closePath();
        contexto.stroke();
        contexto.fill();
    }
    if (figura == 6) {
        const ALTURA_CANVAS = 200,
            ANCHURA_CANVAS = 400;
        const canvas = document.querySelector("#canvas");
        canvas.width = ANCHURA_CANVAS;
        canvas.height = ALTURA_CANVAS;

        const contexto = canvas.getContext("2d");
        contexto.lineWidth = 5;
        contexto.strokeStyle = "#212121";
        contexto.fillStyle = "#D4E157";
        contexto.beginPath();
        contexto.moveTo(35, 5);
        contexto.lineTo(95, 5);
        contexto.lineTo(125, 55);
        contexto.lineTo(95, 105);
        contexto.lineTo(35, 105);
        contexto.lineTo(5, 55);
        contexto.closePath();
        contexto.stroke();
        contexto.fill();
    }
    if (figura == 7) {
        const ALTURA_CANVAS = 200,
            ANCHURA_CANVAS = 400;

        const canvas = document.querySelector("#canvas");
        canvas.width = ANCHURA_CANVAS;
        canvas.height = ALTURA_CANVAS;
        const contexto = canvas.getContext("2d");
        contexto.lineWidth = 5;
        contexto.strokeStyle = "#212121";
        contexto.fillStyle = "#AD3032";
        contexto.beginPath();
        contexto.moveTo(35, 5);
        contexto.lineTo(95, 5);
        contexto.lineTo(125, 45);
        contexto.lineTo(115, 95);
        contexto.lineTo(65, 115);
        contexto.lineTo(15, 95);
        contexto.lineTo(5, 45);
        contexto.closePath();
        contexto.stroke();
        contexto.fill();
    }

    function createFigure() {

        var figura = parseInt(prompt("¿QUE FIGURA DESEA GENERAR?\n1.-Rombo\n2.-Romboide\n3.-Trapecio\n4.-Trapezoide\n5.-Pentagono\n6.-Hexagono\n7.-Heptagono"));
        if (isNaN(figura) || figura.length < 1 || figura > 7 || figura == 0) {
            alert('El dato ingresado no es un número valido, por favor ingrese un número entre 1 y 7');
        }
        if (figura == 1) {

            const ALTURA_CANVAS = 150,
                ANCHURA_CANVAS = 300;

            const canvas = document.querySelector("#canvas");
            canvas.width = ANCHURA_CANVAS;
            canvas.height = ALTURA_CANVAS;
            const contexto = canvas.getContext("2d");
            contexto.lineWidth = 5;
            contexto.strokeStyle = "#212121";
            contexto.fillStyle = "#C2185B";
            contexto.beginPath();
            contexto.moveTo(55, 5);
            contexto.lineTo(105, 55);
            contexto.lineTo(55, 105);
            contexto.lineTo(5, 55);
            contexto.closePath();
            contexto.stroke();
            contexto.fill();

        }
        if (figura == 2) {
            const ALTURA_CANVAS = 200,
                ANCHURA_CANVAS = 400;

            const canvas = document.querySelector("#canvas");
            canvas.width = ANCHURA_CANVAS;
            canvas.height = ALTURA_CANVAS;
            const contexto = canvas.getContext("2d");
            contexto.lineWidth = 5;
            contexto.strokeStyle = "#212121";
            contexto.fillStyle = "#30A010";
            contexto.beginPath();
            contexto.moveTo(25, 5);
            contexto.lineTo(125, 5);
            contexto.lineTo(105, 80);
            contexto.lineTo(5, 80);
            contexto.closePath();
            contexto.stroke();
            contexto.fill();

        }
        if (figura == 3) {
            const ALTURA_CANVAS = 200,
                ANCHURA_CANVAS = 400;

            const canvas = document.querySelector("#canvas");
            canvas.width = ANCHURA_CANVAS;
            canvas.height = ALTURA_CANVAS;

            const contexto = canvas.getContext("2d");
            contexto.lineWidth = 5;
            contexto.strokeStyle = "#212121";
            contexto.fillStyle = "#0E75EC";
            contexto.beginPath();
            contexto.moveTo(25, 5);
            contexto.lineTo(125, 5);
            contexto.lineTo(125, 80);
            contexto.lineTo(5, 80);
            contexto.closePath();
            contexto.stroke();
            contexto.fill();
        }
        if (figura == 4) {
            const ALTURA_CANVAS = 200,
                ANCHURA_CANVAS = 400;

            const canvas = document.querySelector("#canvas");
            canvas.width = ANCHURA_CANVAS;
            canvas.height = ALTURA_CANVAS;

            const contexto = canvas.getContext("2d");
            contexto.lineWidth = 5;
            contexto.strokeStyle = "#212121";
            contexto.fillStyle = "#D0D4DD";
            contexto.beginPath();
            contexto.moveTo(25, 5);
            contexto.lineTo(115, 25);
            contexto.lineTo(145, 80);
            contexto.lineTo(5, 80);
            contexto.closePath();
            contexto.stroke();
            contexto.fill();
        }
        if (figura == 5) {
            const ALTURA_CANVAS = 200,
                ANCHURA_CANVAS = 400;

            const canvas = document.querySelector("#canvas");
            canvas.width = ANCHURA_CANVAS;
            canvas.height = ALTURA_CANVAS;

            const contexto = canvas.getContext("2d");

            contexto.lineWidth = 5;
            contexto.strokeStyle = "#212121";
            contexto.fillStyle = "#513617";
            contexto.beginPath();
            contexto.moveTo(100, 5);
            contexto.lineTo(145, 38);
            contexto.lineTo(130, 80);
            contexto.lineTo(70, 80);
            contexto.lineTo(55, 38);
            contexto.closePath();
            contexto.stroke();
            contexto.fill();
        }
        if (figura == 6) {
            const ALTURA_CANVAS = 200,
                ANCHURA_CANVAS = 400;
            const canvas = document.querySelector("#canvas");
            canvas.width = ANCHURA_CANVAS;
            canvas.height = ALTURA_CANVAS;

            const contexto = canvas.getContext("2d");
            contexto.lineWidth = 5;
            contexto.strokeStyle = "#212121";
            contexto.fillStyle = "#D4E157";
            contexto.beginPath();
            contexto.moveTo(35, 5);
            contexto.lineTo(95, 5);
            contexto.lineTo(125, 55);
            contexto.lineTo(95, 105);
            contexto.lineTo(35, 105);
            contexto.lineTo(5, 55);
            contexto.closePath();
            contexto.stroke();
            contexto.fill();
        }
        if (figura == 7) {
            const ALTURA_CANVAS = 200,
                ANCHURA_CANVAS = 400;

            const canvas = document.querySelector("#canvas");
            canvas.width = ANCHURA_CANVAS;
            canvas.height = ALTURA_CANVAS;
            const contexto = canvas.getContext("2d");
            contexto.lineWidth = 5;
            contexto.strokeStyle = "#212121";
            contexto.fillStyle = "#AD3032";
            contexto.beginPath();
            contexto.moveTo(35, 5);
            contexto.lineTo(95, 5);
            contexto.lineTo(125, 45);
            contexto.lineTo(115, 95);
            contexto.lineTo(65, 115);
            contexto.lineTo(15, 95);
            contexto.lineTo(5, 45);
            contexto.closePath();
            contexto.stroke();
            contexto.fill();
        }
    }
}