function getPostulanteC(idPostulante){
    return fetch("http://192.168.1.230:8088/skr_v1/postulanteComplemento/get/"+idPostulante,{
      method:'GET',
      headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        }
    }).then(response =>{
      return response.json()
    }).catch(console.log)
  }

  export {getPostulanteC}