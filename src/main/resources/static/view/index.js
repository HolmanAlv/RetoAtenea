const btnSeleccionar = document.getElementById('btnSeleccionar');
const selectElemento = document.getElementById('elemento');

btnSeleccionar.addEventListener('click', () => {
  const elementoSeleccionado = selectElemento.value;
  redireccionarElemento(elementoSeleccionado);
});

function redireccionarElemento(elemento) {
  let url = '';
  switch (elemento) {
    case 'carro':
      url = 'view/carro.html';
      break;
    case 'cliente':
      url = 'view/cliente.html';
      break;
    case 'reservacion':
      url = 'view/reservacion.html';
      break;
    default:
      return;
  }
  window.location.href = url;
}
