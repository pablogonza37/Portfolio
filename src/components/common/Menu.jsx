import { useState } from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';


const Menu = () => {
  const [menuDesplegado, setMenuDesplegado] = useState(false); 

  const toggleMenu = () => {
    setMenuDesplegado(!menuDesplegado);
  };
    return (
        <>
            <Navbar expand="lg" className="navbar text-white bg-black shadow">
      <Container >
        <Navbar.Brand href="#home" className='text-white'>Pablo Gonzalez</Navbar.Brand>
         <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="custom-toggler border-0"
          onClick={toggleMenu} 
        >
          {menuDesplegado ? ( 
            <i className="text-white bi bi-x-lg"></i>
          ) : (
            <span className="navbar-toggler-icon"></span> 
          )}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='btnMenu text-white text-center'>Inicio</Nav.Link>
            <Nav.Link href="#contact" className='btnMenu text-white text-center'>Contacto</Nav.Link>
            <Nav.Link href="#proyectos" className='btnMenu text-white text-center'>Proyectos</Nav.Link>
            <Nav.Link href="#cert" className='btnMenu text-white text-center'>Certificaciones</Nav.Link>
            <Nav.Link href="#skills" className='btnMenu text-white text-center'>Habilidades</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    );
};

export default Menu;