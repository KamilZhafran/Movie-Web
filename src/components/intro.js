import {Col, Container, Row, Button} from "react-bootstrap";

const Intro = () => {
    return(
        <div className='intro'>
        <Container className='text-white text-center d-flex justify-content-center align-items-center'>
            <Row>
              <Col>
                <div className='title'>Nonton Gacor</div>
                <div className='title'>Bersama Naili</div>
                <div className="IntroButton mt-4 text-center">
                    <Button href="#trending">List Movie</Button>
                </div>
              </Col>
            </Row>
        </Container>
    </div>
    )
}

export default Intro