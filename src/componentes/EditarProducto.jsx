import React, { Component } from 'react';


// Redux
import {connect} from 'react-redux';
import { mostrarProducto, editarProducto } from '../actions/productosActions';

class EditarProducto extends Component {

     state = { 
          nombre: '',
          precio: '',
          error: false
     }
     componentDidMount() {
         const { id } = this.props.match.params;

         this.props.mostrarProducto(id);
     }
     componentWillReceiveProps(nextProps, nextState){

        const {nombre, precio} = nextProps.producto;

        this.setState({
            nombre,
            precio
        });

     }
     
     nombreProducto = e => {
          this.setState({nombre: e.target.value })
     }

     precioProducto = e => {
          this.setState({precio: e.target.value })
     }

     actualizarProducto = e => {
          e.preventDefault();

          const { nombre, precio } = this.state;
          
          if(nombre === '' || precio === '') {
               this.setState({error: true});
               return;
          } 
          this.setState({error: false});

          // tomar el ID
          const { id } = this.props.match.params;

          // Crear el objeto
          const infoProducto = {
              id,
              nombre,
              precio
          }
        //   console.log(infoProducto);
          // Actualizar el Producto Actual
          this.props.editarProducto(infoProducto);

          // redireccionar
          this.props.history.push('/');
     }

     render() { 
          const {nombre, precio, error} = this.state;
          return ( 
                <div className="row justify-content-center mt-5">
                    <div className="col-md-8">
                         <div className="card">
                         <div className="card-body">
                              <h2 className="text-center">Agregar Nuevo Producto</h2>
                              <form onSubmit={this.actualizarProducto}>
                                   <div className="form-group">
                                        <label>Titulo</label>
                                        <input defaultValue={nombre} onChange={this.nombreProducto} type="text" className="form-control" placeholder="Titulo" />
                                   </div>
                                   <div className="form-group">
                                        <label>Precio del Producto</label>
                                        <input defaultValue={precio}   onChange={this.precioProducto}  type="text" className="form-control" placeholder="Precio" />
                                   </div>
                                   <button type="submit" className="btn editar p-2 font-weight-bold text-uppercase d-block w-100">Guardar Cambios</button>
                              </form>
                              {error ? 
                                   <div className="font-weight-bold alert alert-danger text-center mt-4 ">
                                        Todos los campos son Obligatorios
                                   </div> 
                                   : ''
                              }
                         </div>
                         </div>
                    </div>
               </div>
           );
     }
}
// state
const mapStateToProps = state => ({
    producto: state.productos.producto
})
 
export default connect(mapStateToProps, {mostrarProducto, editarProducto})(EditarProducto);