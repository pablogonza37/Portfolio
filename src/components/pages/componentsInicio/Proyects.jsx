import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import Bistro from "../../../assets/bistro.png";
import IconoProyecto from "../../../assets/proyecto.png";

const Proyects = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className="proyectos" >
      <Container>
        
        <h2 className="text-white display-5 mt-3 tituloProyectos" data-aos="zoom-in">
          <img className="imgTitulo" src={IconoProyecto} alt="" />
          PROYECTOS
        </h2>
        <hr className="text-white" />
        <div>
        <button className="btnFiltro"> Todos
        </button>
        <button className="btnFiltro"> Full stack
        </button>
        <button className="btnFiltro"> Frontend
        </button>
        <button className="btnFiltro"> Backend
        </button>
        </div>
        <Row className="mt-5">
          <Col md={6} lg={4} className="peliculas">
            <div className="cardProyecto">
              <div className="pelicula">
                <img
                  className="imgTendencia"
                  src={Bistro}
                  alt=""
                  loading="lazy"
                />

                <div className="tituloPelicula">
                  <div className="menuProyecto d-flex justify-content-center">
                    <Button
                      variant="primary"
                      href="https://github.com/pablogonza37/ProyectoFinalRollingCode"
                      target="_blank"
                    >
                      <i className="bi bi-github"></i>
                    </Button>
                    <Button
                      variant="dark"
                      className="ms-2"
                      href="https://rolling-bistro.netlify.app/"
                      target="_blank"
                    >
                      <i className="bi bi-rocket-takeoff"></i>
                    </Button>
                    <Button
                      variant="success"
                      className="ms-2"
                      onClick={openModal}
                    >
                      <i className="bi bi-info-circle"></i>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Detalles del Proyecto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Aquí puedes agregar cualquier detalle adicional del proyecto */}
          Detalles del proyecto aquí...
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Proyects;
