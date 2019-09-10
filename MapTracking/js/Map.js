var canvas = document.getElementById("canvas_map");
var context = canvas.getContext("2d");

var canvas_height = 700;
var canvas_width = 1501;




// Draw the whole canvas
function drawMap() {
  for (var x = 20; x < 1501; x += 20) {
  context.moveTo(x, 0);
  context.lineTo(x, 700);
  }

  for (var y = 20; y < 700; y += 20) {
  context.moveTo(0, y);
  context.lineTo(1501, y);
  }

  // context.moveTo(0, 0);
  // context.lineTo(380, 380);

  context.strokeStyle = "#ddd";
  context.setLineDash([5, 3]);
  context.stroke();
}

var img = new Image();
img.src = "./img/Capture.PNG";
// vẽ cái cổng
function drawDoor() {
  context.drawImage(img, 0, 602, 80, 100);
  context.imageSmoothingEnabled = false;
  // vẽ hình ảnh lấy từ source
}


// tạo hình và lấy hình ảnh station
var imgStation_1 = new Image();
imgStation_1.src = "./img/space-station.png";

var imgStation_2 = new Image();
imgStation_2.src = "./img/space-station.png";

var imgStation_3 = new Image();
imgStation_3.src = "./img/space-station.png";

var imgStation_4 = new Image();
imgStation_4.src = "./img/space-station.png";

var imgStation_5 = new Image();
imgStation_5.src = "./img/space-station.png";


// vẽ các trạm station
function drawStation() {
  // context.strokeStyle = "red";
// station: 1
  context.beginPath();
  // context.moveTo(100, 100);
  // context.rect(100, 100, 100, 50);
  // context.stroke();
  context.drawImage(imgStation_1, 100, 100, 80, 80);
  context.imageSmoothingEnabled = false;
  context.closePath();
// Station: 2
  context.beginPath();
  // context.moveTo(350, 350);
  // context.rect(350, 350, 100, 50);
  // context.stroke();
  context.drawImage(imgStation_2, 350, 350, 80, 80);
  context.imageSmoothingEnabled = false;
  context.closePath();
// station: 3
  context.beginPath();
  // context.moveTo(1100, 50);
  // context.rect(1100, 50, 100, 50);
  // context.stroke();
  context.drawImage(imgStation_3, 1100, 50, 80, 80);
  context.imageSmoothingEnabled = false;
  context.closePath();
// station 4:
  context.beginPath();
  // context.moveTo(900, 470);
  // context.rect(900, 470, 100, 50);
  // context.stroke();
  context.drawImage(imgStation_4, 900, 470, 80, 80);
  context.imageSmoothingEnabled = false;
  context.closePath();
// station 5:
  context.beginPath();
  // context.moveTo(670, 200);
  // context.rect(670, 200, 100, 50);
  // context.stroke();
  context.drawImage(imgStation_5, 670, 200, 80, 80);
  context.imageSmoothingEnabled = false;
  context.closePath();
}

// xác định tọa độ chiều dài và chiều cao
var x = 20,
  y = 20;
// xác định khoảng cách tọa độ khi vẽ hình mới cách hình hình vẽ ban đầu
var dx = 2,
  dy = 2;
// xác định bán kính của hình tròn(đối tượng có hình tròn)
var radius = 20;

// var img_object = document.getElementById("object");
// img_object.src = "./img/object.PNG";
// var img_object_width = 50;
// var img_object_height = 20;

// vẽ tạo đối tượng
function object() {
  context.beginPath();
  drawMap();
  drawStation();
  // drawDoor();
  context.closePath();

  context.beginPath();
  // vẽ hình tròn
  // context.drawImage(img_object, 0, 0, img_object_width, img_object_height);
  // context.strokeStyle='blueviolet';

  context.arc(x, y, radius, 0, Math.PI * 2);
  // chọn màu nền cho hình
  // context.fillStyle = "blueviolet";
  context.fillStyle='#31D74D';

  // vẽ màu nền cho hình
  context.fill();
  context.closePath();
}

// không cho đối tượng ra khỏi bản đồ, chỉ di duyển trong bản đồ
function handleObjectInsideMap() {
  if (x < radius || x > canvas_width - radius) {
    dx = -dx;
  }

  if (y < radius || y > canvas_height - radius) {
    dy = -dy;
  }
}

// cập nhật lại vị trí của đối tượng
function updateObjectPosition() {
  x += dx;
  y += dy;
}

function drawObject() {
  // loại bỏ các hình cũ đã vẽ của tối tượng
  context.clearRect(0, 0, canvas_width, canvas_height);
  object();
  handleObjectInsideMap();
  updateObjectPosition();
  requestAnimationFrame(drawObject);
}

window.onload = function() {
  this.drawObject();
  // setInterval(function() {
  //   object();
  // }, 200);
};
