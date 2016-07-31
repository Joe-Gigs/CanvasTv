var enabled = false;
var current_channel;
var newValue;

window.onload = function() {
    var current_channel = document.getElementById('select').value;
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    canvas.style.backgroundColor = "black";
    document.getElementById('greet').innerHTML = "Off";
};

function draw() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    var current_channel = document.getElementById('select').value || 0;
    // var newValue = parseInt(current_channel);
    enabled = true;
    current_channel = 0;
    console.log(current_channel);
    var u = document.getElementById('turn_on');
    var w = document.getElementById('select');
    var x = document.getElementById('up');
    var y = document.getElementById('down');
    var z = document.getElementById('remember');

    u.style.color = "#900";
    w.disabled = false;
    x.disabled = false;
    y.disabled = false;
    z.disabled = false;

    x.style.color = "#00a601";
    y.style.color = '#00a601';

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
        channelUp();
    })

    var down = document.getElementById('down');
    down.addEventListener('click', function() {
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
    var current_channel = document.getElementById('select').value || 0;
    var newValue = parseInt(current_channel); //convert string to integer

    switch (newValue) {
        case 0:
            draw();
            break;
        case 1:
            canvas.style.backgroundImage = "";
            canvas.style.backgroundColor = 'yellow';
            document.getElementById('greet').innerHTML = "You are viewing channel " + current_channel;
            break;
        case 2:
            canvas.style.backgroundImage = "";
            canvas.style.backgroundColor = 'blue';
            document.getElementById('greet').innerHTML = "You are viewing channel " + current_channel;
            break;
        case 3:
            canvas.style.backgroundImage = "";
            canvas.style.backgroundColor = 'red';
            canvas.style.color = 'black';
            document.getElementById('greet').innerHTML = "You are viewing channel " + current_channel;
            break;
        case 4:
            canvas.style.backgroundColor = 'black';
            canvas.style.backgroundImage = "url('IMG/01.gif')";
            document.getElementById('greet').innerHTML = "A E S T H E T I C S ";
            break;
        case 5:
            canvas.style.backgroundColor = "";
            canvas.style.backgroundImage = "url('IMG/jtrain.jpg')";
            document.getElementById('greet').innerHTML = "<a href=https://www.beatport.com/release/j-train-remixes/1711453>J Train Remixes (Del Sol Music)</a>";
            break;
        case 6:
            canvas.style.backgroundColor = "";
            canvas.style.backgroundImage = "url('IMG/pulse6.jpg')";
            document.getElementById('greet').innerHTML = "<a href=https://www.beatport.com/release/pulse-vol-6-deep-electronic-lounge-collection/1771097>Pulse Volume 6 (Mareld)</a";
            break;
        case 7:
            canvas.style.backgroundColor = "";
            canvas.style.backgroundImage = "url('IMG/techhousebomb.jpg')";
            document.getElementById('greet').innerHTML = "<a href=https://www.beatport.com/release/tech-house-bombs-vol-1/1718276>Tech House Bombs Volume 1 (Del Sol Music)</a>";
            break;
        case 8:
            canvas.style.backgroundColor = "";
            canvas.style.backgroundImage = "url('IMG/roof.jpg')";
            document.getElementById('greet').innerHTML = "<a href=https://www.beatport.com/release/rooftop-city-ep/1591461>Rooftop City (Del Sol Music)</a>";
            break;
        default:
            document.getElementById('greet').innerHTML = "empty";
    }
};

function turnOff() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    var current_channel = document.getElementById('select').value;
    var newValue = parseInt(current_channel); 
    var u = document.getElementById('turn_on');
    var w = document.getElementById('select');
    var x = document.getElementById('up');
    var y = document.getElementById('down')
    var z = document.getElementById('remember');

    u.style.color = "white";
    w.disabled = true;
    x.disabled = true;
    y.disabled = true;
    z.disabled = true;
    x.style.color = "white";
    y.style.color = 'white';

    // document.getElementById('select').value = 0;

    canvas.style.backgroundColor = 'black';
    canvas.style.backgroundImage = "";
    document.getElementById('greet').innerHTML = "Off";
};

function channelUp() {
    var current_channel = document.getElementById('select').value || 0; // current value
    var newValue = parseInt(current_channel); 
    var vv = newValue + 1;
    document.getElementById('select').value = vv;
    checkChannel();
};

function channelDown() {
    var current_channel = document.getElementById('select').value; // current value
    var newValue = parseInt(current_channel);
    var yy = newValue - 1;
    document.getElementById('select').value = yy;
    checkChannel();
};