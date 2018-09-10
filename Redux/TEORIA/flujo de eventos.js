1. Se establece un state inicial con el que se crea originalmente
el store mediante el metodo createStore() de redux.
2. El state inicial define los contenidos que se muestran en la UI
mediante store.getState() y la funcion render()
3. Mediante los elementos de la UI se dispara un evento que se caputra Mediante
un listener y que invoca a store.dispatch()
4. El reducer recibe la accion(type, payload) enviada mediante el store.dispatch()
y genera un nuevo estado que reemplazara al estado inicial o anterior.
5. El cambio de estado es detectado por el store y se ejecuta store.subscribe(handle)
con la funcion handle que manejara lo que sucede cuando se cambia el Estado
6. En la funcion handle recibida por store.subscribe(handle) se invoca
la actualizacion de la UI a partir del nuevo estado creado.
7. Queda establecido el nuevo estado y queda de nuevo atento el listener.
