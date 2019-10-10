import { SET_POSTULANTE } from "../actions/postulanteB";

export const filtrosPBReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_POSTULANTE:
      return { ...state, postulante: action.payload };
    default:
      return state;
  }
};

//Explicación del funcionamimento de la siguiente función
// switch(action.type) {
//     case SET_POSTULANTE:
//         return { ...state, nombre: action.payload }
//         default:
//             return state;
// }

//1.-El state con los tres puntos antes significa que realiza un desglose de todos sus elementos.
//2.-El action.payload es el nuevo valor o un valor que recibe y se almacenara en la variable nombre.