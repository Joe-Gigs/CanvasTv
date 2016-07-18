window.onload = function() {
    var current_channel = Cookies.get('channel_select');
    if (current_channel) {
        document.getElementById('greet').innerHTML = current_channel;
    };
};

function draw() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    canvas.style.backgroundColor = "black";
}

function clear() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    canvas.style.backgroundColor = "white";
}

//will play last watched channel when turning the tv on
function rememberChannel() {
    var channel = document.getElementById('select').value;
    Cookies.set('channel_select', channel);
    var current_channel = Cookies.get('channel_select');
    if (current_channel) {
        document.getElementById('greet').innerHTML = current_channel;
    };
}