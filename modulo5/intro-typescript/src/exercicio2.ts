 
 
    const cor1 = process.argv[2]
    const cor2 = process.argv[3]
    const cor3 = process.argv[4]

function imprimeTresCoresFavoritas(cor1: string, cor2: string, cor3: string) {
    return `Suas três cores favoritas são: ${cor1}, ${cor2} e ${cor3}`
 }

console.log(imprimeTresCoresFavoritas(cor1, cor2, cor3))