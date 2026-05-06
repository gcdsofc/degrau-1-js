const readline = require("readline-sync")

console.log("=== CALCULADORA ===")
console.log("1 - Somar")
console.log("2 - Subtrair")
console.log("3 - Multiplicar")
console.log("4 - Dividir")

const opcao = parseInt(readline.question("Escolha uma opção: "))

const numero1 = parseFloat(readline.question("Digite o primeiro número: "))
const numero2 = parseFloat(readline.question("Digite o segundo número: "))

if (opcao === 1) {
    const resultado = numero1 + numero2
    console.log(`Resultado: ${resultado}`)
} else if (opcao === 2) {
    const resultado = numero1 - numero2
    console.log(`Resultado: ${resultado}`)
} else if (opcao === 3) {
    const resultado = numero1 * numero2
    console.log(`Resultado: ${resultado}`)
} else if (opcao === 4) {
    if (numero2 === 0) {
        console.log("Erro: não é possível dividir por zero!")
    } else {
        const resultado = numero1 / numero2
        console.log(`Resultado: ${resultado}`)
    }
} else {
    console.log("Opção inválida!")
}