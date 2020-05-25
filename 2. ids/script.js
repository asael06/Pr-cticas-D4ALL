let x = $(document)
x.ready(btns)

function btns(){
    let x = $("#uno")
    x.css("text-decoration","none")
    x.click(presionar)
    x = $("#dos")
    x.click(() => {alert("hola mundo")})   
}

function presionar(){
    alert("hola xD")
}