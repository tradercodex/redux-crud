import { MOSTRAR_PRODUCTOS, ELIMINAR_PRODUCTO, AGREGAR_PRODUCTO, MOSTRAR_PRODUCTO, EDITAR_PRODUCTO } from './types';

import axios from 'axios';

export const mostrarProductos = () => async dispatch => {
     const respuesta = await axios.get('http://localhost:5000/productos');
     dispatch({
          type: MOSTRAR_PRODUCTOS,
          payload: respuesta.data
     })
}
export const mostrarProducto = id => async dispatch => {
     const respuesta = await axios.get(`http://localhost:5000/productos/${id}`);
     dispatch({
          type: MOSTRAR_PRODUCTO,
          payload: respuesta.data
     })
}

export const borrarProducto = id => async dispatch => {
     await axios.delete(`http://localhost:5000/productos/${id}`);
     dispatch({
          type: ELIMINAR_PRODUCTO,
          payload: id
     })
}

export const agregarProducto = producto => async dispatch => {
     const respuesta = await axios.post('http://localhost:5000/productos', producto);
     dispatch({
          type: AGREGAR_PRODUCTO,
          payload: respuesta.data
     })
}

export const editarProducto = producto => async dispatch => {
     const respuesta = await axios.put(`http://localhost:5000/productos/${producto.id}`, producto);
     dispatch({
          type: EDITAR_PRODUCTO,
          payload: respuesta.data
     })
}