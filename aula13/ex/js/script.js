const nome = window.prompt('Digite o seu nome completo.');

document.body.innerHTML = `O seu nome é: <strong> ${nome} </strong> <br>`

document.body.innerHTML += `Quantidade de letras em seu nome completo: <strong> ${nome.length} </strong> <br>`

document.body.innerHTML += `A segunda letra do seu nome é: <strong> ${nome[1]} </strong> <br>`;

document.body.innerHTML += `Qual é o primeiro índice da letra "e" no seu nome é: <strong> ${nome.indexOf('e')} </strong> <br>`;

document.body.innerHTML += `Qual é o último índice da letra 'e' no seu nome: <strong> ${nome.lastIndexOf('e')} </strong> <br>`

document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong> ${nome.slice(-3)} </strong> <br>`;

document.body.innerHTML += `As palavras do seu nome são: <strong> ${nome.split(' ')} </strong> <br>`;

document.body.innerHTML += `Seu nome em letras maiúsculas: <strong> ${nome.toUpperCase()} </strong>  <br>`;

document.body.innerHTML += `Seu nome em minúsculas: <strong> ${nome.toLowerCase()} </strong> <br>`;