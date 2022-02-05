//para criar uma calculadora vamos utilizar alguns metodos nativos do javascript

//Number()- para converter valores em numeros
//Prompt() para registrar entradas de usuario
//alert() para mostrar mensagem ao usuario

//Template Strings para usar strings junto com expressoes

//funcao principal
function calculadora(){
const operacao = prompt("Escolha uma Operacao:\n 1-Soma \n 2-Subtracao \n 3-Multiplicacao \n 4-Divisao \n5-Divisao inteira\n6-Potenciacao");


//verificacao 
if (!operacao || operacao >=7){
    alert("Erro operacao invalida");
    calculadora();
}
else{
let n1 = Number ( prompt("Insira o primeiro valor:") );
let n2 = Number ( prompt("Insira o segundo valor:") );
let resultado;

if(!n1 || !n2){
    alert("Parametros incorretos! Digite numeros.");
    calculadora();
}

function soma(){
  resultado = n1 + n2;
  alert(`${n1} + ${n2} = ${resultado}`);
  novaOperacao();  
}     
function subtracao(){
  resultado = n1 - n2;
  alert(`${n1} - ${n2} = ${resultado}`);
  novaOperacao();  
}     
function multiplicacao(){
  resultado = n1 * n2;
  alert(`${n1} * ${n2} = ${resultado}`);
  novaOperacao();  
}     
function divisaoInteira(){
  resultado = n1 % n2;
  alert(`O resto da divisao de ${n1} % ${n2} é = ${resultado}`);
  novaOperacao();  
}     
function divisao(){
  resultado = n1 / n2;
  alert(`${n1} / ${n2} = ${resultado}`); 
  novaOperacao(); 
}     
function potenciacao(){
  resultado = n1 ** n2;
  alert(`${n1} ** ${n2} = ${resultado}`);
  novaOperacao();  
}     

function novaOperacao(){
    let option = prompt("Deseja realizar outra operacao?:\n 1-Sim \n 2-Não")
    if (option == 1){
        calculadora();
    } 
    else if (option == 2){
        alert("Até mais!");
        window.close();

    }
    else{
        alert("Insira uma opção correta!");
        novaOperacao();
    }
}



switch(Number(operacao))
{
case 1:
    soma();
    break;

case 2:
subtracao();
break;

case 3:
 multiplicacao();
 break;

case 4:
    divisao();
    break;

case 5:
    divisaoInteira();
    break;

case 6:
    potenciacao();
  break;
default :
   alert("insira um valor valido"); 
   break;
}
}
}
calculadora();
