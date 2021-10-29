function ABAJO_X0 () {
    for (let index = 0; index <= 4; index++) {
        led.plot(0, index)
        basic.pause(500)
        led.unplot(0, index)
        POSX = 0
        POXY = index
        abajox0 = 1
        arribaX0 = 0
        derechay0 = 0
        abajox4 = 0
        izquierda = 0
    }
}
input.onButtonPressed(Button.A, function () {
    DERECHA_Y4()
    ARRIBA_X4()
    IZQUIERDA_Y0()
    ABAJO_X0()
})
function ARRIBA_X4 () {
    for (let index = 0; index <= 4; index++) {
        led.plot(punto, punto - index)
        basic.pause(500)
        led.unplot(punto, punto - index)
        POSX = punto
        POXY = index
        abajox4 = 1
        izquierda = 0
        derechay0 = 0
        arribaX0 = 0
    }
}
function DERECHA_Y0 () {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 0)
        basic.pause(500)
        led.unplot(index, 0)
        POSX = index
        POXY = 0
        derechay0 = 1
        arribaX0 = 0
        arribaX0 = 0
        abajox4 = 0
        izquierda = 0
    }
}
function ARRIBA_X0 () {
    for (let index = 0; index <= 4; index++) {
        led.plot(0, punto - index)
        basic.pause(500)
        led.unplot(0, punto - index)
        POSX = 0
        POXY = punto - index
        arribaX0 = 1
        abajox0 = 0
        derechay0 = 0
        abajox4 = 0
        izquierda = 0
    }
}
function IZQUIERDA_Y4 () {
    for (let index = 0; index <= 4; index++) {
        led.plot(punto - index, punto)
        basic.pause(500)
        led.unplot(punto - index, punto)
        POSX = punto - index
        POXY = punto
        izquierda = 1
        derechay0 = 0
        abajox4 = 0
        arribaX0 = 0
    }
}
input.onButtonPressed(Button.B, function () {
    ARRIBA_X0()
    DERECHA_Y0()
    ABAJO_X4()
    IZQUIERDA_Y4()
})
function ABAJO_X4 () {
    for (let index = 0; index <= 4; index++) {
        led.plot(punto, index)
        basic.pause(500)
        led.unplot(punto, index)
        POSX = punto
        POXY = index
        abajox4 = 1
        izquierda = 0
        derechay0 = 0
        arribaX0 = 0
    }
}
function IZQUIERDA_Y0 () {
    for (let index = 0; index <= 4; index++) {
        led.plot(punto - index, 0)
        basic.pause(500)
        led.unplot(punto - index, 0)
        POSX = punto - index
        POXY = 0
        izquierday0 = 1
        derechay0 = 0
        arribaX0 = 0
        abajox4 = 0
        izquierda = 0
    }
}
function DERECHA_Y4 () {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, punto)
        basic.pause(500)
        led.unplot(index, punto)
        POSX = index
        POXY = punto
        izquierda = 1
        derechay0 = 0
        abajox4 = 0
        arribaX0 = 0
    }
}
let POXY = 0
let POSX = 0
let izquierda = 0
let abajox4 = 0
let izquierday0 = 0
let derechay0 = 0
let abajox0 = 0
let arribaX0 = 0
let punto = 0
punto = 4
arribaX0 = 1
abajox0 = 0
derechay0 = 0
izquierday0 = 0
abajox4 = 0
izquierda = 0
ARRIBA_X0()
DERECHA_Y0()
ABAJO_X4()
IZQUIERDA_Y4()
