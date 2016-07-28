var enabled = false;
var current_channel;
var newValue;

window.onload = function() {
    var current_channel = document.getElementById('select').value;
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    canvas.style.backgroundColor = "black";
    document.getElementById('greet').innerHTML = "Off :(";

};

function draw() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    var current_channel = document.getElementById('select').value;
    enabled = true;
    current_channel = 0;
    console.log(current_channel);
    var w = document.getElementById('select');
    var x = document.getElementById('up');
    var y = document.getElementById('down');
    var z = document.getElementById('remember');
    w.disabled = false;
    x.disabled = false;
    y.disabled = false;
    z.disabled = false;

    if (enabled == true) {
        canvas.style.backgroundColor = "white";
        document.getElementById('greet').innerHTML = "Welcome";
        static();
        loop();
        // console.log(current_channel);
    } else {
        canvas.style.backgroundColor = "black";
    }
    var check = document.getElementById('remember');
    check.addEventListener('click', function() {
        checkChannel();
    })

    var up = document.getElementById('up');
    up.addEventListener('click', function() {
        // alert('oi it fuckin works')
        channelUp();
    })

    var down = document.getElementById('down');
    down.addEventListener('click', function() {
        // alert('fucking works m8')
        channelDown();
    })
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
    var current_channel = document.getElementById('select').value //takes in channel input//
    var newValue = parseInt(current_channel); //convert string to integer

    switch (newValue) {
        case 1:
            console.log(current_channel);
            canvas.style.backgroundImage = "";
            canvas.style.backgroundColor = 'yellow';
            document.getElementById('greet').innerHTML = "You are viewing channel " + current_channel;
            break;
        case 2:
            console.log(current_channel);
            canvas.style.backgroundImage = "";
            canvas.style.backgroundColor = 'blue';
            document.getElementById('greet').innerHTML = "You are viewing channel " + current_channel;
            break;
        case 3:
            canvas.style.backgroundImage = "";
            canvas.style.backgroundColor = 'red';
            canvas.style.color = 'black';
            console.log(current_channel);
            document.getElementById('greet').innerHTML = "You are viewing channel " + current_channel;
            break;
        case 4:
            canvas.style.backgroundColor = 'black';
            canvas.style.backgroundImage = "url('IMG/01.gif')";
            console.log(current_channel);
            document.getElementById('greet').innerHTML = "A E S T H E T I C S ";
            break
        case 5:
            canvas.style.backgroundColor = ""
            canvas.style.backgroundImage = "url('IMG/jtrain.jpg')";
            console.log(current_channel);
            break;
        default:
            document.getElementById('greet').innerHTML = ":D";
    }
};

function turnOff() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    var w = document.getElementById('select');
    var x = document.getElementById('up');
    var y = document.getElementById('down')
    var z = document.getElementById('remember');

    w.disabled = true;
    x.disabled = true;
    y.disabled = true;
    z.disabled = true;

    canvas.style.backgroundColor = 'black';
    canvas.style.backgroundImage = "";
    document.getElementById('greet').innerHTML = "Off :(";
};

function channelUp() {
    var canvas = document.getElementById('myCanvas');
    var current_channel = document.getElementById('select').value;
    var newValue = parseInt(current_channel);
  
};

function channelDown() {
    var canvas = document.getElementById('myCanvas');
    var current_channel = document.getElementById('select').value;
    var newValue = parseInt(current_channel);
};