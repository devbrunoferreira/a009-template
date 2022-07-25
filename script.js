///////////////////// A009 - STRINGS ////////////////////
///////////////////// A009 - STRINGS ////////////////////

// // Retirando os espaços dentro da String;
// const email = '   bgsf@gmail.com    ';
// console.log(email);
// console.log(email.trim());

// // Upper and Lower Case
// console.log('');
// const fraseJob = 'I wanna work on Google';
// console.log(fraseJob);
// const fraseJobToUpperCase = fraseJob.toUpperCase();
// console.log(fraseJobToUpperCase);
// const fraseJobToLowerCase = fraseJob.toLowerCase();
// console.log(fraseJobToLowerCase);

// // Comprimento de uma variável
// console.log(email.length);
// console.log(fraseJob.length);

// // Quebra de linha
// console.log('Estou gostando muito de estudar \nprogramação com Javascript.');

// // Aspas dentro de aspas
// console.log('\"Eu estou sem ideia do que escrever aqui\"');


// const nome = prompt('Qual é o seu nome?');

// const cor = prompt('Qual é a sua cor favorita?');

// const citacao = prompt('Qual é a sua citação favorita?');

// let mensagem1 = 'A cor favorita de ' + nome + " é   " + cor;

// console.log(mensagem1);

// let mensagem2 = `A cor favorita de ${nome} é ${cor}`;

// console.log(mensagem2);

// mensagem1 = `A cor favorita de ${nome} é ${cor} e a citação favorita é "${citacao}".`;
// console.log(mensagem1);

// mensagem2 = `Nome: ${nome}
// Cor: ${cor}
// Citação: ${citacao}`;
// console.log(mensagem2);

// console.log(`O nome ${nome.toUpperCase()} possui ${nome.length}`);
// console.log(`O nome possui a letra o: ${nome.includes('o')}.`);

const nome = prompt('Qual é o seu nome?');

const email = prompt('Informe o seu email:');
console.log('EXERCÍCIO DE FIXAÇÃO');
console.log('');
console.log(`O e-mail ${email} foi cadastrado com sucesso. Boas vindas, ${nome}!`);
console.log(`O nome ${nome} contém ${nome.length} caracteres!`);
console.log('');

let frase = `O e-mail ${email} foi cadastrado com sucesso. Boas vindas, ${nome}!`;
let novaFrase = frase.replaceAll('r', 'l');
console.log(novaFrase);
console.log(`O e-mail ${email} possui '@'? - ${email.includes('@')}`);