import Banner from "./componentsInicio/Banner";
import Proyects from "./componentsInicio/Proyects";
import Skills from "./componentsInicio/Skills";
import Contact from "./componentsInicio/Contact";
import Certificados from "./componentsInicio/Certificados";

const Inicio = () => {
  
  return (
    <>
      <Banner></Banner>
      <Proyects ></Proyects>
      <Skills></Skills>
      <Certificados></Certificados>
      <Contact></Contact>
    </>
  );
};

export default Inicio;
