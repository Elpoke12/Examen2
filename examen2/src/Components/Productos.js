import React from 'react'
import '../App.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Productos (props) {

        return (
            <div className="Products">
                <h1>Productos</h1>
                <Table striped bordered hover>
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th></th> 
              </tr>
            </thead>
              <tbody>
            {
              props.ProductosLista.map((p,index)=>
                <tr key={index}>
                    <td>{p.codigo}</td>
                    <td>{p.descripcion}</td>
                    <td>${(p.precio).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>

                    <td><Button onClick={()=>props.agregar(p)}variant="success">Agregar</Button></td>
   
                </tr>
              )
            }
              </tbody>
            </Table>

              <h4>Total:${(props.total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</h4>
            </div>
        )

}
