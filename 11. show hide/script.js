let info = $("#descripcion")

function showInfo(){
    info.show("fast")
}

function hideInfo(){
    info.hide("slow")
}

function loadEvents(){
    let x=$("#boton2")
    x.click(showInfo)
    x=$("#boton1")
    x.click(hideInfo)
}

let doc = $(document)
doc.ready(loadEvents)