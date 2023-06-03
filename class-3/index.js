// Exemplo de condicionais em Node.js

// Exemplo de condicional 'if'
const idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}

// Exemplo de condicional 'if...else if...else'
const nota = 7;

if (nota >= 9) {
  console.log("Você tirou uma nota excelente!");
} else if (nota >= 7) {
  console.log("Você foi aprovado!");
} else if (nota >= 5) {
  console.log("Você está em recuperação.");
} else {
  console.log("Você foi reprovado.");
}

// Exemplo de condicional 'switch'
const diaSemana = 1;
let nomeDia;

switch (diaSemana) {
  case 1:
    nomeDia = "Domingo";
    break;
  case 2:
    nomeDia = "Segunda-feira";
    break;
  case 3:
    nomeDia = "Terça-feira";
    break;
  case 4:
    nomeDia = "Quarta-feira";
    break;
  case 5:
    nomeDia = "Quinta-feira";
    break;
  case 6:
    nomeDia = "Sexta-feira";
    break;
  case 7:
    nomeDia = "Sábado";
    break;
  default:
    nomeDia = "Dia inválido";
}

console.log(`Hoje é ${nomeDia}.`);

// Exemplo de operador ternário
const numero = 10;
const resultado = numero % 2 === 0 ? "par" : "ímpar";

console.log(`O número é ${resultado}.`);

// Exemplo de operador lógico &&
const nome = "João";
const idadeUsuario = 25;

if (nome && idadeUsuario) {
  console.log(`Olá, ${nome}! Você tem ${idadeUsuario} anos.`);
} else {
  console.log("Não foi possível identificar o usuário.");
}


