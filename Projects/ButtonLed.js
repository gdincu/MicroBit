function readP0() {
    if (pins.digitalReadPin(DigitalPin.P0) == 1)
        basic.showIcon(IconNames.Yes)
    else
        basic.showIcon(IconNames.No)
}

while (true) {
    readP0();
    basic.pause(300);
}