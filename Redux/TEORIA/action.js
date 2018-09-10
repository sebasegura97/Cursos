Action: Bloque de informacion que envia datos a la app
1. Se envian usando el metodo dispatch() del store.
2. Son la unica fuente de informacion del store.
3. Son objetos planos de JS.

Objetos planos de JS:

{
  type: 'ADD_SONG', //Es obligatorio que el key se llame type, define la accion
  payload: 'Despacito' // Es el dato que se envia, no es necesario que se llame payload
}

Entonces un action seria:

store.dispatch({
  type: 'ADD_SONG',
  payload: 'Despacito',
})
