let x = $(document)
x.ready(start)

function start(){
    let x = $("#boton1")
    x.click(extraerTexto)
    x = $("#boton2")
    x.click(modificarTexto)
    x = $("#boton3")
    x.click(modificarDatosTabla)
}

function extraerTexto(){
    let x = $("#parrafo1")
    alert(x.text())
}

function modificarTexto(){
    let x = $("#parrafo1")
    x.text("nuevo texto del párrafo")
}

function modificarDatosTabla(){
    let x=$("td")
    x.text("Texto nuevo")
}