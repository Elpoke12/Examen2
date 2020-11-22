import '../App.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Listado = (props) => {
    return ( 
        <div className="List">
          <h1>Mi Carrito</h1>
        {
                    
            props.lista.length===0   
            ? <p>No hay productos</p>
            : 
        
             <Table striped bordered hover>
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Precio</th>

              </tr>
            </thead>
              <tbody>
            {
              props.lista.map((p,index)=>
                <tr key={index}>
                    <td>{p.codigo}</td>
                    <td>{p.descripcion}</td>
                    <td>${(p.precio).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                    <td><Button onClick={()=>props.eliminar(p,index)}variant="danger">eliminar</Button></td>
                    
                </tr>
              )
            }
              </tbody>
            </Table>
          }

          </div>
     );
}
 
export default Listado;