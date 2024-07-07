import React from "react";
import { Col } from "react-bootstrap";

const CardCertificado = ({ certificado, obtenerIdCertificado }) => {
  return (
    <Col md={12} lg={6} className="d-flex mb-4  flex-lg-row flex-md-row">
      <a
        className="cardCert d-flex"
        style={{
          backgroundImage: `url(${certificado.imagen})`
        }}
        onClick={() => {
          obtenerIdCertificado(certificado._id);
        }}
      >
        <div className="borderCert"></div>
        <div className="content">
          <span className="bottom-text">{certificado.titulo}</span>
        </div>
      </a>
      <div className="text-white textoCert w-50">
        <h5>{certificado.titulo}</h5>
        <p>
          {certificado.institucion} <br /> {certificado.expedicion}
        </p>
      </div>
    </Col>
  );
};

export default CardCertificado;
