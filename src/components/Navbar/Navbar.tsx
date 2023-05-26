import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/Logo.png';
import '../Navbar/CustomNav.css';

function CustomNavbar() {
  return (
    <>
      <Navbar style={{padding:0}} bg='dark' variant='dark'  expand="lg">
        {/*<div className='d-flex align-items-center justify-content-center'>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />*/}
          <Navbar.Brand style={{display:'flex', alignItems:'center', justifyContent:'center', margin:0, padding:0}} href='#'><img src={logo} className="logo" alt="logo"/></Navbar.Brand>
        {/*</div> 
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
          </Nav>
  </Navbar.Collapse>*/}
      </Navbar>
    </>
  );
}

export default CustomNavbar;