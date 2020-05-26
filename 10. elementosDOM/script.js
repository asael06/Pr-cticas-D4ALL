var lista = $("ul")

function deleteLista(){
    lista.empty()
}

function restaurar(){
    
    lista.html("<li>elemento 1</li><li>elemento 2</li><li>elemento 3</li><li>elemento 4</li><li>elemento 5</li><li>elemento 6</li>")
}

function addLastItem(){
    lista.append("<li>nuevo elemento final</li>")
}

function addFirstItem(){
    lista.prepend("<li>nuevo elemento al principio</li>")
}

function removeLastItem(){   
    var item = $("li") 
    let cant = item.length
    item = item.eq(cant-1)
    item.remove()
}

function removeFirstItem(){
    var item = $("li")
    item = item.eq(0)
    item.remove()
}

function removeFirstSecond(){
    var item = $("li")
    item = item.slice(0,2)
    item.remove()
} 

function removeLastTwo(){
    var item = $("li")
    item = item.slice(item.length - 2)
    item.remove()
}

function cargarEventos(){
    let x=$("#boton1")
    x.click(deleteLista)
    x=$("#boton2")
    x.click(restaurar)
    x=$("#boton3")
    x.click(addLastItem)
    x=$("#boton4")
    x.click(addFirstItem)
    x=$("#boton5")
    x.click(removeLastItem)
    x=$("#boton6")
    x.click(removeFirstItem)
    x=$("#boton7")
    x.click(removeFirstSecond)
    x=$("#boton8")
    x.click(removeLastTwo)    
}


let x = $(document)
x.ready(cargarEventos)