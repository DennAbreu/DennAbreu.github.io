function drawing() {


    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");

    //Sky
    context.fillStyle = '#84C1F0';
    context.fillRect(0, 0, canvas.width, canvas.height);

    //Sun
    context.fillStyle = "yellow";
    context.beginPath();
    context.arc(35, 75, 125, 0, 2 * Math.PI);
    context.fill();
    context.closePath();

    //Clouds 

    var i;
    var x = 55; //x coordinate changes per loop iteration

    //This loop generates the same set of clouds and spreads them across the X axis of the canvas
    for (i = 0; i < 4; i++) {

        // combine three white circles closely together to form a single cloud. X coordinates change.
        context.fillStyle = "white";
        context.beginPath();
        context.arc(x, 500, 40, 0, 2 * Math.PI);
        context.arc(x + 40, 500, 40, 0, 2 * Math.PI);
        context.arc(x + 80, 500, 40, 0, 2 * Math.PI);
        context.fill();
        context.closePath();

        //Ensures the next cloud is drawn directly ontop of the one before it by increasing X coordinates.
        x = x + 250;

    }

    //PLANE 

    //Front of the Plane
    context.fillStyle = "white";
    context.beginPath();
    context.arc(700, 340, 40, 0, 2 * Math.PI);
    context.fill();
    context.closePath();

    //Body of the plane
    context.fillStyle = "white";
    context.fillRect(300, 300, 400, 80);

    //Tail
    context.fillStyle = "green";
    context.beginPath();
    context.moveTo(375, 300);
    context.lineTo(325, 250);
    context.lineTo(300, 250);
    context.lineTo(300, 300);
    context.lineTo(375, 300);
    context.stroke();
    context.fill();
    context.closePath();

    //Left Wing
    context.fillStyle = "green";
    context.beginPath();

    context.moveTo(550, 300);
    context.lineTo(450, 250);
    context.lineTo(400, 250);
    context.lineTo(475, 300);
    context.lineTo(550, 300);

    context.stroke();
    context.fill();
    context.closePath();

    //Right Wing

    context.fillStyle = "green";
    context.beginPath();

    context.moveTo(550, 360);
    context.lineTo(475, 450);
    context.lineTo(430, 450);
    context.lineTo(490, 360);
    context.stroke();
    context.fill();
    context.closePath();


    //Text on Bottom Left
    context.font = "30px Arial";
    context.fillStyle = "white";
    var line = 17;
    var height = 35;
    context.fillText("~~In the clouds~~", 10, height * line);

    //Cockpit Window

    context.fillStyle = '#a8ccd7';
    context.beginPath();
    context.arc(699, 340, 40, .01, Math.PI, true);
    context.fill();
    context.closePath();

    //Passenger windows

    context.fillStyle = '#a8ccd7';
    context.beginPath();
    context.arc(550, 337, 15, 0, 2 * Math.PI);
    context.arc(510, 337, 15, 0, 2 * Math.PI);
    context.arc(470, 337, 15, 0, 2 * Math.PI);
    context.fill();
    context.closePath();

    //Flames Behind Plane
    context.fillStyle = "orange";
    context.beginPath();
    context.moveTo(300, 320);
    context.lineTo(250, 300);
    context.lineTo(290, 330)
    context.lineTo(240, 330);
    context.lineTo(270, 340);
    context.lineTo(220, 340);
    context.lineTo(280, 350);
    context.lineTo(245, 350);
    context.lineTo(300, 365);
    context.fill();
    context.stroke();
}
//context.lineTo();

document.addEventListener("DOMContentLoaded", drawing);