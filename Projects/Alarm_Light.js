basic.forever(function () {
    let lightLevel = Math.round(Math.map(input.lightLevel(), 0, 255, 0, 9))
    basic.pause(2000)
    if (lightLevel >= 5) {
        basic.showNumber(lightLevel)
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        basic.showNumber(lightLevel)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})