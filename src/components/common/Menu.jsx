import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

const Menu = () => {
    return (
        <>
            <Navbar expand="lg" className="navbar text-white bg-black shadow">
      <Container >
        <Navbar.Brand href="#home" className='text-white'>Pablo Gonzalez</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home" className='btnMenu text-white'>Inicio</Nav.Link>
            <Nav.Link href="#link" className='btnMenu text-white'>Contacto</Nav.Link>
            <Nav.Link href="#link" className='btnMenu text-white'>Proyectos</Nav.Link>
            <Nav.Link href="#link" className='btnMenu text-white'>Sobre mi</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    );
};

export default Menu;