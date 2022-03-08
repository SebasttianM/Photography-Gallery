const getPhotos= async (url)=>{
    let showElement = document.querySelector('#getPhotos')
    showElement.innerHTML=''

    const res = await fetch(url)
    const data= await res.json()

    data.forEach(element => {
        const {titulo, año, imagen, autor, Descripcion}= element;
        showElement.innerHTML+=`
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
          <span>Autor:${autor}</span>
          <span>Año:${año}</span>

          <p class="card-text">
           "${Descripcion}"
          </p>
          <p class="card-text">
            <button class="btn btn-secondary w-100" href="https://hipertextual.com/2016/11/las-100-fotografias-mas-influyentes-de-la-historia" target="_blank">Mas Info!!!</button>
          </p>
        </div>
      </div>`
    });
}   
getPhotos('https://photography-gallery-m.herokuapp.com/fotografias')