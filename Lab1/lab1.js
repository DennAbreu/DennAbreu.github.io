
//Provided to us by professor
var fruit = [
    { name: "Apple", quantity: 20, color: "red" },
    { name: "Orange", quantity: 10, color: "orange" },
    { name: "Banana", quantity: 15, color: "gold" },
    { name: "Kiwi", quantity: 3, color: "green" },
    { name: "Blueberry", quantity: 5, color: "blue" },
    { name: "Grapes", quantity: 8, color: "purple" }
];

var heightMult = 20; //Height multiplier to make the bars larger and easier to see on screen.
var xPos = 5; //Used in code to move the next fruit over so it will not overlap
var textPos = 10; // Used in code to move the text position over
var line = 10; //Determines placement of Text in each bar
var barWidth = 70; //Width of each bar in the graph

function loadData() {

    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");


    //Make background black
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);

    //Draw Bars using a loop

    context.translate(0, canvas.height); //Start from bottom left

    for (i in fruit) {

        context.fillStyle = fruit[i].color; //Takes the color of  the ith element of the JSON.
        context.fillRect(xPos, 0, barWidth, -fruit[i].quantity * heightMult); //Takes the quanitity from the JSON and multiplies it by the heightMult var to make it larger.
        xPos += 85; //Moves the x position of the next bar on the graph so they do not overlap

        //Text
        context.font = "15px Arial";
        context.fillStyle = "white";
        context.fillText(fruit[i].name, textPos, -line * 2);
        context.fillText(fruit[i].quantity.toString(), textPos, -line * 4);
        textPos += 85;  //Move text position over for the next bar

    }


}

document.addEventListener("DOMContentLoaded", loadData);