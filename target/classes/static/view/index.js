const btnSeleccionar = document.getElementById('btnSeleccionar');
const selectElemento = document.getElementById('elemento');

btnSeleccionar.addEventListener('click', () => {
  const elementoSeleccionado = selectElemento.value;
  alert(`Has seleccionado: ${elementoSeleccionado}`);
});
