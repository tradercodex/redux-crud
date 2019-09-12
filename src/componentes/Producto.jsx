import React, { Component } from 'react';


import { Link } from 'react-router-dom';

// Redux
import {connect} from 'react-redux';
import { borrarProducto } from '../actions/productosActions';

class Producto extends Component {
     
     eliminarProducto = () => {
          const {id} = this.props.info;

          this.props.borrarProducto(id);
     }

     render() { 
          const { id, nombre, precio} = this.props.info;
          return ( 
               <li className="list-group-item">
                    <div className="row justify-content-between align-items-center">
                         <div className="col-md-8 d-flex justify-content-between align-items-center">
                              <p className="m-0">
                                   {nombre}
                              </p>
                              
                              <span className="badge precio text-dark">$ {precio}</span>
                         </div>
                         <div className="col-md-4 d-flex justify-content-end acciones">
                              <Link to={`productos/editar/${id}`} className="btn editar mr-2">Editar</Link>
                              <button onClick={this.eliminarProducto} type="button" className="btn eliminar">Borrar</button>
                         </div>
                    </div>
               </li>
           );
     }
}
 
export default connect(null, {borrarProducto})(Producto);