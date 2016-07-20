window.onload = function() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    var current_channel = Cookies.get('channel_select');

    canvas.style.backgroundColor = "black";
    console.log(current_channel);
    document.getElementById('greet').innerHTML = "Off :<";
};

function draw() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    canvas.style.backgroundColor = "white";
    document.getElementById('greet').innerHTML = "Welcome";
    static();
    loop();
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

function clear() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    void ctx.clearRect(x, y, width, height);
    console.log('off');
};

function rememberChannel() {
    var channel = document.getElementById('select').value;
    Cookies.set('channel_select', channel);
    var current_channel = Cookies.get('channel_select');
    var num = console.log(current_channel);
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
            draw();
            canvas.style.backgroundColor = 'yellow';
            document.getElementById('greet').innerHTML = "You are viewing channel " + current_channel;
            break;
        case '2':
            draw();
            canvas.style.backgroundColor = 'blue';
            document.getElementById('greet').innerHTML = "You are viewing channel " + current_channel;
            break;
        case '3':
            draw();
            canvas.style.backgroundColor = 'red';
            document.getElementById('greet').innerHTML = "You are viewing channel " + current_channel;
            break;
        case '4':
            draw();
            canvas.style.backgroundColor = "white";
            document.getElementById('greet').innerHTML = "You are viewing channel TEST"; // need to clear canvas
            break
        default:
            document.getElementById('greet').innerHTML = ":D";
    }
};

function turnOff() {
    location.reload(true)
};