import React, { useState, useEffect } from "react";
import { Container, Row, Button, Modal, Spinner, Badge } from "react-bootstrap";
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
  };

  const proyectosFiltrados =
    filtro === "Todos" ? proyectos : filtrarProyectos(filtro);

  const tecnologiaModal = proyectoModal.tecnologias
    ? proyectoModal.tecnologias.split(',')
    : [];

  return (
    <section className="proyectos" id="proyectos">
      <Container>
        <h2 className="anton-sc-regular mt-3 tituloProyectos" data-aos="zoom-in">
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
          <Row className="mt-5">
            {proyectosFiltrados.map((proyecto) => (
              <CardProyecto
                key={proyecto._id}
                proyecto={proyecto}
                obtenerIdProyecto={obtenerIdProyecto}
              />
            ))}
          </Row>
        )}
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{proyectoModal.nombreProyecto}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="img-fluid imgModal" src={proyectoModal.imagen} alt="" />
          <p>{proyectoModal.descripcion}</p>
          <hr />
          <p>Tecnologias:</p>
          <ul>
            {tecnologiaModal.map((item, index) => (
              <li key={index}><Badge>{item.trim()}</Badge></li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" href={proyectoModal.github} target="_blank">
            <i className="bi bi-github"> Github</i>
          </Button>
          <Button variant="dark" className="ms-2" href={proyectoModal.deploy} target="_blank">
            <i className="bi bi-rocket-takeoff"> Ver</i>
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
