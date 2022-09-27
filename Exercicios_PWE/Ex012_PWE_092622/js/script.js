function Notas(){

    Nome = prompt("Digite seu nome: ");
    Nota1 = parseFloat(prompt("Digite 1 Nota"));
    Nota2 =parseFloat(prompt("Digite 2 Nota"));
    Nota3 = parseFloat(prompt("Digite 3 Nota"));
    
    Média = (Nota1 + Nota2 + Nota3) /3;

    document.write("Seu nome é " + Nome);
    document.write("<br>");
    document.write("Média: "+ Média);
}

function NotasForm(){
    Nome =  FormNotas.Aluno.value;
    Nota1 = parseFloat(FormNotas.Nota1.value);
    Nota2 =  parseFloat(FormNotas.Nota2.value);
    Nota3 = parseFloat(FormNotas.Nota3.value);

    Media = (Nota1 + Nota2 + Nota3) / 3;

    if(Media >=7 )
    {
        alert("Aprovado")
    }
    else
    {
        alert("Reprovado")
    }
}