import Banner from "./componentsInicio/Banner";
import Proyects from "./componentsInicio/Proyects";
import Skills from "./componentsInicio/Skills";
import Contact from "./componentsInicio/Contact";
import Certificados from "./componentsInicio/Certificados";
import IconoFlecha from "../../assets/boton-ir-arriba.png";

const Inicio = () => {
  return (
    <>
      <Banner></Banner>
      <Proyects></Proyects>
      <Skills></Skills>
      <Certificados></Certificados>
      <Contact></Contact>
      <a href="#main" className="flechaArriba">
        <img src={IconoFlecha} alt="ir arriba flecha" className="irArriba" />
      </a>
    </>
  );
};

export default Inicio;
