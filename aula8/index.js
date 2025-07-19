/* 
    Kaio  Jesus tem 22 anos, pesa 78 kg
    tem 1.83 de altura e seu IMC é de 2..
    Kaio Pereira nasceu em 2003

*/

const nome = 'Kaio';
const sobrenome = 'Jesus';
const idade = 22;
const peso = 78;
const alturaEmM = 1.83;
let imc;
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2025 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);

