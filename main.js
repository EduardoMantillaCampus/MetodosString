console.log(`
Metodo --> matchAll()

Definicion -->  El método matchAll() retorna un iterador de todos los resultados de ocurrencia en una cadena de texto contra una expresión regular, incluyendo grupos de captura.

Ejemplo`)

const regexp = /t(e)(st(\d?))/g
const str = 'test1test2'

const array = [...str.matchAll(regexp)]
console.log(array[0])
