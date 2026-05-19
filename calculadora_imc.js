const readline = require("readline-sync")

console.log("=== CALCULADORA DE IMC ===")

const peso = parseFloat(readline.question("Digite seu peso (kg): "))
const altura = parseFloat(readline.question("Digite sua altura (m): "))

const imc = (peso / (altura ** 2)).toFixed(2)

console.log(`Seu IMC é: ${imc}`)

if (imc < 18.5) {
    console.log("Classificação: Abaixo do peso")
} else if (imc < 25) {
    console.log("Classificação: Peso normal")
} else if (imc < 30) {
    console.log("Classificação: Sobrepeso")
} else if (imc < 35) {
    console.log("Classificação: Obesidade grau 1")
} else if (imc < 40) {
    console.log("Classificação: Obesidade grau 2")
} else {
    console.log("Classificação: Obesidade grau 3")
}