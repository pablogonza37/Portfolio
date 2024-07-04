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
          
          
         

        </Row>
      </Container>
    </section>
  );
};

export default Certificados;
