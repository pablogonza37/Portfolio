const URL_Proyectos = import.meta.env.VITE_API_PROYECTOS;
const URL_Certificados = import.meta.env.VITE_API_CERTIFICADOS;
const URL_Consultas = import.meta.env.VITE_API_CONSULTAS;

export const listarProyectosAPI = async () => {
  try {
    const resp = await fetch(URL_Proyectos);
    const listaProyectos = await resp.json();
    return listaProyectos;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerProyectoAPI = async (id) => {
  try {
    const resp = await fetch(URL_Proyectos + "/" + id);
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export const listarCertificadosAPI = async () => {
  try {
    const resp = await fetch(URL_Certificados);
    const listaCerfificados = await resp.json();
    return listaCerfificados;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerCertificadoAPI = async (id) => {
  try {
    const resp = await fetch(URL_Certificados + "/" + id);
    return resp;
  } catch (error) {
    console.log(error);
  }
};


export const crearConsultaAPI = async (nuevaConsulta) => {
  try {
    const resp = await fetch(URL_Consultas, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevaConsulta),
    });
    return resp;
  } catch (error) {
    console.log(error);
  }
};