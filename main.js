//9. Includes()
console.log(`
Metodo --> Includes()

Definicion --> El includes() método realiza una búsqueda que distingue entre mayúsculas y minúsculas para determinar si una cadena se puede encontrar dentro de otra cadena, regresando trueo falsesegún corresponda.

Ejemplo`)
const sentence =
 'Los productos mayor comercializados en colombia son los cosmeticos y productos de cuidado personal'
const word = 'productos'
console.log(
 `La palabra "${word}" ${
  sentence.includes(word) ? 'si se encuentra' : 'no '
 } en la sentencia`
)
