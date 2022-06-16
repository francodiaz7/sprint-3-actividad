let titulo = document.getElementsByClassName("card-titulo");
let compra = document.getElementsByClassName("compra-precio");
let venta = document.getElementsByClassName("venta-precio");
let icon = document.getElementsByClassName("bi");
let variacion = document.getElementsByClassName("variacion");
let actualizado = document.getElementsByClassName("card-footer");

function traer(n, ndos) {
  if (ndos === undefined) ndos = n;
  fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    .then((res) => res.json())
    .then((data) => {
      titulo[n].innerText = `${data[ndos].casa.nombre}`;
      compra[n].innerText = `$ ${data[ndos].casa.compra}`;
      venta[n].innerText = `$ ${data[ndos].casa.venta}`;
      variacion[n].innerText = `VARIACIÓN ${data[ndos].casa.variacion}`;
      actualizado[n].innerText = `ACTUALIZADO: ${new Date().toLocaleString()}`;
    });
}

traer(0);
traer(1);
traer(2, 3);
traer(3, 4);
