function filtrarJuegos() {
  const precioMin = parseFloat(document.getElementById('precioMin').value) || 0;
  const precioMax = parseFloat(document.getElementById('precioMax').value) || Infinity;
  const categoria = document.getElementById('categoria').value.toLowerCase(); // evaluamos clases ahora
  const plataforma = document.getElementById('plataforma').value.toLowerCase();
  const soloOfertas = document.getElementById('soloOfertas').checked;

  const juegos = document.querySelectorAll('.juego');

  juegos.forEach(juego => {
    const precio = parseFloat(juego.dataset.precio);
    const plat = juego.dataset.plataforma;
    const oferta = juego.dataset.oferta === "true";

    const cumpleCategoria = categoria === "" || juego.classList.contains(categoria);
    const cumplePlataforma = plataforma === "" || plat === plataforma;
    const cumpleOferta = !soloOfertas || oferta;
    const cumplePrecio = precio >= precioMin && precio <= precioMax;

    const mostrar = cumpleCategoria && cumplePlataforma && cumpleOferta && cumplePrecio;

    juego.style.display = mostrar ? "block" : "none";
  });
}
