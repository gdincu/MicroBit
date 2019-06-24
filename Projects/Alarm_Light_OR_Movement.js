function updateLight() { //Not used in this instance due to poor lighting conditions
    let lightStart = input.lightLevel();
    basic.pause(300)
    let lightEnd = input.lightLevel();
    if (lightStart - lightEnd > 15) return true;
    else return false;
}

function updateAcc() {
    let AccStart = input.acceleration(Dimension.X) + input.acceleration(Dimension.Y) + input.acceleration(Dimension.Z);
    basic.pause(2000)
    let AccEnd = input.acceleration(Dimension.X) + input.acceleration(Dimension.Y) + input.acceleration(Dimension.Z);
    if (AccStart - AccEnd > 15) return true;
    else return false;
}

while (true) {
    if (updateAcc()) {
        music.beginMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
        bluetooth.uartWriteString("DA");
    }
}