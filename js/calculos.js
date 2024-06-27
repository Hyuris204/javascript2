
let n1, n2, resultado, opcao, escolha;


opcao = prompt(`Escolha a sua operação [+, -, *, /]`);

n1 = Number(prompt("Digite o 1° numero"));
n2 = Number(prompt("Digite o 2° numero"));

if(opcao === `+`){
   resultado = n1 + n2;
   escolha = `SOMA`;

}

if(opcao === `-`){
    resultado = n1 - n2;
    escolha = `SUBTRAÇÃO`;
    
 }

 if(opcao === `*`){
    resultado = n1 * n2;
    escolha = `MULTIPLICAÇÃO`;
    
 }

 if(opcao === `/`){
    resultado = n1 / n2;
    escolha = `DIVISÃO`;
    
 }

 alert(`A ${escolha} entre ${n1} ${opcao} ${n2} = ${resultado}`);