var enabled = true;
var channelCount; 

window.onload = function() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    canvas.style.backgroundColor = "black";
    document.getElementById('greet').innerHTML = "Off :(";
};

function draw() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    channelCount = 0;

    if (enabled == true){
    canvas.style.backgroundColor = "white";
    document.getElementById('greet').innerHTML = "Welcome";
    static();
    loop();
    console.log(channelCount);
    } else {
        canvas.style.backgroundColor = "black";
    }
};

function static() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        idata = ctx.createImageData(w, h),
        buffer32 = new Uint32Array(idata.data.buffer),
        len = buffer32.length,
        i = 0;

    for (i; i < len; i++)
        if (Math.random() < 0.5) buffer32[i] = 0xff000000;

    ctx.putImageData(idata, 0, 0);
};

var toggle = true;

function loop() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    toggle = !toggle;
    if (toggle) {
        requestAnimationFrame(loop);
        return;
    }
    static(ctx);
    requestAnimationFrame(loop);
};
//Will render different things on canvas depending on the channel the user is on
function checkChannel() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    var current_channel = document.getElementById('select').value;


    switch (current_channel) {
        case '1':
            canvas.style.backgroundImage = "";
            draw();
            canvas.style.backgroundColor = 'yellow';
            channelCount = 1;
            console.log(channelCount);
            document.getElementById('greet').innerHTML = "You are viewing channel " + current_channel;
            break;
        case '2':
            canvas.style.backgroundImage = "";
            draw();
            canvas.style.backgroundColor = 'blue';
            channelCount = 2;
            console.log(channelCount);
            document.getElementById('greet').innerHTML = "You are viewing channel " + current_channel;
            break;
        case '3':
            canvas.style.backgroundImage = "";
            draw();
            canvas.style.backgroundColor = 'red';
            canvas.style.color = 'black';
            channelCount = 3;
            console.log(channelCount);
            document.getElementById('greet').innerHTML = "You are viewing channel " + current_channel;
            break;
        case '4':
            draw();
            canvas.style.backgroundColor = 'black';
            canvas.style.backgroundImage = "url('IMG/01.gif')";
            channelCount = 4;
            console.log(channelCount);
            document.getElementById('greet').innerHTML = "A E S T H E T I C S "; 
            break
        case '5':
            canvas.style.backgroundColor = null
            canvas.style.backgroundImage = "url('IMG/jtrain.jpg')";
            channelCount = 5;
            console.log(channelCount);
            break;
        default:
            document.getElementById('greet').innerHTML = ":D";
    }
};

function turnOff() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    canvas.style.backgroundColor = 'black';
    canvas.style.backgroundImage = "";
    document.getElementById('greet').innerHTML = "Off :(";

};

function channelUp() {
    var current_channel = channelCount.value;

    channelCount++;
    console.log(channelCount);
    checkChannel();

};

function channelDown() {
    var current_channel = channelCount.value;

    channelCount--;
    console.log(channelCount);
    checkChannel();

};



