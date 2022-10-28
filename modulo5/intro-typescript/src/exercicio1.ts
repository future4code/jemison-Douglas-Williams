
const a = process.argv[2]
const b = process.argv[3]
const c = process.argv[4]


function checaTriangulo(a: Number, b: Number, c: Number) {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }


console.log(checaTriangulo(1, 2, 3));
console.log(checaTriangulo(1, 1, 1));
console.log(checaTriangulo(2, 2, 3));

