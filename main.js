function calcular() {
    var nome = document.getElementById("nome").value;
    var result = document.getElementById("result");
    var notaPrimeiroBimestre = parseFloat(
        document.getElementById("notaPrimeiroBimestre").value
    );
    var notaSegundoBimestre = parseFloat(
        document.getElementById("notaSegundoBimestre").value
    );
    var notaTerceiroBimestre = parseFloat(
        document.getElementById("notaTerceiroBimestre").value
    );
    var notaQuartoBimestre = parseFloat(
        document.getElementById("notaQuartoBimestre").value
    );

    var notaFinal =
        (notaPrimeiroBimestre +
            notaSegundoBimestre +
            notaTerceiroBimestre +
            notaQuartoBimestre) /
        4;

    var notaFixada = notaFinal.toFixed(1);


    if (notaFixada >= 6) {
        result.innerHTML = "Resultado: Parabéns, " + nome + ",<br> você foi aprovada! <br>O resultado foi " + notaFixada + ". ✨";
    }
    else result.innerHTML = "Resultado: Que pena, " + nome + ", <br>você foi reprovada! <br>O resultado foi " + notaFixada + ". 💔";

    document.getElementById("form").addEventListener("click", function (event) {
        event.preventDefault();
    });

    //Revisando: variáveis recebem valor, strings, console.log, toFixed, operações, concatenação
}
