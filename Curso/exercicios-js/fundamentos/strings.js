const escola = "Cod3r";

console.log(escola.charAt(4)); // Mostrar a letra 4 da string de 0 a *
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3)); // Número da tabela unicode
console.log(escola.indexOf('3')); // Verificar se existe o valor na string

console.log(escola.substring(1)); // Delimita quando começa a imprimar a variavel
console.log(escola.substring(0, 3)); // Fala: vá do indice 0 até o indice 3 sem incluir os outros indices

console.log('Escola '.concat(escola).concat("!"));
console.log(escola.replace(3, 'e')); // Troca caracteres

console.log('Ana,Maria,Pedro'.split(','));