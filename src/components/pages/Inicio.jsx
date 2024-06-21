import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';

const Inicio = () => {
  return (
    <>
      <section className="banner">
        {/*  <h1 className="text-white text-center lead pt-4 shadow display-1">
        <span> DESARROLLADOR</span>
        <span className="tituloFullstack"> FULL STACK</span>
        <br />
      </h1>*/}

        <Container>
          <Row>
            <Col md={6} className="p-0 text-center">
              <img src="/public/perfil.png" alt="" className="perfil" />
              <div className="d-flex justify-content-center mt-3">
                <div className="button-icon">
                  <div className="icon">
                    <svg viewBox="0 0 24 24">
                      <path
                        d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                        fill="#222229"
                      ></path>
                    </svg>
                  </div>
                  <div className="cube">
                    <span className="side front">Github</span>
                    <span className="side top">check it on github</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} className="p-0">
              <div className="info px-4 py-2 m-auto">
                <p className="text-white mb-1">Bienvenidos a mi portfolio</p>
                <hr className="text-white my-1" />
                <h1 className="display-4 text-white bold">
                  DESARROLLADOR FULL STACK
                </h1>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis quis suscipit error vero explicabo debitis facilis
                  culpa magni architecto corporis unde rerum, consequatur
                  quibusdam? Minus, aperiam pariatur. Illo, inventore assumenda!
                </p>
                <div className="text-end me-3">
                  <button className="button">
                    <span class="button_lg">
                      <span className="button_sl"></span>
                      <span className="button_text">Descargar CV</span>
                    </span>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="proyectos  py-5">
        <Container>
          <h2 className="text-white display-5 my-3">PROYECTOS</h2>

          <Row>
            <Col md={4}>
              <div className="peliculas">
                <div className="cardProyecto">
                  <div className="pelicula">
                    <img
                      className="imgTendencia"
                      src="https://lh3.googleusercontent.com/d/1Tm9QMrxsOs1ZBrD2G9tyrGB6E77Wf9ZD=s1050"
                      alt=""
                      loading="lazy"
                    />

                    <div className="tituloPelicula ">
                      <div className="menuProyecto d-flex justify-content-center">
                      <Button variant="primary"><i className="bi bi-github"></i></Button>
                      <Button variant="light" className="ms-2"><i className="bi bi-box-arrow-up-right"></i></Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </section>
      <section className="contacto">
        <Container>
          <h2 className="text-white display-3 d-flex justify-content-center">
            Contacto
          </h2>

          <div className="d-flex">
            <div className="form-container w-50">
              <div className="form ">
                <span className="heading">Get in touch</span>
                <input placeholder="Name" type="text" className="input" />
                <input
                  placeholder="Email"
                  id="mail"
                  type="email"
                  className="input"
                />
                <textarea
                  placeholder="Say Hello"
                  rows="10"
                  cols="30"
                  id="message"
                  name="message"
                  className="textarea"
                ></textarea>
                <div className="button-container">
                  <div className="send-button">Send</div>
                  <div className="reset-button-container">
                    <div id="reset-btn" className="reset-button">
                      Reset
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Inicio;
