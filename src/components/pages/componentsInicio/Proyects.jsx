import { Container, Row, Col, Button } from "react-bootstrap";
import Bistro from "../../../assets/bistro.png";
import ListaTareas from "../../../assets/listaTareas.png";
import Coffee from "../../../assets/coffee.png";
import Paleta from "../../../assets/paleta.png";
import Clima from "../../../assets/clima.png";
import Noticias from "../../../assets/noticias.png";
import Peliculas from "../../../assets/peliculas.png";
import Resetas from "../../../assets/resetas.png";
import Parrillada from "../../../assets/parrillada.png";
import Simpsons from "../../../assets/simpsons.png";
import Agenda from "../../../assets/agenda.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Proyects = () => {

  useEffect(()=>{
    AOS.init();
  }, []);

  return (
    <section className="proyectos" data-aos="zoom-in">
      <h2 className="text-white display-5 my-3 text-center mb-5">PROYECTOS</h2>
      <Container>
        <Row>
          <Col md={6} lg={4} className="peliculas" >
            <div className="cardProyecto" >
              <div className="pelicula">
                <img
                  className="imgTendencia"
                  src={Bistro}
                  alt=""
                  loading="lazy"
                />

                <div className="tituloPelicula ">
                  <div className="menuProyecto d-flex justify-content-center">
                    <Button variant="primary">
                      <i className="bi bi-github"></i>
                    </Button>
                    <Button variant="dark" className="ms-2">
                      <i className="bi bi-box-arrow-up-right"></i>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} lg={4} className="peliculas">
            <div className="cardProyecto">
              <div className="pelicula">
                <img
                  className="imgTendencia"
                  src={ListaTareas}
                  alt=""
                  loading="lazy"
                />

                <div className="tituloPelicula ">
                  <div className="menuProyecto d-flex justify-content-center">
                    <Button variant="primary">
                      <i className="bi bi-github"></i>
                    </Button>
                    <Button variant="dark" className="ms-2">
                      <i className="bi bi-box-arrow-up-right"></i>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} lg={4} className="peliculas">
            <div className="cardProyecto">
              <div className="pelicula">
                <img
                  className="imgTendencia"
                  src={Coffee}
                  alt=""
                  loading="lazy"
                />

                <div className="tituloPelicula ">
                  <div className="menuProyecto d-flex justify-content-center">
                    <Button variant="primary">
                      <i className="bi bi-github"></i>
                    </Button>
                    <Button variant="dark" className="ms-2">
                      <i className="bi bi-box-arrow-up-right"></i>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} lg={4} className="peliculas">
            <div className="cardProyecto">
              <div className="pelicula">
                <img
                  className="imgTendencia"
                  src={Paleta}
                  alt=""
                  loading="lazy"
                />

                <div className="tituloPelicula ">
                  <div className="menuProyecto d-flex justify-content-center">
                    <Button variant="primary">
                      <i className="bi bi-github"></i>
                    </Button>
                    <Button variant="dark" className="ms-2">
                      <i className="bi bi-box-arrow-up-right"></i>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} lg={4} className="peliculas">
            <div className="cardProyecto">
              <div className="pelicula">
                <img
                  className="imgTendencia"
                  src={Clima}
                  alt=""
                  loading="lazy"
                />

                <div className="tituloPelicula ">
                  <div className="menuProyecto d-flex justify-content-center">
                    <Button variant="primary">
                      <i className="bi bi-github"></i>
                    </Button>
                    <Button variant="dark" className="ms-2">
                      <i className="bi bi-box-arrow-up-right"></i>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} lg={4} className="peliculas">
            <div className="cardProyecto">
              <div className="pelicula">
                <img
                  className="imgTendencia"
                  src={Noticias}
                  alt=""
                  loading="lazy"
                />

                <div className="tituloPelicula ">
                  <div className="menuProyecto d-flex justify-content-center">
                    <Button variant="primary">
                      <i className="bi bi-github"></i>
                    </Button>
                    <Button variant="dark" className="ms-2">
                      <i className="bi bi-box-arrow-up-right"></i>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} lg={4} className="peliculas">
            <div className="cardProyecto">
              <div className="pelicula">
                <img
                  className="imgTendencia"
                  src={Peliculas}
                  alt=""
                  loading="lazy"
                />

                <div className="tituloPelicula ">
                  <div className="menuProyecto d-flex justify-content-center">
                    <Button variant="primary">
                      <i className="bi bi-github"></i>
                    </Button>
                    <Button variant="dark" className="ms-2">
                      <i className="bi bi-box-arrow-up-right"></i>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} lg={4} className="peliculas">
            <div className="cardProyecto">
              <div className="pelicula">
                <img
                  className="imgTendencia"
                  src={Resetas}
                  alt=""
                  loading="lazy"
                />

                <div className="tituloPelicula ">
                  <div className="menuProyecto d-flex justify-content-center">
                    <Button variant="primary">
                      <i className="bi bi-github"></i>
                    </Button>
                    <Button variant="dark" className="ms-2">
                      <i className="bi bi-box-arrow-up-right"></i>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} lg={4} className="peliculas">
            <div className="cardProyecto">
              <div className="pelicula">
                <img
                  className="imgTendencia"
                  src={Parrillada}
                  alt=""
                  loading="lazy"
                />

                <div className="tituloPelicula ">
                  <div className="menuProyecto d-flex justify-content-center">
                    <Button variant="primary">
                      <i className="bi bi-github"></i>
                    </Button>
                    <Button variant="dark" className="ms-2">
                      <i className="bi bi-box-arrow-up-right"></i>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} lg={4} className="peliculas">
            <div className="cardProyecto">
              <div className="pelicula">
                <img
                  className="imgTendencia"
                  src={Simpsons}
                  alt=""
                  loading="lazy"
                />

                <div className="tituloPelicula ">
                  <div className="menuProyecto d-flex justify-content-center">
                    <Button variant="primary">
                      <i className="bi bi-github"></i>
                    </Button>
                    <Button variant="dark" className="ms-2">
                      <i className="bi bi-box-arrow-up-right"></i>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} lg={4} className="peliculas">
            <div className="cardProyecto">
              <div className="pelicula">
                <img
                  className="imgTendencia"
                  src={Agenda}
                  alt=""
                  loading="lazy"
                />

                <div className="tituloPelicula ">
                  <div className="menuProyecto d-flex justify-content-center">
                    <Button variant="primary">
                      <i className="bi bi-github"></i>
                    </Button>
                    <Button variant="dark" className="ms-2">
                      <i className="bi bi-box-arrow-up-right"></i>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Proyects;
