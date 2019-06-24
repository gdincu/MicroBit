basic.forever(function () {
    let xStart = input.acceleration(Dimension.X)
    let yStart = input.acceleration(Dimension.Y)
    basic.pause(1000)
    let xEnd = input.acceleration(Dimension.X)
    let yEnd = input.acceleration(Dimension.Y)
    
    if (xStart - xEnd >= 20 || yStart - yEnd >= 20 || input.acceleration(Dimension.Strength) > 20) {
        music.beginMelody(music.builtInMelody(Melodies.Punchline), MelodyOptions.OnceInBackground)
        basic.pause(10000)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})