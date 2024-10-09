import React, { useState, useEffect } from "react";
import { Container, Row, Button, Modal, Spinner, Badge, Pagination } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import IconoProyecto from "../../../assets/proyecto.png";
import {
  listarProyectosAPI,
  obtenerProyectoAPI,
} from "../../../helpers/queries";
import CardProyecto from "./proyecto/CardProyecto";

const Proyects = () => {
  const [proyectos, setProyectos] = useState([]);
  const [spinnerInicio, setSpinnerInicio] = useState(true);
  const [show, setShow] = useState(false);
  const [proyectoModal, setProyectoModal] = useState({});
  const [filtro, setFiltro] = useState("Todos");
  
 
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; 

  const handleClose = () => setShow(false);

  const obtenerIdProyecto = async (id) => {
    try {
      const respuesta = await obtenerProyectoAPI(id);
      const proyectoEncontrado = await respuesta.json();
      setProyectoModal(proyectoEncontrado);
      setShow(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    consultarAPI();
    AOS.init();
  }, []);

  const consultarAPI = async () => {
    try {
      setSpinnerInicio(true);
      const resp = await listarProyectosAPI();
      setProyectos(resp);
      setSpinnerInicio(false);
    } catch (error) {
      console.log(error);
    }
  };

  const filtrarProyectos = (tipo) => {
    switch (tipo) {
      case "Full stack":
        return proyectos.filter((proyecto) => proyecto.tipo === "fullstack");
      case "Frontend":
        return proyectos.filter((proyecto) => proyecto.tipo === "frontend");
      case "Backend":
        return proyectos.filter((proyecto) => proyecto.tipo === "backend");
      default:
        return proyectos;
    }
  };

  const handleFiltroClick = (tipo) => {
    setFiltro(tipo);
    setCurrentPage(1); 
  };

  const proyectosFiltrados =
    filtro === "Todos" ? proyectos : filtrarProyectos(filtro);


  const indexOfLastProject = currentPage * itemsPerPage;
  const indexOfFirstProject = indexOfLastProject - itemsPerPage;
  const currentProjects = proyectosFiltrados.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(proyectosFiltrados.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const tecnologiaModal = proyectoModal.tecnologias
    ? proyectoModal.tecnologias.split(',')
    : [];

  const imagenesModal = proyectoModal.imagenesMuestra
    ? proyectoModal.imagenesMuestra.split(',')
    : [];

  return (
    <section className="proyectos" id="proyectos">
      <Container>
        <h2 className="mt-3 tituloSeccion" data-aos="zoom-in">
          <img className="imgTitulo" src={IconoProyecto} alt="" />
          PROYECTOS
        </h2>
        <hr className="text-white" />
        <div>
          <Button
            className={`btnFiltro ${filtro === "Todos" ? "active" : ""}`}
            style={filtro === "Todos" ? { backgroundColor: "#23c483" } : {}}
            onClick={() => handleFiltroClick("Todos")}
          >
            Todos
          </Button>
          <Button
            className={`btnFiltro ${filtro === "Full stack" ? "active" : ""}`}
            style={filtro === "Full stack" ? { backgroundColor: "#23c483" } : {}}
            onClick={() => handleFiltroClick("Full stack")}
          >
            Full stack
          </Button>
          <Button
            className={`btnFiltro ${filtro === "Frontend" ? "active" : ""}`}
            style={filtro === "Frontend" ? { backgroundColor: "#23c483" } : {}}
            onClick={() => handleFiltroClick("Frontend")}
          >
            Frontend
          </Button>
          <Button
            className={`btnFiltro ${filtro === "Backend" ? "active" : ""}`}
            style={filtro === "Backend" ? { backgroundColor: "#23c483" } : {}}
            onClick={() => handleFiltroClick("Backend")}
          >
            Backend
          </Button>
        </div>
        {spinnerInicio ? (
          <div className="my-4 text-center">
            <Spinner animation="border" variant="light" />
          </div>
        ) : (
          <>
            <Row className="mt-5">
              {currentProjects.map((proyecto) => (
                <CardProyecto
                  key={proyecto._id}
                  proyecto={proyecto}
                  obtenerIdProyecto={obtenerIdProyecto}
                />
              ))}
            </Row>
            {totalPages > 1 && ( 
              <Pagination className="mt-4 justify-content-center" style={{ backgroundColor: 'black' }}>
                {Array.from({ length: totalPages }, (_, index) => (
                  <Pagination.Item
                    key={index + 1}
                    active={index + 1 === currentPage}
                    onClick={() => handlePageChange(index + 1)}
                    style={{ color: currentPage === index + 1 ? 'white' : 'gray' }} 
                  >
                    {index + 1}
                  </Pagination.Item>
                ))}
              </Pagination>
            )}
          </>
        )}
      </Container>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{proyectoModal.nombreProyecto}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="img-fluid imgModal" src={proyectoModal.imagen} alt="" />
          {imagenesModal.map((item, index) => (
            <img key={index} src={item.trim()} className="img-fluid imgModal mt-2" alt="" />
          ))}
          <p className="mt-2">{proyectoModal.descripcion}</p>
          <hr />
          <p>Tecnologias:</p>
          <ul>
            {tecnologiaModal.map((item, index) => (
              <li key={index}><Badge bg="info">{item.trim()}</Badge></li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" href={proyectoModal.github} target="_blank">
            <i className="bi bi-github"> Github</i>
          </Button>
          <Button variant="primary" className="ms-2" href={proyectoModal.deploy} target="_blank">
            <i className="bi bi-rocket-takeoff"> Lanzar</i>
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Proyects;
