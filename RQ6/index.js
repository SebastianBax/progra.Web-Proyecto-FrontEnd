function filtrarJuegos() {
  const precioMin = parseFloat(document.getElementById('precioMin').value) || 0;
  const precioMax = parseFloat(document.getElementById('precioMax').value) || Infinity;
  const categoria = document.getElementById('categoria').value.toLowerCase();
  const plataforma = document.getElementById('plataforma').value.toLowerCase();
  const soloOfertas = document.getElementById('soloOfertas').checked;

  const juegos = document.querySelectorAll('.juego');

  juegos.forEach(juego => {
    const precio = parseFloat(juego.dataset.precio);
    const cat = juego.dataset.categoria;
    const plat = juego.dataset.plataforma;
    const oferta = juego.dataset.oferta === "true";

    const cumpleFiltro =
      precio >= precioMin &&
      precio <= precioMax &&
      (categoria === "" || cat === categoria) &&
      (plataforma === "" || plat === plataforma) &&
      (!soloOfertas || oferta);

    juego.style.display = cumpleFiltro ? "block" : "none";
  });
}
