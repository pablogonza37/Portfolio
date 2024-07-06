import { Container, Row, Col, Button, Modal, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import IconoCert from "../../../assets/cert.png";
import AOS from "aos";
import "aos/dist/aos.css";
import CardCertificado from "./certificacion/CardCertificado";
import {
  listarCertificadosAPI,
  obtenerCertificadoAPI,
} from "../../../helpers/queries";

const Certificados = () => {
  const [certificados, setCertificados] = useState([]);
  const [spinnerCertificado, setSpinnerCertificado] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [certificadoModal, setCertificadoModal] = useState("");

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const obtenerIdCertificado = async (id) => {
    const respuesta = await obtenerCertificadoAPI(id);
    const certificadoEncontrado = await respuesta.json();
    setCertificadoModal(certificadoEncontrado);
    setShowModal(true);
  };

  useEffect(() => {
    consultarAPI();
    AOS.init();
  }, []);

  const consultarAPI = async () => {
    try {
      setSpinnerCertificado(true);
      const resp = await listarCertificadosAPI();
      setCertificados(resp);
      setSpinnerCertificado(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="certificados py-3 pt-5">
      <Container>
        <h2 className="anton-sc-regular " data-aos="zoom-in">
          <img src={IconoCert} className="imgTitulo" alt="" />
          CERFICACIONES
        </h2>
        <hr className="text-white" />
        {spinnerCertificado ? (
          
<div class="banter-loader">
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
</div>
        ) : (
          <Row className="mt-5">
            {certificados.map((certificado) => (
              <CardCertificado
                key={certificado._id}
                certificado={certificado}
                obtenerIdCertificado={obtenerIdCertificado}
              ></CardCertificado>
            ))}
          </Row>
        )}
      </Container>

      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Body>
          <img src={certificadoModal.imagen} alt="" className="img-fluid" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Certificados;
