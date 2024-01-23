import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import classes from './Store.module.css';
import { CartContext } from '../../store/CartContext';
import { useContext } from 'react';
import Header from '../Header';



const Store = (props, {onAddToCart}) => {

    const products = [
        {
          title: "Colors",
          price: 100,
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        },
        {
          title: "Black and white Colors",
          price: 50,
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        },
        {
          title: "Yellow and Black Colors",
          price: 70,
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        },
        {
          title: "Blue Color",
          price: 100,
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        },
      ];
    




    return(
        <>
            
            <div className={classes.store}>
                <h1>The Generics</h1>
            </div>
            
            <div>
                <Container>
                    <h1 className='text-center'>Music</h1>
                    <Row>
                        {products.map((item, index) => (
                            <Col md={6} className='d-flex justify-content-center'>
                                <Card  border='light' style={{width: '18rem'}}>
                                    <Card.Title>{item.Title}</Card.Title>
                                    <img src={item.imageUrl}  alt='flower'/>
                                    <Card.Body>
                                        <Card.Text>Rs. {item.price}</Card.Text>
                                        <Button>Add To Cart</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                        
                    </Row>

                    <div class="container my-md-3">
          <div class="row">
            <div class="col text-center">
              <Button>See the Cart</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
                
            
        </>
    )
};

export default Store;