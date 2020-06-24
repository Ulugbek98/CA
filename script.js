/*-------------Акции----------------------------------------------------------------------- */
var click_left = document.querySelector(".slider-left");
var click_right = document.querySelector(".slider-right");
var sliderWidth = document.querySelector(".js-slider").offsetWidth;
var line = document.querySelector(".slider-items");
var slides = document.querySelectorAll(".item");
var widthArray = [0];
var lineWidth = 0;
var offset = 0;
var step = 0;
var ostatok = 0;
for (var i = 0; i < slides.length; i++) {
  widthArray.push(slides[i].offsetWidth);
  lineWidth += slides[i].offsetWidth;
}
 line.style.width = lineWidth + "px";

line.style.left = "0px";
click_right.onclick = function () {
  ostatok = lineWidth - sliderWidth - (offset + widthArray[step]);
  if (ostatok >= 0) {
    offset += widthArray[step];
    line.style.left = -10 - offset + "px";
  } else {
    line.style.left = -140 - (lineWidth - sliderWidth) + "px";
    offset = 0;
    step = -1;
  }
  if (step + 1 == slides.length) {
    step = 0;
    offset = 0;
  } else {
    step++;
  }
};
click_left.onclick = sliderLeft;
var left = 0;
function sliderLeft() {
  var pos_right = parseFloat(line.style.left);
  if (pos_right>=-300) {
    line.style.left = '0px'
  } else {
    left = pos_right + 265;
    line.style.left = left + "px";
  }
}
/*-------------Акции----------------------------------------------------------------------- */


/*-------------Новости----------------------------------------------------------------------- */

var click_left = document.querySelector(".slider-left-new");
var click_right = document.querySelector(".slider-right-new");
var sliderWidth = document.querySelector(".js-slider-new").offsetWidth;
var line = document.querySelector(".slider-items-new");
var slides = document.querySelectorAll(".item-new");
var widthArray = [0];
var lineWidth = 0;
var offset = 0;
var step = 0;
var ostatok = 0;
for (var i = 0; i < slides.length; i++) {
  widthArray.push(slides[i].offsetWidth);
  lineWidth += slides[i].offsetWidth;
}
 line.style.width = lineWidth + "px";

line.style.left = "0px";
click_right.onclick = function () {
  ostatok = lineWidth - sliderWidth - (offset + widthArray[step]);
  if (ostatok >= 0) {
    offset += widthArray[step];
    line.style.left = -10 - offset + "px";
  } else {
    line.style.left = -140 - (lineWidth - sliderWidth) + "px";
    offset = 0;
    step = -1;
  }
  if (step + 1 == slides.length) {
    step = 0;
    offset = 0;
  } else {
    step++;
  }
};
click_left.onclick = sliderLeft;
var left = 0;
function sliderLeft() {
  var pos_right = parseFloat(line.style.left);
  if (pos_right>=-300) {
    line.style.left = '0px'
  } else {
    left = pos_right + 265;
    line.style.left = left + "px";
  }
}

/*-------------Новости----------------------------------------------------------------------- */
