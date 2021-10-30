// register ServiceWorker, remember to use absolute path!
// if (navigator.serviceWorker) {
//   navigator.serviceWorker.register('/andreykondakov.github.io/sw.js', {scope: '/andreykondakov.github.io/'})
// }

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}

var geekhub = document.getElementById('btn-last-change');
geekhub.addEventListener('click', function () {
  var div = document.createElement('div');
  div.classList.add('spinner');
  this.parentNode.appendChild(div);

  setTimeout(function () {

    fetch('https://ramesh-lg.github.io/Ramesh-portfolio/', {})
      .then(dataWrappedByPromise => dataWrappedByPromise.json())
      .then(data => {
        var getOneBranh = data[13];
        var getReposLastDate = getOneBranh['pushed_at'];
        var itemDate = document.getElementById('geekhubJs');
        var spanDate = itemDate.querySelector('.result-item');
        spanDate.innerHTML = getReposLastDate;
      }).catch(function (err) {
      console.log('Error!')
    });
    div.classList.remove('spinner');

  }, 2000);      // setTimeout for see spinner

});

function getData() {
  fetch('https://ramesh-lg.github.io/Ramesh-portfolio/', {})
    .then(dataWrappedByPromise => dataWrappedByPromise.json())
    .then(data => {
      var list = document.getElementById('git-list');
      for (let i = 0; i < data.length; i++) {
        let li = document.createElement('li');
        li.classList.add('repItem');
        li.innerHTML = data[i]['name'];
        list.appendChild(li);
      }
    }).catch(function (err) {
    console.log('Error!')
  });
};
getData();

//  canvas ------------------------
var ms = document.getElementById("tp2p");
var tp = ms.getContext("2d");
ms.height = window.innerHeight;
ms.width = window.innerWidth;
var tp2p = "TEMPLATEP2P";
tp2p = tp2p.split("");
var font_size = 10;
var columns = ms.width / font_size;
var drops = [];
for (var x = 0; x < columns; x++)
  drops[x] = 1;

function draw() {
  tp.fillStyle = "rgba(0, 0, 0, 0.05)";
  tp.fillRect(0, 0, ms.width, ms.height);
  tp.fillStyle = "#686160";
  tp.font = font_size + "px arial";
  for (var i = 0; i < drops.length; i++) {
    var text = tp2p[Math.floor(Math.random() * tp2p.length)];
    tp.fillText(text, i * font_size, drops[i] * font_size);
    if (drops[i] * font_size > ms.height && Math.random() > 0.975)
      drops[i] = 0;
    drops[i]++;
  }
}

setInterval(draw, 47);
// --------------------- end canvas

var list = document.getElementById('git-list');
list.addEventListener('click', function (e) {
  var count = [].indexOf.call(this.children, (e ? e.target : event.srcElement));
  // count++;
  var target = e.target;

  if (target.className === 'repItem') {

    var div = document.createElement('div');
    div.classList.add('spinner');
    target.appendChild(div);

    // setTimeout(function () {
    fetch('https://ramesh-lg.github.io/Ramesh-portfolio/', {})
      .then(dataWrappedByPromise => dataWrappedByPromise.json())
      .then(data => {
        var getOneBranch = data[count];
        var getReposLastDate = getOneBranch['pushed_at'];
        var span = document.createElement('span');
        span.innerHTML = ' ' + getReposLastDate;
        div.classList.remove('spinner');
        // target.remove(div);
        target.appendChild(span);
      }).catch(function (err) {
      console.log('Error!');
    });
    // }, 3000);      // setTimeout for see spinner
  }
});


//   second spinner ---------------------

var PI = 3.1415926535897932;
var TAU = 6.28318530718;
var DEG2RAD = 0.01745329251;
var RAD2DEG = 57.2957795;
var EPSILON = 2.2204460492503131e-16;

function radians(v) {
  return v * DEG2RAD;
}

function degrees(v) {
  return v * RAD2DEG;
}

function min(a, b) {
  if (a < b) return a;
  return b;
}

function max(a, b) {
  if (a > b) return a;
  return b;
}

function round_to(a, f) {
  return a.toFixed(f);
}

function clamp(a, min, max) {
  if (a < min) return min;
  else if (a > max) return max;
  else return a;
}

function lerp(a, b, t) {
  return (1 - t) * a + t * b;
}

function angle(x, y) {
  return Math.atan2(y, x) * RAD2DEG + 180;
}

function sigmoid(input, t) {
  return 1 / (1 + Math.exp(-input + t));
}

function smoothstep(min, max, val) {
  var x = Math.max(0, Math.min(1, (val - min) / (max - min)));
  return x * x * (3 - 2 * x);
}

function move_towards(val, target, rate) {
  var result = val;
  if (target > val) {
    result += rate;
    if (result > target) return target;
  }
  else {
    result -= rate;
    if (result < target) return target;
  }
  return result;
}

function lazy_ease(now, end, speed) {
  return now + (end - now) / speed;
}

function wrap_value(value, min, max) {
  if (value > max) return value - max;
  if (value < min) return value + max;
  return value;
}

function ping_pong(t) {
  return (Math.sin(t) / 2) + 0.5;
}

