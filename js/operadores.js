let n1, n2, soma, subt, divi, multi

alert(`Vamos fazer Calculos?`)

n1 = Number(prompt("Digite o 1° numero: "));
n2 = Number(prompt("Digite o 2° numero"));

soma = n1 + n2;
subt = n1 - n2;
divi = n1 / n2;
multi = n1 * n2;

alert(`A soma entre ${n1} + ${n2} = ${soma} \n A subtração entre ${n1} - ${n2} = ${subt} \n A divisão entre ${n1} / ${n2} = ${divi} \n A multiplicação entre ${n1} X ${n2} = ${multi}`);