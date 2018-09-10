1. Unica fuente de verdad:
El estado de toda tu aplicacion esta almacenado en un arbol guardado en
un unico store que hace mas facil el proceso de depuracion.
2. Solo lectura:
La unica forma de modificar el estado es emitiendo una accion, un objeto que
describe que ocurrió
3. Los cambios se realizan con funciones puras:
Los reducers son funciones puras que toman el estado anterior y una accion y
devuelven un nuevo estado.
