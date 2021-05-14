var canvas = document.getElementById("mycanvas");
var context = canvas.getContext("2d");

var apple = new Image();
apple.src = '/assets/voice/apple.png';

var grape = new Image();
grape.src = '/assets/voice/grape.png';

var kiwi = new Image();
kiwi.src = '/assets/voice/kiwi.png';

var mango = new Image();
mango.src = '/assets/voice/mango.png';

var lemon = new Image();
lemon.src = '/assets/voice/lemon.png';

var dennis = document.getElementById('dennisAudio');
var help = document.getElementById('help');

var lBtn = document.getElementById('speakBtn');



lBtn.onclick = function () {

    if (lBtn.innerText === "Listen") {
        lBtn.innerText = "Stop Listening";
        annyang.start()

    } else if (lBtn.innerText === "Stop Listening") {
        lBtn.innerText = "Listen"
        annyang.abort();
    }

}

if (annyang) {
    var commands = {
        'apple': function () {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(apple, 200, 200);
            console.log("apple");
        },
        'grape': function () {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(grape, 200, 200);
            console.log("grape");
        },

        'kiwi': function () {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(kiwi, 200, 200);
            console.log("kiwi");
        },

        'lemon': function () {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(lemon, 200, 200);
            console.log("lemon");
        },

        'mango': function () {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(mango, 200, 200);
            console.log("mango");
        },

        'about': function () {
            dennis.play();
            console.log("about");

        },

        'help': function () {
            help.play();
            console.log("Help");
        }


    };
}


annyang.addCommands(commands);