function rgb_to_str(rgb) {
  var r = Math.floor(rgb[0]);
  var g = Math.floor(rgb[1]);
  var b = Math.floor(rgb[2]);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function rand(min, max) {
  return (Math.random() * (max - min + 1)) + min;
}

function rand_int(min, max) {
  return Math.floor(rand(min, max));
}

function lerp(a, b, t) {
  return (1 - t) * a + t * b;
}

function heartbeat(t, intensity, freq) {
  var v = Math.atan(Math.sin(t * PI * freq) * intensity);
  return (v + PI / 2) / PI;
}

function grid_to_sphere(x, y, width, height) {
  var radius = width / (2.0 * PI);
  var phi = ((y / height) - 0.5) * PI;
  var theta = (x / width) * 2.0 * PI;
  var px = radius * Math.sin(theta) * Math.sin(phi);
  var py = radius * Math.cos(phi);
  var pz = radius * Math.cos(theta) * Math.sin(phi);

  return [px, py, pz];
}

// -------------------------

var rows = 41;
var cols = 11;
var grid_size = 85;

var shapes = [];

function Shape(x, y, rate) {
  var r = {};
  r.x = x;
  r.y = y;
  r.angle = 0;
  r.rate = rate;
  r.radius = 5;
  r.rgb = [255, 255, 255];
  r.width = 2;
  return r;
}


var container = document.querySelector('.container');
var el_width = container.clientWidth;
var el_height = container.clientHeight;
var ratio = window.devicePixelRatio;
var width = el_width * ratio;
var height = el_height * ratio;
var canvas = document.createElement('canvas');
canvas.width = width;
canvas.height = height;
var dw = -((width - el_width) / 2);
var dh = -((height - el_height) / 2);
canvas.style.transform = 'translateX(' + dw + 'px) translateY(' + dh + 'px) scale(' + (1 / ratio) + ')';

var ctx = canvas.getContext('2d');
container.appendChild(canvas);
var cx = width / 2;
var cy = height / 2;

var colours =
  [
    '#FF6B6B',
    '#d5c278',
    '#809abd',
  ];


var max_dist = Math.sqrt((grid_size * rows) + (grid_size * cols));

for (var y = 0; y < rows; ++y) {
  for (var x = 0; x < cols; ++x) {
    var gx = cx + (x * grid_size) - ((grid_size * cols) / 2);
    var gy = cy + (y * grid_size) - ((grid_size * rows) / 2);

    var dx = gx - cx;
    var dy = gy - cy;
    var dist = Math.sqrt((dx * dx) + (dy * dy));
    shapes.push(Shape(gx, gy, 1.0 / (dist) * 10.0));
  }
}

var last_t = window.performance.now();
var elapsed = 0;

requestAnimationFrame(update);

function update(t) {
  var dt = (t - last_t) / 1000;
  last_t = t;
  elapsed += dt;
  requestAnimationFrame(update);

  ctx.clearRect(0, 0, width, width);

  var root_index = Math.floor((cols * rows) / 2);
  var root = shapes[root_index];

  var st = ping_pong(elapsed * 2);
  //PI = lerp(3.14159, 4.5, st);

  root.angle = st * 360;
  root.radius = 1.0 + st * 2;
  root.x = cx + (Math.sin(elapsed * 2) * (cx));
  root.y = cy + (Math.sin(elapsed * 2) * (500.0));
  //root.width = ping_pong(elapsed * 4) * 8;
  //grid_size = 25 + ping_pong(elapsed * 4) * 38;

  root.rgb[0] = lerp(50, 255, st);
  root.rgb[1] = lerp(50, 255, st);
  root.rgb[2] = lerp(155, 255, st);

  for (var y = 0; y < rows; ++y) {
    for (var x = 0; x < cols; ++x) {
      var index = x + (y * cols);
      var shape = shapes[index];

      if (index !== root_index) {

        var gx = root.x + (x * grid_size) - ((grid_size * cols) / 2);
        var gy = root.y + (y * grid_size) - ((grid_size * rows) / 2);
        gx += (grid_size / 2);
        gy += (grid_size / 2);

        var rate = shape.rate * 1.0;

        shape.x = lerp(shape.x, gx, rate);
        shape.y = lerp(shape.y, gy, rate);
        shape.angle = lerp(shape.angle, root.angle, rate);
        shape.radius = lerp(shape.radius, root.radius, rate);
        shape.width = lerp(shape.width, root.width, rate);

        shape.rgb[0] = lerp(shape.rgb[0], root.rgb[0], rate);
        shape.rgb[1] = lerp(shape.rgb[1], root.rgb[1], rate);
        shape.rgb[2] = lerp(shape.rgb[2], root.rgb[2], rate);

      }

      draw_shape(shape);
    }
  }

}

function draw_shape(s) {
  var width = grid_size * cols;
  var height = grid_size * rows;
  var sphere = grid_to_sphere(s.x, s.y, width, height);

  ctx.save();
  ctx.translate(cx + sphere[0], cy + sphere[2]);
  ctx.rotate(s.angle * DEG2RAD);

  ctx.strokeStyle = rgb_to_str(s.rgb);
  ctx.fillStyle = ctx.strokeStyle;
  ctx.lineWidth = s.width;

  /*
	ctx.beginPath();
	ctx.lineTo(0, s.radius);
	ctx.lineTo(0, -s.radius);
	ctx.stroke();

	ctx.beginPath();
	ctx.lineTo(-s.radius, 0);
	ctx.lineTo(s.radius, 0);
	ctx.stroke();
	*/

  ctx.beginPath();
  ctx.arc(0, 0, s.radius, 0, 360 * DEG2RAD);
  ctx.fill();

  ctx.restore();
}
//    end second spinner ---------------------
