import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/Logo.png';
import '../Navbar/CustomNav.css';

function CustomNavbar() {
  return (
    <>
      <Navbar className='d-flex justify-content-center align-items-center' style={{margin:0, padding:0, backgroundColor:'#0e0e0f'}} variant='dark'>
          <Navbar.Brand style={{margin:0, padding:0}} href=''><img  src={logo} className="logo" alt="logo"/></Navbar.Brand>
      </Navbar>
    </>
  );
}

export default CustomNavbar;