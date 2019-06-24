//Dit: 1 unit                Dah: 3 units
// Intra - character space (the gap between dits and dahs within a character): 1 unit
// Inter - character space (the gap between the characters of a word): 3 units
// Word space (the gap between two words): 7 units


//Function wLine is used to write a line to P0
function wLine(n: number) {
    for (let i = 0; i < n; i++) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(300)
    }
}

//Function wDot is used to write a dot to P0
30
function wDot(n: number) {
    for (let i = 0; i < n; i++) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(100)
    }
}

//Function selectLetter is used to go through all letter of alphabet and add letters onto the message to be sent
//Going through each letter is done by pressing button A
//Selecting a letter is done by pressing button B - this also calls the function starting from letter A again
//Pressing both A+B at the same time will exit the function and show the message
function selectLetter(a: number) {
    let alfabet: string = ".ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    basic.showString(alfabet.charAt(a));

    input.onButtonPressed(Button.A, function () {
        selectLetter(a + 1)
    })

    input.onButtonPressed(Button.B, function () {
        basic.clearScreen();
        mesaj += alfabet.charAt(a);
        selectLetter(0);
    })

    if (input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B))
        while (true) {
            for (let a = 0; a < mesaj.length; a++) {
                switch (mesaj.charAt(a)) {
                    case 'A':
                        wDot(1)
                        wLine(1)
                        break;

                    case 'B':
                        wLine(1)
                        wDot(3)
                        break;

                    case 'C':
                        wLine(1)
                        wDot(1)
                        wLine(1)
                        wDot(1)
                        break;

                    case 'D':
                        wLine(1)
                        wDot(2)
                        break;

                    case 'E':
                        wDot(1)
                        break;

                    case 'F':
                        wDot(2)
                        wLine(1)
                        wDot(1)
                        break;

                    case 'G':
                        wLine(2)
                        wDot(1)
                        break;

                    case 'H':
                        wDot(4)
                        break;

                    case 'I':
                        wDot(2)
                        break;

                    case 'J':
                        wDot(1)
                        wLine(3)
                        break;

                    case 'K':
                        wLine(1)
                        wDot(1)
                        wLine(1)
                        break;

                    case 'L':
                        wDot(1)
                        wLine(1)
                        wDot(2)
                        break;

                    case 'M':
                        wLine(2)
                        break;

                    case 'N':
                        wLine(1)
                        wDot(1)
                        break;

                    case 'O':
                        wLine(3)
                        break;

                    case 'P':
                        wDot(1)
                        wLine(2)
                        wDot(1)
                        break;

                    case 'Q':
                        wLine(2)
                        wDot(1)
                        wLine(1)
                        break;

                    case 'R':
                        wDot(1)
                        wLine(1)
                        wDot(1)
                        break;

                    case 'S':
                        wDot(3)
                        break;

                    case 'T':
                        wLine(1)
                        break;

                    case 'U':
                        wDot(2)
                        wLine(1)
                        break;

                    case 'V':
                        wDot(3)
                        wLine(1)
                        break;

                    case 'W':
                        wDot(1)
                        wLine(2)
                        break;

                    case 'X':
                        wLine(1)
                        wDot(2)
                        wLine(1)
                        break;

                    case 'Y':
                        wLine(1)
                        wDot(1)
                        wLine(2)
                        break;

                    case 'Z':
                        wLine(2)
                        wDot(2)
                        break;

                    default:
                        pins.digitalWritePin(DigitalPin.P0, 0)
                        break;
                }
                basic.pause(300)
            }
            basic.pause(700)
        }

}

let mesaj: string = ""
selectLetter(0)