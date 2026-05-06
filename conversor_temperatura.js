    const readline = require("readline-sync")

    console.log("=== CONVERSOR DE TEMPERATURA ===")
    console.log("1 - Celsius para Fahrenheit")
    console.log("2 - Fahrenheit para Celsius")
    console.log("3 - Celsius para Kelvin")
    console.log("4 - Kelvin para Fahrenheit")
    console.log("5 - Sair")

    while (true) {
        const opcao = parseInt(readline.question("Escolha uma opção: "))
        if (opcao === 1) {
            const celsius = parseFloat(readline.question("Digite a temperatura em Celsius: "))
            const fahrenheit = (celsius * 9/5) + 32
            console.log(`Temperatura em Fahrenheit: ${fahrenheit.toFixed(2)}`)
            
        }
        else if (opcao === 2) {
            const fahrenheit = parseFloat(readline.question("Digite a temperatura em Fahrenheit: "))
            const celsius = (fahrenheit - 32) * 5/9
            console.log(`Temperatura em Celsius: ${celsius.toFixed(2)}`)
            
        } 
        else if (opcao === 3) {
            const celsius = parseFloat(readline.question("Digite a temperatura em Celsius: "))
            const kelvin = celsius + 273.15
            console.log(`Temperatura em Kelvin: ${kelvin.toFixed(2)}`)
            
        }
        else if (opcao === 4) {
            const kelvin = parseFloat(readline.question("Digite a temperatura em Kelvin: "))
            const fahrenheit = (kelvin - 273.15) * 9/5 + 32
            console.log(`Temperatura em Fahrenheit: ${fahrenheit.toFixed(2)}`)
            
        }
        else if (opcao === 5) {
                console.log("Saindo...")
                break
            } 
        else {
            console.log("Opção inválida!")
        }
    }


