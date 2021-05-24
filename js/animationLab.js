"use strict";

var Scene = {
    canvas: undefined,
    canvasContext: undefined,
    sprite: undefined
};

var counter = 0;


Scene.start = function () {
    // Get the canvas and it's context.
    Scene.canvas = document.getElementById("mycanvas");
    Scene.canvasContext = Scene.canvas.getContext("2d");

    // Setup the number to be displayed.
    Scene.sprite = numbers;

    // Attach the image to be used for the sprite.
    Scene.sprite.img = new Image();
    Scene.sprite.img.src = Scene.sprite.src;

    // Wait till the number image is loaded before starting the animation.
    Scene.sprite.img.onload = function () {
        Scene.sprite.offset = -Scene.sprite.frames[Scene.sprite.frame].frame.w;
    }
    Scene.mainLoop();
};


Scene.clearCanvas = function () {
    Scene.canvasContext.fillStyle = "white";
    Scene.canvasContext.fillRect(0, 0, Scene.canvas.width, Scene.canvas.height);
};

Scene.mainLoop = function () {
    Scene.update();
};

Scene.update = function () {

    if (counter < 10) {
        Scene.clearCanvas();
        Scene.draw(counter);

    } else if (counter == 10) {
        Scene.clearCanvas();
        Scene.draw(counter);

    } else if (counter > 10) {
        return;
    }

    counter++;

}

Scene.draw = function (counter) {

    if (counter < 10) {
        Scene.canvasContext.drawImage(Scene.sprite.img,
            Scene.sprite.frames[counter].frame.x,
            Scene.sprite.frames[counter].frame.y,
            Scene.sprite.frames[counter].frame.w,
            Scene.sprite.frames[counter].frame.h,
            50, 50,
            Scene.sprite.frames[counter].frame.w,
            Scene.sprite.frames[counter].frame.h);

        window.setTimeout(Scene.mainLoop, 500);

    } else if (counter == 10) {

        Scene.canvasContext.drawImage(Scene.sprite.img,
            Scene.sprite.frames[1].frame.x,
            Scene.sprite.frames[1].frame.y,
            Scene.sprite.frames[1].frame.w,
            Scene.sprite.frames[1].frame.h,
            10, 50,
            Scene.sprite.frames[1].frame.w,
            Scene.sprite.frames[1].frame.h);

        Scene.canvasContext.drawImage(Scene.sprite.img,
            Scene.sprite.frames[0].frame.x,
            Scene.sprite.frames[0].frame.y,
            Scene.sprite.frames[0].frame.w,
            Scene.sprite.frames[0].frame.h,
            90, 50,
            Scene.sprite.frames[0].frame.w,
            Scene.sprite.frames[0].frame.h);

        window.setTimeout(Scene.mainLoop, 500);

    } else {
        return;
    }

};
