let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  let x = $("#boton1");
  x.click(presionBoton)
}

function presionBoton() {
  alert("Se presionó el botón");
}