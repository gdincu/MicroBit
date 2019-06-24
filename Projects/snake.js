//Intro
////////////////////////////////////////////////
let img1 = images.createImage(`
. . . . .
. . . # #
. . # . .
# # . . .
. . . . .
`);

let img2 = images.createImage(`
. . . . .
# . . . .
. # # . .
. . . # #
. . . . .
`);

for (let i = 0; i < 5; i++) {
    img1.scrollImage(1, 50)
    img2.scrollImage(1, 50)
}
////////////////////////////////////////////////

//Dificulty selector
////////////////////////////////////////////////
input.onButtonPressed(Button.B, function () {
    normal();
});

input.onButtonPressed(Button.A, function () {
    easy();
});

input.onButtonPressed(Button.AB, function () {
    hard();
});
////////////////////////////////////////////////

//Creates the snake
let varTemp = game.createSprite(0, 2);

// Functions
////////////////////////////////////////////////
function easy() {

    basic.forever(function () {
        //Moves 1 space every 2.5 seconds
        basic.pause(2500);
        varTemp.move(1);

        //Moves at 90 degrees - requires 1 tap for a 90 degrees turn
        input.onButtonPressed(Button.B, function () {
            varTemp.turn(Direction.Right, 90);
        });

        //Moves at 90 degrees - requires 1 tap for a 90 degrees turn
        input.onButtonPressed(Button.A, function () {
            varTemp.turn(Direction.Left, 90);
        });
    });

};

function normal() {

    basic.forever(function () {
        //Moves 1 space every 1.5 seconds
        basic.pause(1500);
        varTemp.move(1);

        //Moves at 90 degrees - requires 1 tap for a 90 degrees turn
        input.onButtonPressed(Button.B, function () {
            varTemp.turn(Direction.Right, 90);
        });

        //Moves at 90 degrees - requires 1 tap for a 90 degrees turn
        input.onButtonPressed(Button.A, function () {
            varTemp.turn(Direction.Left, 90);
        });
    });

};

function hard() {

    basic.forever(function () {
        //Moves 1 space every 0.8 seconds
        basic.pause(800);
        varTemp.move(1);

        //Moves at 45 degrees - requires 2 taps for a 90 degrees turn
        input.onButtonPressed(Button.B, function () {
            varTemp.turn(Direction.Right, 45);
        });

        //Moves at 45 degrees - requires 2 taps for a 90 degrees turn
        input.onButtonPressed(Button.A, function () {
            varTemp.turn(Direction.Left, 45);
        });
    });

};
////////////////////////////////////////////////