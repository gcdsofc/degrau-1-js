const readline = require("readline-sync")

console.log("=== VERIFICADOR DE CPF ===")
const cpf = readline.question("Digite um CPF (somente números): ")

if (cpf.length !== 11 || !/^\d+$/.test(cpf)) {
    console.log("CPF inválido! O CPF deve conter exatamente 11 dígitos numéricos.")
} else if (cpf === cpf[0].repeat(11)) {
    console.log("CPF inválido! CPF com todos os dígitos iguais não é válido.")
} else {
    console.log("CPF válido!")
}