import './App.css';
import React, { Component } from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Listado from './Components/Listado';
import Productos from './Components/Productos';

class App extends Component {
  constructor() {
    super();
    this.state = {
      carrito:[],
      total:0,
      productosLista:[
        {codigo:1,descripcion:"Huawei Matebook D 15", precio:15899},
        {codigo:2,descripcion:"Samsung Galaxy S10", precio:13999},
        {codigo:3,descripcion:"Samsung Galaxy A01", precio:1850},
        {codigo:4,descripcion:"Xiaomi Redmi Note 9s", precio:5949},
        {codigo:5,descripcion:"Mochila Xiaomi", precio:699},
        {codigo:6,descripcion:"Teclado Primus Gaming Ballista", precio:1999},
      ],
    };
  }
  
  
   agregar=(producto)=>{
      
    this.setState({
      carrito:[...this.state.carrito,producto],
      total:this.state.total+producto.precio
    })

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Producto agregado',
      showConfirmButton: false,
      timer: 1500
    })
    
}
 
eliminar=(p,index)=>{
     

  const temporal = this.state.carrito.filter((p,i)=>i!==index)

  this.setState({
   carrito:temporal,
   total:this.state.total-p.precio
 })
}
  
  render() {

    return (
      <div className="App">
        <Header/>
        <div className="Containers">
          
          <Productos
            ProductosLista={this.state.productosLista}
            agregar={this.agregar}
            total={this.state.total}
          />

          <Listado
            lista={this.state.carrito}
            eliminar={this.eliminar}
          />
          
        </div>
      </div>
    )
  }
}

export default App;
