const API = "https://rickandmortyapi.com/api/character";

//Se crea la funcion
const getAPI = (url) => {
  //cuando se encuentra un return ahi termina la funcion
  //con  el fetch podemos consumir toda una api de donde sea solo con la url, requis
  return (
    fetch(url)
      //me trae una respuesta si todo sale bien, nos trae una respuesta y viene en formato json
      .then((response) => response.json())
      //Aqui me queda guardado todo en esa variable json
      .then((json) => {
        fillDate(json.results), pagination(json.info);
      })
      .catch((error) => {
        console.log("error in the API : ", error);
      })
  );
};

const fillDate = (data) => {
  // se crea una variable html vacia
  let html = "";
  // variable ch me guarda cada uno de los personajes
  // el forEach me recorre todo lo q me envian
  data.forEach((ch) => {
    html += '<div class="col">';
    html += '<div class="card h-100 bg-info text-white bg-dark mb-3">';
    html += `<img src="${ch.image}" class="card-img-top" alt="...">`;
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${ch.name}</h5>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
  });
  document.getElementById("characters").innerHTML = html;
};

//para manejar la paginacion
const pagination = (info) => {
  // estas variables son para crear dos botones
  // let prevDisabled = "";
  // let nexDisabled = "";
  let html = "";

  //Traigo las variable prev y next del json de la api en postman, se ponen tal y como esten
  //si es null me devuelve disabled
  // if (info.prev == null) {
  //   prevDisabled = "disabled";
  // }else{
  //   prevDisabled = "";
  // }

  //OPERADOR TERNARIO, HACE LO MISMO QUE EL IF ELSE, SOLO SI LO ES UN SI VERDADERO O FALSO
  // info.prev == null ?  "disabled" :  "";
  // info.next == null ? "disabled" : "";


  // if (info.next == null) {
  //   nexDisabled = "disabled";
  // }

  html += `<li class="page-item ${info.prev == null ?  "disabled" :  ""}"> <a class="page-link" onclick="getAPI('${info.prev}')">Prev</a></li>`;
  html += `<li class="page-item ${info.next == null ? "disabled" : ""}"> <a class="page-link" onclick="getAPI('${info.next}')">Next</a></li>`;

  document.getElementById("pagination").innerHTML=html;
};

// Se ejecuta Y vuelve donde se creo  getAPI  y recibe la url
getAPI(API);


