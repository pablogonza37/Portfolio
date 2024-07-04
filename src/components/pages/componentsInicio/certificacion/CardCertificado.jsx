import { Container, Row, Col, Button, Modal } from "react-bootstrap";

const CardCertificado = () => {
  return (
    <Col md={4}>
      <a
        className="cardCert"
        style={{
          backgroundImage:
            'url("https://certs.rollingcodeschool.com//cGFiLmdvbnphbGV6Mzc5OEBnbWFpbC5jb20=-1714682133518-1.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div class="borderCert"></div>
        <div class="content"></div>
        <span class="bottom-text">RollingCode school</span>
      </a>
      <div className=" mt-2">
        <h3>rolling code</h3>
        <p>
          kdmkmklsmcklmds <br /> kdsjncdsjkncs
        </p>
      </div>
    </Col>
  );
};

export default CardCertificado;
