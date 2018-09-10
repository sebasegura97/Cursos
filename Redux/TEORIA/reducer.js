Reducer: modifica el Estado
1. Es una funcion pura.
2. Puede haber mas de un reducer en una app pero solo debe haber un store.
3. Devuelve el siguiente estado.

Que no debe hacer un reducer:
1. Modificar sus argumentos.
2. Realizar tareas con efectos secundarios como llamados a APIs
3. Llamar a funciones no puras como Date.now(), mathRandom().

const reducer = function(
  state,
  Action
){
  // Que hago con el estado y la accion
}
