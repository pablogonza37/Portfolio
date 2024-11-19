import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Perfil from "../../../assets/perfil.png";

const Banner = () => {
  const [showFullStack, setShowFullStack] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFullStack(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="banner pt-3">
      <h1 className="anton-sc-regular tituloPrincipal mt-3">
        DESARROLLADOR FULLSTACK
      </h1>
      <Container>
        <Row className="mb-4">
          <Col md={6}>
            <p className="text-white playfair-display-p">
              ¡Hola! Soy Pablo, he trabajado en diversos proyectos donde he
              aplicado mis habilidades en HTML, CSS, JavaScript y React para
              diseñar y desarrollar interfaces atractivas y funcionales y
              node.js, express y mongodb para la creacion de base de datos.
            </p>
          </Col>
          <Col md={6}>
            <p className="text-white playfair-display-p">
              Además de mis habilidades técnicas, poseo una sólida comprensión
              de las últimas tendencias en diseño web y tecnologías frontend y
              backend, lo que me permite mantenerme actualizado y adaptarme a
              los cambios rápidos en la industria.
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={6} className="d-flex justify-content-center mb-5 mb-lg-0">
            <img src="https://res.cloudinary.com/dpgb6ec2s/image/upload/v1728437002/fotoPablo_4_ldednv.jpg" alt="" className="perfil" />
          </Col>
          <Col md={6} className="d-flex flex-column m-auto ">
            {" "}
            <div className="d-flex justify-content-center">
              <a
                href="https://drive.google.com/file/d/1SSF4O0DjHTIXjPOc7f2KDKt41LHK2bof/view?usp=drive_link"
                target="_blank"
                className="mt-4 link-underline-warning"
              >
                <button className="buttonCv" type="button">
                  <span className="button__text">Descargar Cv</span>
                  <span className="button__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 35 35"
                      id="bdd05811-e15d-428c-bb53-8661459f9307"
                      data-name="Layer 2"
                      className="svg"
                    >
                      <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                      <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                      <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                    </svg>
                  </span>
                </button>
              </a>
            </div>
            <div className="d-flex justify-content-center">
              <a
                href="https://github.com/pablogonza37"
                target="_blank"
                className="mt-4 link-underline-dark"
              >
                <button className="buttonGit ">
                  <svg
                    fill="#ffffff"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      id="SVGRepo_tracerCarrier"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>github</title>{" "}
                      <rect fill="none" height="24" width="24"></rect>{" "}
                      <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"></path>{" "}
                    </g>
                  </svg>
                  <span className="m-auto">Explora mi Github</span>
                </button>
              </a>
            </div>
          </Col>
        </Row>
        <div className="text-white text-center mt-3 d-flex flex-column parpadea text">
          <i className="bi bi-chevron-compact-down"></i>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
