export const SET_RADIOBUTTON = "SET_RADIOBUTTON";
export const setRadioButton = payload => ({ type: SET_RADIOBUTTON, payload });

export const SET_POSTULANTE = "SET_POSTULANTE";
export const setPostulante = payload => ({ type: SET_POSTULANTE, payload });

export const SET_CARRERA = "SET_CARRERA";
export const setCarreraID = payload => ({ type: SET_CARRERA, payload });

export const SET_ESCUELA = "SET_ESCUELA";
export const setEscuelaID = payload => ({ type: SET_ESCUELA, payload });

export const SET_POSTULANTE_C = "SET_POSTULANTE_C";
export const setPostulanteC = payload => ({ type: SET_POSTULANTE_C, payload });

export const AGENDAR = "CLICK_AGENDAR";
export const clickAgendar = value => ({ type: AGENDAR, value });

export const SELECCIONAR = "SELECCIONAR_VALOR";
export const changeValor = payload => ({ type: SELECCIONAR, payload });

export const BUSCAR = "CLICK_BUSCAR";
export const clickBuscar = value => ({ type: BUSCAR, value });

export const AGREGAR_POSTULANTE = "CLICK_AGREGAR_POSTULANTE";
export const clickAgregarPostulante = value => ({
  type: AGREGAR_POSTULANTE,
  value
});

export const COMPLETAR_DATOS = "CLICK_COMPLETAR_DATOS";
export const clickCompletarDatos = value => ({ type: COMPLETAR_DATOS, value });

export const MOSTRAR_FICHA = "MOSTRAR_FICHA";
export const clickMostrarFicha = value => ({ type: MOSTRAR_FICHA, value });

export const SET_CITA = "SET_CITA";
export const setCita = payload => ({
  type: SET_CITA,
  payload
});

export const SET_CLIENTE = "SET_CLIENTE";
export const setCliente = payload => ({
  type: SET_CLIENTE,
  payload
});

export const SET_EXAMEN = "SET_EXAMEN";
export const setExamen = payload => ({
  type: SET_EXAMEN,
  payload
});

export const SET_SECCION = "SET_SECCION";
export const setSeccion = payload => ({
  type: SET_SECCION,
  payload
});

export const SET_ENTREVISTA = "SET_ENTREVISTA";
export const setEntrevista = payload => ({
  type: SET_ENTREVISTA,
  payload
});

export const SET_USUARIO = "SET_USUARIO";
export const setUsuario = payload => ({
  type: SET_USUARIO,
  payload
});

export const SET_ROL = "SET_ROL";
export const setRol = payload => ({
  type: SET_ROL,
  payload
});

export const SET_OPEN = "SET_OPEN";
export const setOpen = payload => ({
  type: SET_OPEN,
  payload
});

export const SET_AUTH = "SET_AUTH";
export const setAuth = payload => ({
  type: SET_AUTH,
  payload
});
