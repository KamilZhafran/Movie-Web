import { Card, Container, Row, Col, Image } from "react-bootstrap"
import AvengersImage from "../assets/images/superhero/Avengers.jpeg";
import IronmanImage from "../assets/images/superhero/ironman.jpg";
import SpidermanImage from "../assets/images/superhero/Spiderman.jpg";
import GuardianImage from "../assets/images/superhero/Guardian.jpg";

const SuperHero = () => {
    return (
      <div>
        <Container>
          <br />
          <h1 className="text-white">SUPERHERO MOVIES</h1>
          <br />
          <Row>
            <Col md={4} className="movieWrapper" id="superhero">
              <Card className="movieImage">
                <Image src={AvengersImage} alt="Avengers Movies" className="images" />
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">Avengers</Card.Title>
                    <Card.Text className="text-left">
                      I LOVE YOU NAILI IKRIMAH M. YANIS!
                    </Card.Text>
                    <Card.Text className="text-left">
                      Last updated 5 mins ago
                    </Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={4} className="movieWrapper">
              <Card className="movieImage">
                <Image src={IronmanImage} alt="Iron Man Movies" className="images" />
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">Iron Man</Card.Title>
                    <Card.Text className="text-left">
                        I LOVE YOU NAILI IKRIMAH M. YANIS!
                    </Card.Text>
                    <Card.Text className="text-left">
                      Last updated 3 mins ago
                    </Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={4} className="movieWrapper">
              <Card className="movieImage">
                <Image src={SpidermanImage} alt="Spiderman Movies" className="images" />
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">Spiderman</Card.Title>
                    <Card.Text className="text-left">
                        I LOVE YOU NAILI IKRIMAH M. YANIS!
                    </Card.Text>
                    <Card.Text className="text-left">
                      Last updated 3 mins ago
                    </Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={4} className="movieWrapper">
              <Card className="movieImage">
                <Image
                  src={GuardianImage}
                  alt="Guardian of The Galaxy Movies"
                  className="images"
                />
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">Guardian of The Galaxy</Card.Title>
                    <Card.Text className="text-left">
                        I LOVE YOU NAILI IKRIMAH M. YANIS!
                    </Card.Text>
                    <Card.Text className="text-left">
                      Last updated 3 mins ago
                    </Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default SuperHero
