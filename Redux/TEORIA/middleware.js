Cada middleware recibe dispatch y el getState del store como argumentos, y
regresa una funcion. Esa funcion va a recibir el metodo para despacha el
siguiente middleware, y se espera que devuelva una funcion que recibe
action y llame a next(action)

EJEMPLO:

function logger({getState, dispatch}){
  return (next) => {
    return (action) => {
      return next(action)
    }
  }
}
