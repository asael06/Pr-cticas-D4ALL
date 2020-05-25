let x = $(document)
x.ready(start)

function start() {
    let x=$(".x")
    x.click(press)
}

function press() {
    let x=$(".x")
    x.css("color","red")
}