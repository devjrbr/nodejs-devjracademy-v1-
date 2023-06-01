// ERRORS/EXCEPTIONS

// Em JavaScript quando ocorre um error o programa para e imprime uma mensagem.
// Temos um error/exception gerado pelo programa.
// No JS é criado um objeto com dois atributos, sendo eles: name e message.
// Esses erros são considerados abnormais e dependem de ajuste tecnicos para serem ajustados.

// VAMOS VER NA PRÁTICA.

// teste

// Classe abstrata de Error()
// Syntax = throw new Error('Teste');

// ESTRUTURA TRY/CATCH
// try{
//     // error
//     // throw new Error('Deu pau aqui!');
//     const idade = 17;
//     if(idade >= 18){
//         console.log("Você pode entrar na boate!");
//     }else{
//         throw new Error('Você é menor de idade, vai pra casa moleque!');
//     }
// }catch(error){
//     console.log(error);
// }


// ========== CRIAÇÃO ERRO CUSTOMIZADO ================
// class ValidacaoIdadeException extends Error {
//     constructor(message) {
//         super(message);
//         this.name = 'ValidacaoIdadeException';
//     }
// }


// =========== EXEMPLO SEGURAÇA DE BOATE ===========
// try {
//     const idade = 17;
//     if (idade >= 18) {
//         console.log("Você pode entrar na boate!");
//     } else {
//         throw new ValidacaoIdadeException('Você é menor de idade, vai pra casa moleque!');
//     }
// } catch (error) {
//     console.log(error);
//     console.log(error instanceof ValidacaoIdadeException);
// }


// EXEMPLO DE CADASTRO DE PESSOA
// function salvar(pessoa){
//     const banco = [];

//     banco.push(pessoa);

//     return true;
// }

// function salvarBk(pessoa){
//     const banco = [];

//     banco.push(pessoa);

//     return true;
// }

// 
// const pessoa = {
//     nome: 'Luiz',
//     idade: 22
// }

// try {
//     salvar(pessoa);

//     if(salvar){
//         console.log('A Pessoal foi salva!');
//     }else{
//         throw new Error('Pessoa nao foi salva, pois o banco caiu!');
//     } 
// } catch (e) {
//     console.log('O banco caiu pelo motivo: ', e.message);
//     salvarBk(pessoa);
// }

// console.log('Cheguei!');

// const nome = null;
// console.log(nome.length);

// Exceções customizadas
// class MeuErrorException extends Error {
//     constructor(message){
//         super(message);
//         this.name = 'MeuErrorException';
//     }
// }

// try {
//     throw new MeuErrorException('Deu pau denovo!');
// } catch (error) {
//     console.log(error);
// }