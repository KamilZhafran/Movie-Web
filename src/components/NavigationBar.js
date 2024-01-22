import {Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="dark">
            <Container>
                <Navbar.Brand>
                    ANKITFILMS
                </Navbar.Brand>
                <Nav>
                    <Nav.Link href="#superhero">Superhero</Nav.Link>
                    <Nav.Link href="#trending">Trending</Nav.Link>
                </Nav>
            </Container>
            </Navbar>
        </div>
        
    )
}

export default NavigationBar