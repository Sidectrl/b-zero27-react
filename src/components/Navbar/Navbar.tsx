import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/logo.svg';
import '../Navbar/CustomNav.css';

function CustomNavbar() {
  return (
    <>
      <Navbar style={{ backgroundImage: require('../../images/nav_background.jpeg')}} bg='dark' variant='dark' fixed='top' expand="lg">
        <div className='d-flex align-items-center justify-content-center'>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href='#' className='d-flex align-items-center justify-content-center'><img src={logo} className="logo" alt="logo"/></Navbar.Brand>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default CustomNavbar;