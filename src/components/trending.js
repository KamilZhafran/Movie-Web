import {Card, Container, Row, Col, Image} from "react-bootstrap";
import ThorImage from "../assets/images/superhero/Thor.jpg";
import MatrixImage from "../assets/images/trending/matrix.jpg";
import GladiatorImage from "../assets/images/trending/Gladiator.jpg";
import ResidentEvilImage from "../assets/images/trending/ResidentEvil.jpg";
import BarbieImage from "../assets/images/trending/Barbie.jpg";

const Trending = () => {
    return (
      <div>
        <Container>
          <br />
          <h1 className="text-white">TRENDING MOVIES</h1>
          <br />
          <Row>
            <Col md={4} className="movieWrapper" id="trending">
              <Card className="movieImage">
                <Image src={ThorImage} alt="Thor" className="images" />
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">Thor</Card.Title>
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
                  src={BarbieImage}
                  alt="Barbie"
                  className="images"
                />
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">
                      Barbie
                    </Card.Title>
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
                <Image src={MatrixImage} alt="Matrix Movies" className="images" />
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">Matrix</Card.Title>
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
                <Image src={GladiatorImage} alt="Gladiator" className="images" />
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">Gladiator</Card.Title>
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
                  src={ResidentEvilImage}
                  alt="Resident Evil Movies"
                  className="images"
                />
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">Resident Evil</Card.Title>
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

export default Trending