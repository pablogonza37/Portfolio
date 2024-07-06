import { Container, Row, Col, Button, Modal } from "react-bootstrap";

const CardProyecto = ({ proyecto, obtenerIdProyecto }) => {
  return (
    <>
      <Col md={6} lg={4} className="peliculas">
        <div className="cardProyecto">
          <div className="pelicula">
            <img
              className="imgTendencia"
              src={proyecto.imagen}
              alt=""
              loading="lazy"
            />

            <div className="tituloPelicula">
            <p className="tituloProyecto text-center w-100">
                  {proyecto.nombreProyecto}
                </p>
              <div className="menuProyecto d-flex justify-content-center">
                
                <Button
                  variant="primary"
                  href={proyecto.github}
                  target="_blank"
                >
                  <i className="bi bi-github"></i>
                </Button>
                <Button
                  variant="dark"
                  className="ms-2"
                  href={proyecto.deploy}
                  target="_blank"
                >
                  <i className="bi bi-rocket-takeoff"></i>
                </Button>
                <Button
                  variant="success"
                  className="ms-2"
                  onClick={() => {
                    obtenerIdProyecto(proyecto._id);
                  }}
                >
                  <i className="bi bi-info-circle"></i>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default CardProyecto;
