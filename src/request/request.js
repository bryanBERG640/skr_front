import axios from "axios";

function getPostulanteC(idPostulante) {
  return fetch(
    "http://192.168.1.230:8088/skr_v1/postulanteComplemento/get/" +
      idPostulante,
    {
      method: "GET"
    }
  )
    .then(response => {
      return response.json();
    })
    .catch(console.log);
}

function getPostulanteB() {
  const postulantes = axios.get(
    "http://192.168.1.230:8088/skr_v1/postulanteB/get"
  );
  return postulantes;
}

function getCita() {
  const citas = axios.get("http://192.168.1.230:8088/skr_v1/cita/get/");
  return citas;
}

function getPerfil() {
  const perfil = axios.get("http://192.168.1.230:8088/skr_v1/perfil/get/");
  return perfil;
}

function postSeccion(jsonRequest, estatus, perfil) {
  return fetch(
    "http://192.168.1.230:8088/skr_v1/postulanteB/" +
      estatus +
      "/" +
      perfil +
      "/post",
    {
      method: "POST",
      body: JSON.stringify(jsonRequest),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }
  )
    .then(response => {
      return response.json();
    })
    .catch(console.log);
}

function postCita(jsonRequest, estatusCita, idPostulanteB) {
  /*console.log(estatusCita);
  console.log(idPostulanteB);*/
  return fetch(
    "http://192.168.1.230:8088/skr_v1/cita/" +
      estatusCita +
      "/" +
      idPostulanteB +
      "/post",
    {
      method: "POST",
      body: JSON.stringify(jsonRequest),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }
  )
    .then(response => {
      return response.json();
    })
    .catch(console.log);
}

function getCitas() {
  return fetch("http://192.168.1.230:8088/skr_v1/postulanteB/get/", {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(console.log);
}

function getEstatusPostulante() {
  const estatusPostulante = axios.get(
    "http://192.168.1.230:8088/skr_v1/estatusPostulante/get/"
  );
  return estatusPostulante;
}

function putCita(jsonRequest, estatusCita, idPostulanteB, idCita) {
  /*console.log(estatusCita);
  console.log(idPostulanteB);
  console.log(idCita);*/
  return fetch(
    "http://192.168.1.230:8088/skr_v1/cita/" +
      estatusCita +
      "/" +
      idPostulanteB +
      "/put/" +
      idCita,
    {
      method: "PUT",
      body: JSON.stringify(jsonRequest),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }
  )
    .then(response => {
      return response.json();
    })
    .catch(console.log);
}

function getEstatusTitulacion() {
  const EstatusTitulacion = axios.get(
    "http://192.168.1.230:8088/skr_v1/estatusTitulacion/get/"
  );
  return EstatusTitulacion;
}

function getEscuela() {
  const escuela = axios.get("http://192.168.1.230:8088/skr_v1/escuela/get/");
  return escuela;
}

function getCarrera() {
  const carrera = axios.get("http://192.168.1.230:8088/skr_v1/carrera/get/");
  return carrera;
}

function getSexo() {
  const sexo = axios.get("http://192.168.1.230:8088/skr_v1/sexo/get/");
  return sexo;
}

function getEstatusCV() {
  const estatusCV = axios.get(
    "http://192.168.1.230:8088/skr_v1/estatusCV/get/"
  );
  return estatusCV;
}

function getEstatusAprobacion() {
  const EstatusAprobacion = axios.get(
    "http://192.168.1.230:8088/skr_v1/estatusAprobacion/get/"
  );
  return EstatusAprobacion;
}

export {
  getPostulanteC,
  getPostulanteB,
  getCita,
  getPerfil,
  getCitas,
  getCarrera,
  getEscuela,
  getEstatusAprobacion,
  getEstatusCV,
  getEstatusTitulacion,
  getSexo,
  postSeccion,
  getEstatusPostulante,
  postCita,
  putCita
};
