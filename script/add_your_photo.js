let formulario = document.getElementById('form');
let btnTitle = document.getElementById('btnTitle');
let btnEdit = document.getElementById('btnEdit');

let btnDelete = document.getElementById('btnDelete');

let url = 'https://photography-gallery-m.herokuapp.com/fotografias/';
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('id').style.display = 'none';
  document.getElementById('label-edit').style.display = 'none';
});

formulario.addEventListener('submit', async (e) => {
  e.preventDefault();

  let name = document.getElementById('$name').value;
  let title = document.getElementById('$titulo').value;
  let year = document.getElementById('$anio').value;
  let urlPhoto = document.getElementById('$urlPhoto').value;
  let descripcion = document.getElementById('$descripcion').value;

  let resp = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      titulo: title,
      año: year,
      imagen: urlPhoto,
      autor: name,
      Descripcion: descripcion,
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTf-8',
    },
  });

  let data = await resp.json();
  console.log(data);
});

btnTitle.addEventListener('click', async () => {
  document.getElementById('id').style.display = 'block';
  document.getElementById('label-edit').style.display = 'block';

  let titleFind = document.getElementById('$titulo').value;

  let resp = await fetch(url);
  let data = await resp.json();

  let modificar = data.find((user) =>
    user.titulo.toLocaleLowerCase().includes(titleFind.toLocaleLowerCase())
  );
  console.log(modificar);

  const { titulo, año, imagen, autor, Descripcion, id } = modificar;

  document.getElementById('$titulo').value = titulo;
  document.getElementById('$anio').value = año;
  document.getElementById('$urlPhoto').value = imagen;
  document.getElementById('$name').value = autor;
  document.getElementById('$descripcion').value = Descripcion;
  document.getElementById('id').value = id;
});

btnEdit.addEventListener('click', async () => {
  let idModificar = document.getElementById('id').value;
  let nameModificar = document.getElementById('$name').value;
  let anioModificar = document.getElementById('$anio').value;
  let descripcionModificar = document.getElementById('$descripcion').value;
  let tituloModificar = document.getElementById('$titulo').value;
  let urlPhotoModificar = document.getElementById('$urlPhoto').value;

  await fetch(url + idModificar, {
    method: 'PUT',
    body: JSON.stringify({
      id: idModificar,
      titulo: tituloModificar,
      año: anioModificar,
      imagen: urlPhotoModificar,
      autor: nameModificar,
      Descripcion: descripcionModificar,
    }),
    headers: {
      'Content-Type': 'application/json; chartset=UTF-8',
    },
  });
});

btnDelete.addEventListener('click', async () => {
  let idEliminar = document.getElementById('id').value;
  await fetch(url + idEliminar, {
    method: 'DELETE',
  });
});
