function res() {

    //calculo feito para a tabuada
    let num = Number(document.querySelector('#n').value);

    document.getElementById('resn.1').value = num * 1;
    document.getElementById('resn.2').value = num * 2;
    document.getElementById('resn.3').value = num * 3;
    document.getElementById('resn.4').value = num * 4;
    document.getElementById('resn.5').value = num * 5;
    document.getElementById('resn.6').value = num * 6;
    document.getElementById('resn.7').value = num * 7;
    document.getElementById('resn.8').value = num * 8;
    document.getElementById('resn.9').value = num * 9;

    //Adição das respostas

    let num1 = Number(document.querySelector('#nu1').value);
    let num2 = Number(document.querySelector('#nu2').value);
    let num3 = Number(document.querySelector('#nu3').value);
    let num4 = Number(document.querySelector('#nu4').value);
    let num5 = Number(document.querySelector('#nu5').value);
    let num6 = Number(document.querySelector('#nu6').value);
    let num7 = Number(document.querySelector('#nu7').value);
    let num8 = Number(document.querySelector('#nu8').value);
    let num9 = Number(document.querySelector('#nu9').value);

    //Fazendo a comparação

    if (num1 == num * 1) {
        document.getElementById("n1").style.color = "green";
    }
    else {
        {
            document.getElementById("n1").style.color = "red";
        }
    }

    if (num2 == num * 2) {
        document.getElementById("n2").style.color = "green";
    }
    else {
        {
            document.getElementById("n2").style.color = "red";
        }
    }

    if (num3 == num * 3) {
        document.getElementById("n3").style.color = "green";
    }
    else {
        {
            document.getElementById("n3").style.color = "red";
        }
    }

    if (num4 == num * 4) {
        document.getElementById("n4").style.color = "green";
    }
    else {
        {
            document.getElementById("n4").style.color = "red";
        }
    }

    if (num5 == num * 5) {
        document.getElementById("n5").style.color = "green";
    }
    else {
        {
            document.getElementById("n5").style.color = "red";
        }
    }

    if (num6 == num * 6) {
        document.getElementById("n6").style.color = "green";
    }
    else {
        {
            document.getElementById("n6").style.color = "red";
        }
    }

    if (num7 == num * 7) {
        document.getElementById("n7").style.color = "green";
    }
    else {
        {
            document.getElementById("n7").style.color = "red";
        }
    }

    if (num8 == num * 8) {
        document.getElementById("n8").style.color = "green";
    }
    else {
        {
            document.getElementById("n8").style.color = "red";
        }
    }

    if (num9 == num * 9) {
        document.getElementById("n9").style.color = "green";
    }
    else {
        {
            document.getElementById("n9").style.color = "red";
        }
    }
}

function apagar() {

    document.getElementById('resn.1').value = null;
    document.getElementById('resn.2').value = null;
    document.getElementById('resn.3').value = null;
    document.getElementById('resn.4').value = null;
    document.getElementById('resn.5').value = null;
    document.getElementById('resn.6').value = null;
    document.getElementById('resn.7').value = null;
    document.getElementById('resn.8').value = null;
    document.getElementById('resn.9').value = null;

}