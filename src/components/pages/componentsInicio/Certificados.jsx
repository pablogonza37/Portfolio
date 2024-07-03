import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import IconoCert from "../../../assets/cert.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Certificados = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="certificados py-3">
      
      <Container>
      <h2 className=" display-3" data-aos="zoom-in"><img src={IconoCert} className="imgTitulo" alt="" />
        Certificaciones
      </h2>
      <hr />
        <Row className="mt-5">
          <Col md={4}>
          
          <a className="cardCert" style={{ backgroundImage: 'url("https://certs.rollingcodeschool.com//cGFiLmdvbnphbGV6Mzc5OEBnbWFpbC5jb20=-1714682133518-1.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div class="borderCert"></div>
              <div class="content"></div>
              <span class="bottom-text">RollingCode school</span>
            </a>
            <div className=" mt-2">
        <h3>rolling code</h3>
        <p>kdmkmklsmcklmds <br /> kdsjncdsjkncs</p>
        </div>
          </Col>
          
         

        </Row>
      </Container>
    </section>
  );
};

export default Certificados;
