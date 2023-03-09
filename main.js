console.log(`
Metodo --> normalize()

Definicion -->  El método normalize() devuelve la forma de normalización Unicode de la cadena.

Ejemplo`)

let cadena =
 'Los productos mayor comercializados en colombia son los cosmeticos y productos de cuidado personal'
console.log(cadena.normalize('NFKD'))
