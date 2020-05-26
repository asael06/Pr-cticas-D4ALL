let x = $(document)
x.ready(iniciar)

function iniciar(){
    let x = $("a")
    x.hover(entrar,salir)
}

function entrar(){
    $(this).css("color","red")
}

function salir(){
    $(this).css("color","#fff")
}