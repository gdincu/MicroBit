//Method to determine whether P0 is either 1 or 0
function readPin0() {
    if (pins.digitalReadPin(DigitalPin.P0) != 0) return true;
    else return false;
}

basic.forever(function () {
//will use the electric current from P1 to give current to P0
pins.digitalWritePin(DigitalPin.P1, 1); 

    if (readPin0()) {
        basic.pause(2000)

        for (let i = 0; i < 3; i++) {
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.pause(100)
            pins.digitalWritePin(DigitalPin.P2, 0)
        }
    }
})