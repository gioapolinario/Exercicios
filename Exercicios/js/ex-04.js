function CalcularMedia(){
    let nota1 = document.getElementById("nota1").value;
    let nota2 = document.getElementById("nota2").value;
    let nota3 = document.getElementById("nota3").value;
    let nota4 = document.getElementById("nota4").value;

    let media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat
    (nota3) + parseFloat(nota4)) / 4;
    document.getElementById("media").innerText = media;
}