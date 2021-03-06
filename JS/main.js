//Portfolio site v0.0.1
//Joe Gigs
var enabled = false;
var current_channel;
var newValue;

window.onload = function() {
    var current_channel = document.getElementById('select').value;
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    canvas.style.backgroundColor = "black";
    document.getElementById('greet').innerHTML = "Off";
    makeItRain(); //$$$$///
}; 

function draw() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    var current_channel = document.getElementById('select').value || 0;
    var newValue = parseInt(current_channel);

    enabled = true;
    current_channel = 0;
    console.log(current_channel);

    var u = document.getElementById('turn_on');
    var w = document.getElementById('select');
    var x = document.getElementById('up');
    var y = document.getElementById('down');
    var z = document.getElementById('remember');
    var zz = document.getElementById('lightChild');

    u.style.color = "#900";
    w.disabled = false;
    x.disabled = false;
    y.disabled = false;
    z.disabled = false;

    zz.style.display = "block";
    x.style.color = "#00a601";
    y.style.color = '#00a601';

    if (enabled == true) {
        canvas.style.backgroundColor = "#6a6a66";
        document.getElementById('greet').innerHTML = "Joseph Giglio: Web Developer, music producer and more.";
        canvas.style.backgroundImage = "";
        canvas.style.backgroundImage = "url('IMG/me.jpg')";
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
        if (Math.random() < 0.1) buffer32[i] = '0xff000000';

    ctx.putImageData(idata, 0, 0);

    //     var startTime = new Date().getTime();
    //     var interval = setInterval(function(){
    //         // timesRun += 1;
    //         if(new Date().getTime() - startTime > 60000){
    //         clearInterval(interval);
    //         return;
    //         }
    //         canvas.style.backgroundColor = 'black';
    //         // canvas.style.backgroundImage = "";
    //     },2000)
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
        case 1:
            canvas.style.backgroundImage = "";
            canvas.style.backgroundImage = "url('IMG/Mixtscreenshot.png')";
            document.getElementById('greet').innerHTML = "<a href =https://bitbucket.org/JoeGigs/mixt>Mixt, a mixtape sharing app built in Ruby on Rails</a>";
            break;
        case 2:
            canvas.style.backgroundImage = "";
            canvas.style.backgroundImage = "url('IMG/juno.png')";
            document.getElementById('greet').innerHTML = "<a href=https://bitbucket.org/JoeGigs/juno>Juno, a silly web game made with Phaser.js</a>";
            break;
        case 3:
            canvas.style.backgroundColor = "";
            canvas.style.backgroundImage = "url('IMG/managedapps.png')";
            document.getElementById('greet').innerHTML = "<a href=http://portal.managedapps.co/>Managed Apps, a SaaS platform for mobile devs</a>";
            break;
        case 4:
            canvas.style.backgroundColor = "";
            canvas.style.backgroundImage = "url('IMG/byteflyport.png')";
            document.getElementById('greet').innerHTML = "<a href=http://bytefly.com/portfolio/>Bytefly portfolio page</a";
            break;
        case 5:
            canvas.style.backgroundColor = "";
            canvas.style.backgroundImage = "url('IMG/betawaves.png')";
            document.getElementById('greet').innerHTML = "<a href=http://betawavesny.com/>Website for my music collective Beta Waves</a>";
            break;
        case 6:
            canvas.style.backgroundColor = "";
            canvas.style.backgroundImage = "url('IMG/mindsplosion.png')";
            document.getElementById('greet').innerHTML = "Canvas TV Portfolio";
            break;
        case 7:
            canvas.style.backgroundColor = "";
            canvas.style.backgroundImage = "url('IMG/jtrain.jpg')";
            document.getElementById('greet').innerHTML = "<a href=https://www.beatport.com/release/j-train-remixes/1711453>J Train Remixes (Del Sol Music)</a>";
            break;
        case 8:
            canvas.style.backgroundColor = "";
            canvas.style.backgroundImage = "url('IMG/pulse6.jpg')";
            document.getElementById('greet').innerHTML = "<a href=https://www.beatport.com/release/pulse-vol-6-deep-electronic-lounge-collection/1771097>Pulse Volume 6 (Mareld)</a>";
            break;
        case 9:
            canvas.style.backgroundColor = "";
            canvas.style.backgroundImage = "url('IMG/techhousebomb.jpg')";
            document.getElementById('greet').innerHTML = "<a href=https://www.beatport.com/release/tech-house-bombs-vol-1/1718276>Tech House Bombs (Del Sol Music)</a>";
            break;
        case 10:
            canvas.style.backgroundColor = "";
            canvas.style.backgroundImage = "url('IMG/roof.jpg')";
            document.getElementById('greet').innerHTML = "<a href=https://www.beatport.com/release/rooftop-city-ep/1591461>Rooftop City (Del Sol Music)</a>";
            break;
        case 11:
            canvas.style.backgroundColor = "";
            canvas.style.backgroundImage = "url('IMG/escape.jpg')";
            document.getElementById('greet').innerHTML = "<a href=https://www.beatport.com/release/escape-from-paradise/1596358>Escape From Paradise (Mareld)</a>";
            break;
        case 12:
            canvas.style.backgroundColor = "";
            canvas.style.backgroundImage = "url('IMG/shadows.jpg')";
            document.getElementById('greet').innerHTML = "<a href=https://www.beatport.com/release/shadows/1587022>Shadows (Mareld)</a>";
            break;
        case 13:
            canvas.style.backgroundColor = "";
            canvas.style.backgroundImage = "url('IMG/pulse5.jpg')";
            document.getElementById('greet').innerHTML = "<a href=https://www.beatport.com/release/pulse-vol-5/1587013>Pulse Volume 5 (Mareld)</a>";
            break;
        case 14:
            canvas.style.backgroundColor = "";
            canvas.style.backgroundImage = "url('IMG/alchemy.jpg')";
            document.getElementById('greet').innerHTML = "<a href=https://www.beatport.com/release/alchemy/1546404>Alchemy (Mareld)</a>";
            break;
        case 15:
            canvas.style.backgroundColor = "";
            canvas.style.backgroundImage = "url('IMG/mareld101.jpg')";
            document.getElementById('greet').innerHTML = "<a href=https://www.beatport.com/release/mareld-101-selections-from-100-releases-2009-2015/1464816>Mareld 101</a>";
            break;
        case 16:
            canvas.style.backgroundColor = "";
            canvas.style.backgroundImage = "url('IMG/reinvent.jpg')";
            document.getElementById('greet').innerHTML = "<a href=https://www.beatport.com/release/mechanist-reinventions-ii/1431182>Mechanist Reinventions (Mareld)</a>";
            break;
        case 17:
            canvas.style.backgroundColor = "";
            canvas.style.backgroundImage = "url('IMG/gradient.jpg')";
            document.getElementById('greet').innerHTML = "<a href=https://www.beatport.com/release/gradient/1402039>Gradient (Mareld)</a>";
            break;
        case 18:
            canvas.style.backgroundColor = "";
            canvas.style.backgroundImage = "url('IMG/snow.jpg')";
            document.getElementById('greet').innerHTML = "<a href=https://www.beatport.com/release/thundersnow/1345386>Thundersnow (Mareld)</a>";
            break;
        case 19:
            canvas.style.backgroundColor = "";
            canvas.style.backgroundImage = "url('IMG/pulse4.jpg')";
            document.getElementById('greet').innerHTML = "<a href=https://www.beatport.com/release/pulse-vol-4-groovy-deep-house-for-the-perfect-lounge/1345489>Pulse 4 (Mareld)</a>";
            break;
        case 20:
            canvas.style.backgroundColor = "";
            canvas.style.backgroundImage = "url('IMG/pulse3.jpg')";
            document.getElementById('greet').innerHTML = "<a href=https://www.beatport.com/release/pulse-vol-3-the-deep-house-groove-collection/1228080>Pulse 3 (Mareld)</a>";
            break;
        case 21:
            canvas.style.backgroundColor = "";
            canvas.style.backgroundImage = "url('IMG/clouds.jpg')";
            document.getElementById('greet').innerHTML = "<a href=https://www.beatport.com/release/little-clouds/1187199>Little Clouds (Mareld)</a>";
            break;
        case 22:
            canvas.style.backgroundColor = "";
            canvas.style.backgroundImage = "url('IMG/pulse2.jpg')";
            document.getElementById('greet').innerHTML = "<a href=https://www.beatport.com/release/pulse-vol-2/1120979>Pulse Volume 2 (Mareld)</a>";
            break;
        case 23:
            canvas.style.backgroundColor = "";
            canvas.style.backgroundImage = "url('IMG/hurricane.jpg')";
            document.getElementById('greet').innerHTML = "<a href=https://www.beatport.com/release/hurricane/1124770>Hurricane (Mareld)</a>";
            break;
        case 24:
            canvas.style.backgroundColor = "";
            canvas.style.backgroundImage = "url('IMG/kore.jpg')";
            document.getElementById('greet').innerHTML = "<a href=https://www.beatport.com/release/kore-punk-ep/1124818>Kore Punk (Mareld)</a>";
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
    var y = document.getElementById('down');
    var z = document.getElementById('remember');
    var zz = document.getElementById('lightChild');

    var yy = newValue - newValue;
    document.getElementById('select').value = yy || 0;

    w.disabled = true;
    x.disabled = true;
    y.disabled = true;
    z.disabled = true;
    zz.style.display = "none";

    u.style.color = "white";
    x.style.color = "white";
    y.style.color = 'white';

    newValue = 0;

    canvas.style.backgroundColor = 'black';
    canvas.style.backgroundImage = "";
    document.getElementById('greet').innerHTML = "Off";
};

function channelUp() {
    var current_channel = document.getElementById('select').value || 0;
    var newValue = parseInt(current_channel);
    var vv = newValue + 1;
    document.getElementById('select').value = vv;

    if (current_channel >= 24) {
        vv = newValue - 23;
        document.getElementById('select').value = vv;
    }
    checkChannel();
};

function channelDown() {
    var current_channel = document.getElementById('select').value || 0;
    var newValue = parseInt(current_channel);
    var yy = newValue - 1;
    document.getElementById('select').value = yy;

    if (current_channel <= 1) {
        yy = newValue + 23;
        document.getElementById('select').value = yy;
    }
    checkChannel();
};

var rainDrops = 75;

function randomDrops(minNum, maxNum) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

function makeItRain() {
    for( i=1;i<rainDrops;i++) {

    var dropLeft = randomDrops(0,150);
    var dropTop = randomDrops(-400,140);

    $('.leftWindowParent').append('<div class="drop" id="drop'+i+'"></div>');
    $('#drop'+i).css('left',dropLeft);
    $('#drop'+i).css('top',dropTop);
    }
}
