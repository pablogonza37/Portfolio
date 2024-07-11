import React from "react";
import { Col } from "react-bootstrap";

const CardCertificado = ({ certificado, obtenerIdCertificado }) => {
  return (
    <Col md={12} lg={6} className="d-flex mb-4  flex-lg-row flex-md-row">
      <div
        className="cardCert d-flex"
        style={{
          backgroundImage: `url(${certificado.imagen})`,
        }}
      >
        <div className="borderCert"></div>
        <div className="content w-100">
          <span className="bottom-text ">{certificado.titulo}</span>
        </div>
      </div>
      <div className="text-white textoCert w-75">
        <h5>{certificado.titulo}</h5>
        <p>
          <i className="bi bi-mortarboard"></i> {certificado.institucion} <br />{" "}
          <i className="bi bi-calendar-event"></i> {certificado.expedicion}
        </p>

        <button
          className="btnCertificado"
          onClick={() => {
            obtenerIdCertificado(certificado._id);
          }}
        >
          Credencial <i className="bi bi-box-arrow-up-right"></i>
        </button>
      </div>
    </Col>
  );
};

export default CardCertificado;
