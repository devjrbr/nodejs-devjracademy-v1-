// O que são funções
// Estrutura de funções e como funcionam
// Escopo de funções
// Funções anônimas (arrow functions)

const num2 = (num1) => num1 * 2;

function somar(num1, valorRetornadoDaarrowFunction){ // parâmetros
    const valorSomado = num1 + valorRetornadoDaarrowFunction;
    return valorSomado
}

console.log(somar(1, num2(3)));


function removeLuizPorMarcelo(stringGigantesca){
    const betterString = stringGigantesca.replace("LUIZ", "MARCELO");
    const concatatString = betterString + "Token basic";
    return concatatString;
}


const stringGigantesca = "12i3LUIZ4qwiohfasdjhfjisdh923hjfhsdjkgh43hgsdfhguirehiu45htgdfjkbgjidfkbgdfg45uy5re";
const stringMelhorada = removeLuizPorMarcelo(stringGigantesca);

const stringGigantescaV2 = "dLUIZsakojdaslkjdaslkfjaslhfruh895gjkdfsngsd";
const stringMelhoradaV2 = removeLuizPorMarcelo(stringGigantescaV2);

const stringGigantescaV3 = "sajkldhasjkldasdashsdLUIZsdkaljdjklas";



