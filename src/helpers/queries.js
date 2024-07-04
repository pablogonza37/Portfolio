const URL_Proyectos = import.meta.env.VITE_API_PROYECTOS;

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