"use strict"

var Scene = {
    canvas: undefined,
    canvasContext: undefined,
    sprite: undefined
};

Scene.start = function{
    Scene.canvas = document.getElementById("mycanvas");
    Scene.canvasContext = Scene.canvas.getContext("2d");

    Scene.sprite = numbers;
}