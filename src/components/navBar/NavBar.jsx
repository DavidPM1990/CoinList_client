import './NavBar.css'
import { Link } from "react-router-dom";
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AuthContext } from '../../context/auth.context';
import { useContext } from 'react';


const NavBar = () => {

    const { logOut, isLoading, isloggedIn, user } = useContext(AuthContext)

    return (
        <Navbar className='navBar' bg="dark" variant="dark">
            <Navbar.Brand href="#home">CryptoCoin</Navbar.Brand>
            <Nav className="me-auto">
                {!isLoading && isloggedIn ? (
                    <>
                        <Nav.Link href="/signup">Sign Up</Nav.Link>
                        <Nav.Link href="/login">Log In</Nav.Link>
                    </>
                ) : <>
                    <Nav.Link as='span'><Link to={'/'} style={{ color: 'inherit', textDecoration: 'none' }}>Coins</Link></Nav.Link>
                    <Nav.Link as='span'><Link to={"/profile"} style={{ color: 'inherit', textDecoration: 'none' }}>Profile</Link></Nav.Link>
                    <Nav.Link onClick={() => logOut()} href="/login">Log Out</Nav.Link>
                </>}
            </Nav>
        </Navbar>
    )
}

export default NavBar