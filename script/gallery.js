//* OBTENER DATOS DE LA API FAKE

const getPhotos = async (url) => {
  //* DONDE SE VA A PINTAR LOS DATOS DEL API
  let showElement = document.querySelector('#getPhotos');
  //* LIMPIA EL HTML
  showElement.innerHTML = '';

  //*PROMESA
  const res = await fetch(url);
  const data = await res.json();

  //* RECORRER ,DESESTRUCTURAR EL OBJETO Y PINTARLO
  data.forEach((element) => {
    const { titulo, año, imagen, autor, Descripcion } = element;
    showElement.innerHTML += `
        <div class="card mb-3 w-75 cardt m-auto" id="getPhotos">
        <img
          src="${imagen}"
          class="card-img-top img-fluid p-1"
          alt="foto1"
        />
        <div class="card-body">
          <h5 class="card-title text-uppercase">
            <strong>"${titulo}"</strong>
          </h5>
          <span><strong>Author: </strong>${autor}</span>
          <div>
          <span><strong>Year: </strong>${año}</span>
          </div>

          <p class="card-text">
           "${Descripcion}"
          </p>
          <p class="card-text">
            <a class="btn btn-secondary w-100" href="https://www.boredpanda.com/top-100-world-photos-influential-all-time/?utm_source=google&utm_medium=organic&utm_campaign=organic" target="_blank"><strong>More Info</strong></a>
          </p>
        </div>
      </div>`;
  });
};
//* LLAMAR FUNCION PARAMETRO API
getPhotos('https://photography-gallery-m.herokuapp.com/fotografias');
