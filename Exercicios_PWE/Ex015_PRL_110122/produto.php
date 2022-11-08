<?php

$Codigo = $_POST["codp"];
$Descricao = $_POST["desc"];
$Valor = $_POST["valor"];

 var Produto = [
    {
        "Codigo":"001",
        "Descricao":"Lapis",
        "Valor":"2.50"
    },

    {
        "Codigo":"002",
        "Descricao":"Caneta",
        "Valor":"3.00"
    },

    {
        "Codigo":"003",
        "Descricao":"Borracha",
        "Valor":"2.00"
    },

    {
        "Codigo":"004",
        "Descricao":"Regua",
        "Valor":"4.00"
    }
 ]


if ($Codigo != '' && $Descricao == '' && $Valor == ''){
    
    $Produto = array(
        'Codigo' => $Produto[Codigo].Codigo,
        'Descricao' => $Produto[Descricao].Descricao,
        'Valor' => $Produto[Valor].Valor
    );

    $RetornoJSON = json_encode($Produto);
    echo $RetornoJSON;
}
?>