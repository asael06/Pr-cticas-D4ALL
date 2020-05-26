
function asociar(){
    let x = $("#descripcion")
    x.addClass("recuadro")
}

function quitar(){
    let x = $("#descripcion")
    x.removeClass("recuadro")
}

function inicializar(){
    let x = $("#boton1")
    x.click(asociar)
    x = $("#boton2")
    x.click(quitar)
}

let x = $(document)
x.ready(inicializar)