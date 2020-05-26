let x = $(document)
x.ready(eventos)
var y = $("#tabla")

function eventos(){
    let x=$("#boton1")
    x.click(addBorder)
    x=$("#boton2")
    x.click(getBorder)
    x=$("#boton3")
    x.click(deleteBorder)
}

function addBorder(){
    y.attr("border","1")
}

function getBorder(){
    if(y.attr("border") != undefined)
        alert(y.attr("border"))
    else alert("No está definida la propiedad border en la tabla")
}

function deleteBorder(){
    y.removeAttr("border")
}