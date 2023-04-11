import './NavBar.css'
import { Link } from "react-router-dom";
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
    return (
        <Navbar className='navBar' bg="dark" variant="dark">
            {/* <Container> */}
            <Navbar.Brand href="#home">CryptoCoin</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as='span' ><Link className='nameColor' to={'/'}>Coins</Link></Nav.Link>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
                <Nav.Link href="/login">Log In</Nav.Link>
                <Nav.Link href="/logout">Log Out</Nav.Link>
            </Nav>
            {/* </Container> */}
        </Navbar>
    )
}

export default NavBar