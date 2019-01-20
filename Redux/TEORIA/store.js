Store: Es el centro de la verdad de todo, con metodos para
actualizar, obtener y escuchar datos.
  1. Contiene el estado de la aplicacion
  2. Puedes acceder al estado con el metodo getState()
  3. Puedes actualizar el estado con el metodo dispatch(action)
  4. Escucha cambios con el metodo subscribe(listener)
  5. Dejar de escuchar cambios retornando la funcion del metodo suscribe(listener)

import { createStore } from 'redux'

Como se compone un store:

1. Reducer: funcion pura que retorna el proximo estado.
2. PreloadState / InitialState: Estado inicial de la app, primera carga,
llamado al api. Puuede ser cualquier tipo de dato.
3. Enhancer: funcion que puede extender redux con capacidades añadidas
por librerias externas. Es un parametro opcional.

const store = createStore(
  reducer,
  initialState,
  enhancer,
)
