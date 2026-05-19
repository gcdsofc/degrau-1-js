const readline = require("readline-sync")

console.log("=== JOGO DE ADIVINHAR O NÚMERO ===")
console.log("Estou pensando em um número entre 1 e 100...")

const numeroSecreto = Math.floor(Math.random() * 100) + 1
let tentativas = 0

while (true) {
    const chute = parseInt(readline.question("Digite seu chute: "))
    tentativas++

    if (chute < numeroSecreto) {
        console.log("Muito baixo! Tente um número maior.")
    } else if (chute > numeroSecreto) {
        console.log("Muito alto! Tente um número menor.")
    } else {
        console.log(`Parabéns! Você acertou em ${tentativas} tentativas!`)
        break
    }
}