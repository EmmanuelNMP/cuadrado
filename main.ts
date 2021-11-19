function ABAJO_X0 () {
    for (let index = 0; index <= 4; index++) {
        if (boton_A == 1) {
            led.plot(0, index)
            basic.pause(500)
            led.unplot(0, index)
            POSX = 0
            POSY = index
            arribaX0 = 0
            abajox0 = 1
            izquierday0 = 0
            derechay0 = 0
            arribax4 = 0
            abajox4 = 0
            izquierday4 = 0
            derechay4 = 0
        }
    }
}
input.onButtonPressed(Button.A, function () {
    botón_B = 0
    boton_A = 1
    if (boton_A == 1) {
        if (arribaX0 == 1) {
            interseptado = punto - POSY
            for (let index = 0; index <= interseptado; index++) {
                led.plot(0, index + interseptado)
                basic.pause(500)
                led.unplot(0, index + interseptado)
                POSX = 0
                POSY = index + interseptado
                arribaX0 = 0
                abajox0 = 1
                izquierday0 = 0
                derechay0 = 0
                arribax4 = 0
                abajox4 = 0
                izquierday4 = 0
                derechay4 = 0
            }
            DERECHA_Y4()
            ARRIBA_X4()
            IZQUIERDA_Y0()
        } else if (derechay0 == 1) {
            interseptado = punto - POSX
            for (let index = 0; index <= interseptado; index++) {
                led.plot(interseptado - index, 0)
                basic.pause(500)
                led.unplot(interseptado - index, 0)
                POSX = interseptado - index
                POSY = 0
                arribaX0 = 0
                abajox0 = 0
                izquierday0 = 1
                derechay0 = 0
                arribax4 = 0
                abajox4 = 0
                izquierday4 = 0
                derechay4 = 0
            }
            ABAJO_X0()
            DERECHA_Y4()
            ARRIBA_X4()
        } else if (abajox4 == 1) {
            interseptado = punto - POSY
            for (let index = 0; index <= 4; index++) {
                led.plot(punto, interseptado - index)
                basic.pause(500)
                led.unplot(punto, interseptado - index)
                POSX = punto
                POSY = interseptado - index
                arribaX0 = 0
                abajox0 = 0
                izquierday0 = 0
                derechay0 = 0
                arribax4 = 1
                abajox4 = 0
                izquierday4 = 0
                derechay4 = 0
            }
            IZQUIERDA_Y0()
            ABAJO_X0()
            DERECHA_Y4()
        } else if (izquierday4 == 1) {
            interseptado = punto - POSX
            for (let index = 0; index <= interseptado; index++) {
                led.plot(POSX + index, punto)
                basic.pause(500)
                led.unplot(POSX + index, punto)
                POSX = POSX + index
                POSY = punto
                arribaX0 = 0
                abajox0 = 0
                izquierday0 = 0
                derechay0 = 0
                arribax4 = 0
                abajox4 = 0
                izquierday4 = 0
                derechay4 = 1
            }
            ARRIBA_X4()
            IZQUIERDA_Y0()
            ABAJO_X0()
        }
    }
})
function ARRIBA_X4 () {
    for (let index = 0; index <= 4; index++) {
        if (boton_A == 1) {
            led.plot(punto, punto - index)
            basic.pause(500)
            led.unplot(punto, punto - index)
            POSX = punto
            POSY = index
            arribaX0 = 0
            abajox0 = 0
            izquierday0 = 0
            derechay0 = 0
            arribax4 = 1
            abajox4 = 0
            izquierday4 = 0
            derechay4 = 0
        }
    }
}
function DERECHA_Y0 () {
    for (let index = 0; index <= 4; index++) {
        if (botón_B == 1) {
            led.plot(index, 0)
            basic.pause(500)
            led.unplot(index, 0)
            POSX = index
            POSY = 0
            arribaX0 = 0
            abajox0 = 0
            izquierday0 = 0
            derechay0 = 1
            arribax4 = 0
            abajox4 = 0
            izquierday4 = 0
            derechay4 = 0
        }
    }
}
function ARRIBA_X0 () {
    for (let index = 0; index <= 4; index++) {
        if (botón_B == 1) {
            led.plot(0, punto - index)
            basic.pause(500)
            led.unplot(0, punto - index)
            POSX = 0
            POSY = punto - index
            arribaX0 = 1
            abajox0 = 0
            izquierday0 = 0
            derechay0 = 0
            arribax4 = 0
            abajox4 = 0
            izquierday4 = 0
            derechay4 = 0
        }
    }
}
function IZQUIERDA_Y4 () {
    for (let index = 0; index <= 4; index++) {
        if (botón_B == 1) {
            led.plot(punto - index, punto)
            basic.pause(500)
            led.unplot(punto - index, punto)
            POSX = punto - index
            POSY = punto
            arribaX0 = 0
            abajox0 = 0
            izquierday0 = 0
            derechay0 = 0
            arribax4 = 0
            abajox4 = 0
            izquierday4 = 1
            derechay4 = 0
        }
    }
}
input.onButtonPressed(Button.B, function () {
    botón_B = 1
    boton_A = 0
    if (botón_B == 1) {
        if (abajox0 == 1) {
            interseptado = POSY
            for (let index = 0; index <= interseptado; index++) {
                led.plot(0, POSY - index)
                basic.pause(500)
                led.unplot(0, POSY - index)
                POSX = 0
                POSY = POSY - index
                arribaX0 = 1
                abajox0 = 0
                izquierday0 = 0
                derechay0 = 0
                arribax4 = 0
                abajox4 = 0
                izquierday4 = 0
                derechay4 = 0
            }
            DERECHA_Y0()
            ABAJO_X4()
            IZQUIERDA_Y4()
        } else if (izquierday0 == 1) {
            interseptado = punto - POSX
            for (let index = 0; index <= interseptado; index++) {
                led.plot(POSX + index, 0)
                basic.pause(500)
                led.unplot(POSX + index, 0)
                POSX = POSX + index
                POSY = 0
                arribaX0 = 0
                abajox0 = 0
                izquierday0 = 0
                derechay0 = 1
                arribax4 = 0
                abajox4 = 0
                izquierday4 = 0
                derechay4 = 0
            }
            ABAJO_X4()
            IZQUIERDA_Y4()
            ARRIBA_X0()
        } else if (arribax4 == 1) {
            interseptado = punto - POSY
            for (let index = 0; index <= 4; index++) {
                led.plot(punto, POSY + index)
                basic.pause(500)
                led.unplot(punto, POSY + index)
                POSX = punto
                POSY = POSY + index
                arribaX0 = 0
                abajox0 = 0
                izquierday0 = 0
                derechay0 = 0
                arribax4 = 0
                abajox4 = 1
                izquierday4 = 0
                derechay4 = 0
            }
            IZQUIERDA_Y4()
            ARRIBA_X0()
            DERECHA_Y0()
        } else if (derechay4 == 1) {
            interseptado = POSX
            for (let index = 0; index <= interseptado; index++) {
                led.plot(POSX - index, punto)
                basic.pause(500)
                led.unplot(POSX - index, punto)
                POSX = POSX - index
                POSY = punto
                arribaX0 = 0
                abajox0 = 0
                izquierday0 = 0
                derechay0 = 0
                arribax4 = 0
                abajox4 = 0
                izquierday4 = 1
                derechay4 = 0
            }
            ARRIBA_X0()
            DERECHA_Y0()
            ABAJO_X4()
        }
    }
})
function ABAJO_X4 () {
    for (let index = 0; index <= 4; index++) {
        if (botón_B == 1) {
            led.plot(punto, index)
            basic.pause(500)
            led.unplot(punto, index)
            POSX = punto
            POSY = index
            arribaX0 = 0
            abajox0 = 0
            izquierday0 = 0
            derechay0 = 0
            arribax4 = 0
            abajox4 = 1
            izquierday4 = 0
            derechay4 = 0
        }
    }
}
function IZQUIERDA_Y0 () {
    for (let index = 0; index <= 4; index++) {
        if (boton_A == 1) {
            led.plot(punto - index, 0)
            basic.pause(500)
            led.unplot(punto - index, 0)
            POSX = punto - index
            POSY = 0
            arribaX0 = 0
            abajox0 = 0
            izquierday0 = 1
            derechay0 = 0
            arribax4 = 0
            abajox4 = 0
            izquierday4 = 0
            derechay4 = 0
        }
    }
}
function DERECHA_Y4 () {
    for (let index = 0; index <= 4; index++) {
        if (boton_A == 1) {
            led.plot(index, punto)
            basic.pause(500)
            led.unplot(index, punto)
            POSX = index
            POSY = punto
            arribaX0 = 0
            abajox0 = 0
            izquierday0 = 0
            derechay0 = 0
            arribax4 = 0
            abajox4 = 0
            izquierday4 = 0
            derechay4 = 1
        }
    }
}
let interseptado = 0
let POSY = 0
let POSX = 0
let derechay4 = 0
let izquierday4 = 0
let arribax4 = 0
let abajox4 = 0
let izquierday0 = 0
let derechay0 = 0
let abajox0 = 0
let arribaX0 = 0
let punto = 0
let botón_B = 0
let boton_A = 0
boton_A = 0
botón_B = 1
punto = 4
arribaX0 = 1
abajox0 = 0
derechay0 = 0
izquierday0 = 0
abajox4 = 0
arribax4 = 0
izquierday4 = 0
derechay4 = 0
ARRIBA_X0()
DERECHA_Y0()
ABAJO_X4()
IZQUIERDA_Y4()
