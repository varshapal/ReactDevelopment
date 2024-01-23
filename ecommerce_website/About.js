import { Container, Row, Col } from "react-bootstrap";
import Header from "../Header";

const About = () => {
    return(
        <>
        
        <div>
            <h1>The Generics</h1>
        </div>
        <Container>
            <Row>
                <h2>About</h2>
                <Col md={12}></Col>
            </Row>
        </Container>
        </>
    )
};

export default About;