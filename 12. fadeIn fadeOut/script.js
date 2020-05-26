let info = $("#descripcion")

function fadeInn(){
    info.fadeIn("slow")
}

function fadeOutt(){
    info.fadeOut("slow")
}

function loadEvents(){
    let x = $("#boton1")
    x.click(fadeOutt)
    x = $("#boton2")
    x.click(fadeInn)
}

let x = $(document)
x.ready(loadEvents)

