var enabled = true;

window.onload = function() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    var current_channel = Cookies.get('channel_select');

    canvas.style.backgroundColor = "black";
    console.log(current_channel);
    document.getElementById('greet').innerHTML = "Off :(";
};

function draw() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    if (enabled == true){
    canvas.style.backgroundColor = "white";
    document.getElementById('greet').innerHTML = "Welcome";
    static();
    loop();
    console.log('true');
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

function rememberChannel() {
    var channel = document.getElementById('select').value;
    var current_channel = Cookies.get('channel_select');
    var num = console.log(current_channel);

    Cookies.set('channel_select', channel);
    checkChannel();
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

function checkChannel() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    var current_channel = Cookies.get('channel_select');

    switch (current_channel) {
        case '1':
            canvas.style.backgroundImage = "";
            draw();
            canvas.style.backgroundColor = 'yellow';
            document.getElementById('greet').innerHTML = "You are viewing channel " + current_channel;
            break;
        case '2':
            canvas.style.backgroundImage = "";
            draw();
            canvas.style.backgroundColor = 'blue';
            document.getElementById('greet').innerHTML = "You are viewing channel " + current_channel;
            break;
        case '3':
            canvas.style.backgroundImage = "";
            draw();
            canvas.style.backgroundColor = 'red';
            canvas.style.color = 'black';
            document.getElementById('greet').innerHTML = "You are viewing channel " + current_channel;
            break;
        case '4':
            draw();
            canvas.style.backgroundColor = 'black';
            floralShoppe();
            document.getElementById('greet').innerHTML = "A E S T H E T I C S "; // need to clear canvas
            break
        default:
            document.getElementById('greet').innerHTML = ":D";
    }
};

function turnOff() {
    // location.reload(true)
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    canvas.style.backgroundColor = 'black';
    canvas.style.backgroundImage = "";
    document.getElementById('greet').innerHTML = "Off :(";

};

function floralShoppe(){
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
   
    canvas.style.backgroundImage = "url('IMG/01.gif')";
    canvas.style.backgroundSize = "10px 100px)";
};

