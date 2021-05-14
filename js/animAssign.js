"use strict";

let start;

var Scene = {
    canvas: undefined,
    canvasContext: undefined,
    sprite: undefined
};

var background = new Image();
background.src = '../assets/sonic/levelBg.png';

var speech = new Image();
speech.src = '../assets/sonic/speech2.png'



Scene.start = function () {
    // Get the canvas and it's context.
    Scene.canvas = document.getElementById("mycanvas");
    Scene.canvasContext = Scene.canvas.getContext("2d");


    // Seup the parrot to be displayed.
    Scene.sprite = sonic;

    // Attach the image to be used for the sprite.
    Scene.sprite.img = new Image();
    Scene.sprite.img.src = Scene.sprite.src;

    // Wait till the parrot image is loaded before starting the animation.
    Scene.sprite.img.onload = function () {
        Scene.sprite.offset = -Scene.sprite.frames[Scene.sprite.frame].frame.w;
        Scene.mainLoop();
    }


};

document.addEventListener('DOMContentLoaded', Scene.start);




// Once the basic HTML document is loaded and its parsing has taken place, start the scene.


Scene.clearCanvas = function () {
    Scene.canvasContext.fillStyle = "white";
    Scene.canvasContext.fillRect(0, 0, Scene.canvas.width, Scene.canvas.height);
};

Scene.mainLoop = function () {
    Scene.clearCanvas();
    Scene.update();
    Scene.draw();

    // Animate at 24 frames a second.
    window.setTimeout(Scene.mainLoop, 50);
};

Scene.update = function () {
    // Set the canvas width to be that of the display Window. Which helps if you resize the window.
    // Scene.canvas.width = window.innerWidth;

    // Set the location of the next frame. 
    Scene.sprite.offset += 15;
    if (Scene.sprite.offset > Scene.canvas.width)
        Scene.sprite.offset = -Scene.sprite.frames[Scene.sprite.frame].frame.w;
};

Scene.draw = function () {

    Scene.canvasContext.drawImage(background, 0, 0);
    Scene.canvasContext.drawImage(Scene.sprite.img,
        Scene.sprite.frames[Scene.sprite.frame].frame.x,
        Scene.sprite.frames[Scene.sprite.frame].frame.y,
        Scene.sprite.frames[Scene.sprite.frame].frame.w,
        Scene.sprite.frames[Scene.sprite.frame].frame.h,
        Scene.sprite.offset, 580, Scene.sprite.frames[Scene.sprite.frame].frame.w,
        Scene.sprite.frames[Scene.sprite.frame].frame.h
    );


    Scene.canvasContext.drawImage(speech, Scene.sprite.offset, 500, );


    //Scene.drawSpeech();



    // Advance to the next frame.
    Scene.sprite.frame++;

    // At the end of the sprite sheet, start at the first frame.
    if (Scene.sprite.frame == Scene.sprite.frames.length)
        Scene.sprite.frame = 0;

};



// Scene.drawSpeech = function () {

//     Scene.canvasContext.drawImage(speech, 560, 400);

// }