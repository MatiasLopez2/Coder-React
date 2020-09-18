import React, {useState, useEffect} from 'react';
import {Card, Button } from 'react-bootstrap';


function Products({products}) {

    const [contador, setContador] = useState(0);
    const [moment, setMoment] = useState('');
  
    useEffect(() => {
      var moment = Date();
      setMoment(moment)
    }, [contador]);
  
       const handleClickUp = () => {
           if(contador<10){
               setContador(contador+1)
           }
     }

     const handleClickDown = () => {
        if(contador>0){
            setContador(contador-1)
        }
       }

    console.log("estoy en Products con", products)

    return(
        <div>
            <div>
                {products ?
                    products.map(product =>

                        <div key={product.id}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={product.img} />
                            <Card.Body>
                            <Card.Title>{product.nombre}</Card.Title>
                            <Card.Text>
                                {/* Some quick example text to build on the card title and make up the bulk of
                                the card's content. */}
                                {product.precio}
                            </Card.Text>
                            <button onClick={handleClickDown} type="submit" className="btn btn-primary button-card">-</button>
                            <input id="input-card" onChange={handleClickUp,handleClickDown} value={contador}/>
                            <button onClick={handleClickUp} type="submit" className="btn btn-primary button-card">+</button>
                            <Button variant="primary">Comprar</Button>
                            </Card.Body>
                            </Card>  
                         </div>
                    )
                    :
                    <div> No hay productos </div>
                }
            </div>
        </div>
    )
}

export default Products