function btn() {
    var resultadoFinal = document.querySelector("#resultado");
    var frase = document.querySelector("#frase").textContent;

    tamanho = frase.length;

    var resultado = "";

    for (var i = 0; i < tamanho; i++)
        resultado += ("<br>Caractere na posição " + i + " : " + frase.charAt(i));
    
    resultadoFinal.innerHTML = resultado;
}