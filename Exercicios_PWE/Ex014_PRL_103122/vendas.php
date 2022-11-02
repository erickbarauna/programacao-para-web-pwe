<?php

$nome = $_POST["nome"];
$nasc = $_POST["nasc"];
$gen = $_POST["gen"];
$prod = $_POST["prod"];
$valor = $_POST["valor"];

if ($gen == "F") 
{
    $valor -= $valor * 0.1;
} 

echo 'Valor Final = ' . $valor;