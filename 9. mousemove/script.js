let x = $(document)
x.ready(iniciar)

function iniciar(){
    let x = $(document)
    x.mousemove(moverMS)
}

function moverMS(event){
    let x = $("#x")
    x.text("coordenada X: " + event.clientX)
    x = $("#y")
    x.text("coordenada y: " + event.clientY)
}