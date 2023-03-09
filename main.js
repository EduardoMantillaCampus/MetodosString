//3. codePointAt
console.log(`
Metodo --> codePointAt()

Definicion -->  El codePointAt() método devuelve un entero no negativo que es el valor del punto de código Unicode en la posición dada. Tenga en cuenta que esta función no proporciona el punto de código n en una cadena, sino el punto de código que comienza en el índice de cadena especificado.

Ejemplo`)
const icons = '☃★♲'
console.log(icons.codePointAt(1))
