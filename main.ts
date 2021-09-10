let punto = 4
basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        led.plot(0, punto - index)
        basic.pause(500)
        led.unplot(0, punto - index)
    }
    for (let index = 0; index <= 4; index++) {
        led.plot(index, punto - 4)
        basic.pause(500)
        led.unplot(index, punto - 4)
    }
    for (let index = 0; index <= 4; index++) {
        led.plot(punto, index)
        basic.pause(500)
        led.unplot(punto, index)
    }
    for (let index = 0; index <= 4; index++) {
        led.plot(punto - index, punto)
        basic.pause(500)
        led.unplot(punto - index, punto)
    }
})
