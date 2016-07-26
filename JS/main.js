var enabled = false;
var counter; 

window.onload = function() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    canvas.style.backgroundColor = "black";
    document.getElementById('greet').innerHTML = "Off :(";
    channelUpDown(); 
};

function draw() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    // var current_channel = document.getElementById('select').value
    counter = 0;
    console.log(counter);
    enabled = true;
    var x = document.getElementById('up');
    var y = document.getElementById('down');
    var z = document.getElementById('remember');
    z.disabled = false;
    y.disabled = false;
    x.disabled = false;
    if (enabled == true){
    canvas.style.backgroundColor = "white";
    document.getElementById('greet').innerHTML = "Welcome";
    static();
    loop();
    // console.log(current_channel);
    } else {
        canvas.style.backgroundColor = "black";
    }
    var check = document.getElementById('remember');
    check.addEventListener('click', function(){
        checkChannel();
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
    var current_channel = document.getElementById('select').value; //takes in channel input//

       switch(current_channel) {
        case '1':
            canvas.style.backgroundImage = "";
            canvas.style.backgroundColor = 'yellow';
            counter = '1';
            console.log(counter);
            document.getElementById('greet').innerHTML = "You are viewing channel " + current_channel;
            break;
        case '2':
            canvas.style.backgroundImage = "";
            canvas.style.backgroundColor = 'blue';
            counter = '2';
            console.log(counter);
            document.getElementById('greet').innerHTML = "You are viewing channel " + current_channel;
            break;
        case '3':
            canvas.style.backgroundImage = "";
            canvas.style.backgroundColor = 'red';
            canvas.style.color = 'black';
            counter = 3;
            console.log(counter);
            document.getElementById('greet').innerHTML = "You are viewing channel " + current_channel;
            break;
        case '4':
            canvas.style.backgroundColor = 'black';
            canvas.style.backgroundImage = "url('IMG/01.gif')";
            counter = 4;
            console.log(counter);
            document.getElementById('greet').innerHTML = "A E S T H E T I C S "; 
            break
        case '5':
            canvas.style.backgroundColor = null
            canvas.style.backgroundImage = "url('IMG/jtrain.jpg')";
            counter = 5;
            console.log(counter);
            break;
        default:
            document.getElementById('greet').innerHTML = ":D";
    }
};

function turnOff() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    var x = document.getElementById('up');
    var y = document.getElementById('down')
    var z = document.getElementById('remember');

    x.disabled = true;
    y.disabled = true;
    z.disabled = true;

    canvas.style.backgroundColor = 'black';
    canvas.style.backgroundImage = "";
    document.getElementById('greet').innerHTML = "Off :(";

};

function channelUpDown() {
    var current_channel = document.getElementById('select').value;
    var channel_up = document.getElementById('up');
     channel_up.addEventListener('click', function(){
        current_channel++;
        console.log(current_channel);
    }, false);

    var channel_down = document.getElementById('down');
    channel_down.addEventListener('click', function(){
        current_channel--;
        console.log(current_channel);
    }, false);
};  


