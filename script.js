// identificar máximo produto de tres números

// Arrays para testar:
// Entrada: [1, 2, 3, 4] -> Saída: 24
// Entrada: [-1, -2, -3, 1] -> Saída: 6
// Entrada: [-4, -3, -2, -1] -> Saída: -6
// Entrada: [-1, 0, 3, 4] -> Saída: 0
// Entrada: [-10, -10, 5, 2] -> Saída: 500
// Entrada: [0, 1000, -1, 500, -300, 700] -> Saída: 350000000
// Entrada: [5, 5, 5, 5] -> Saída: 125

const num = [-4, -3, -3]

function biggestProduct( array ) {
    const lengthArray = array.length

    if (lengthArray >= 3) {
        const ordenada = array.sort((a, b) => b - a)
    
        const lastNum = ordenada[lengthArray - 1]
        
        const biggerNumbers = ordenada.filter((item, index) => index < 3)
    
        const productBiggerNums = biggerNumbers.reduce((a, b) => a * b)
    
        const nextToLastNum = ordenada[lengthArray - 2]
    
        const isNextToLastNumNegative = nextToLastNum < 0
            
        if (isNextToLastNumNegative) {
            const negativesProduct = lastNum * nextToLastNum
            const negativesAndBiggestNumerProduct = negativesProduct * biggerNumbers[0]
    
            return productBiggerNums > negativesAndBiggestNumerProduct ? productBiggerNums : negativesAndBiggestNumerProduct
        }
    
        return productBiggerNums
    } else {
        return 'Array deve conter no mínimo tres números'
    }
}

console.log(biggestProduct(num))