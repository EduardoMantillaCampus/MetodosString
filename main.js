//2. charCodeAt
console.log(`
Metodo --> charCodeAt()

Definicion --> El charCodeAt() método devuelve un número entero entre 0y 65535que representa la unidad de código UTF-16 en el índice dado.

Texto --> Los productos mayor comercializados en colombia son los cosmeticos y productos de cuidado personal

Ejemplo`)
const charCodeAt =
 'Los productos mayor comercializados en colombia son los cosmeticos y productos de cuidado personal'
const index2 = 4
console.log(
 `El codigo de caracter ${charCodeAt.charCodeAt(
  index2
 )} es igual a ${charCodeAt.charAt(index2)}`
)
