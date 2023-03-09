//10. indexOf()
console.log(`
Metodo --> indexOf()

Definicion --> El indexOf() método, dado un argumento: una subcadena para buscar, busca en toda la cadena de llamada y devuelve el índice de la primera aparición de la subcadena especificada. Dado un segundo argumento: un número, el método devuelve la primera aparición de la subcadena especificada en un índice mayor o igual que el número especificado.

Ejemplo`)

const paragraph =
 'Los productos mayor comercializados en colombia son los cosmeticos y productos de cuidado personal'
const searchTerm = 'comercializados'
const indexOfFirst = paragraph.indexOf(searchTerm)
console.log(
 `El índice de la primera "${searchTerm}" desde el principio es ${indexOfFirst}`
)
console.log(
 `El índice de la segunda  "${searchTerm}" es ${paragraph.indexOf(
  searchTerm,
  indexOfFirst + 1
 )}`
)
