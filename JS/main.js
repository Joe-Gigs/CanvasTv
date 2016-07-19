window.onload = function() {
    var current_channel = Cookies.get('channel_select');
    // if (current_channel) {
    //     document.getElementById('greet').innerHTML = current_channel;
    // }
    console.log(current_channel);
};

function draw() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    static();
    loop();
    console.log('on');
}

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
}

function clear() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    canvas.style.backgroundColor = "yellow";
    console.log('off');
}

//will play last watched channel when turning the tv on
function rememberChannel() {
    var channel = document.getElementById('select').value;
    Cookies.set('channel_select', channel);
    var current_channel = Cookies.get('channel_select');
    if (current_channel) {
        document.getElementById('greet').innerHTML = current_channel;
    }
    console.log(current_channel);
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

    if (current_channel == 1) {
        draw();
        canvas.style.backgroundColor = "yellow";
    }
    else if (current_channel == 2) {
        draw();
        canvas.style.backgroundColor = "blue";
    }
    else if (current_channel == 3) {
        draw();
        canvas.style.backgroundColor = "red";
    } else{
       
    }
};

function checkIsOn(){
   
}