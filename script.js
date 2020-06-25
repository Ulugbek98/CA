/*-------------Акции----------------------------------------------------------------------- */
/* var click_left = document.querySelector(".slider-left");
var click_right = document.querySelector(".slider-right");
var sliderWidth = document.querySelector(".js-brands").offsetWidth;
var line = document.querySelector(".slider-brands");
var slides = document.querySelectorAll(".item-brands");
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
} */
/*-------------Акции----------------------------------------------------------------------- */


/*-------------Новости----------------------------------------------------------------------- */

/* var click_left_new = document.querySelector(".slider-left-new");
var click_right_new = document.querySelector(".slider-right-new");
var sliderWidth_new = document.querySelector(".js-slider-new").offsetWidth;
var line_new = document.querySelector(".slider-items-new");
var slides_new = document.querySelectorAll(".item-new");
var widthArray = [0];
var line_newWidth = 0;
var offset = 0;
var step = 0;
var ostatok = 0;
for (var i = 0; i < slides_new.length; i++) {
  widthArray.push(slides_new[i].offsetWidth);
  line_newWidth += slides_new[i].offsetWidth;
}
 line_new.style.width = line_newWidth + "px";

line_new.style.left = "0px";
click_right_new.onclick = function () {
  ostatok = line_newWidth - sliderWidth_new - (offset + widthArray[step]);
  if (ostatok >= 0) {
    offset += widthArray[step];
    line_new.style.left = -10 - offset + "px";
  } else {
    line_new.style.left = -140 - (line_newWidth - sliderWidth_new) + "px";
    offset = 0;
    step = -1;
  }
  if (step + 1 == slides_new.length) {
    step = 0;
    offset = 0;
  } else {
    step++;
  }
};
click_left_new.onclick = sliderLeft;
var left = 0;
function sliderLeft() {
  var pos_right = parseFloat(line_new.style.left);
  if (pos_right>=-300) {
    line_new.style.left = '0px'
  } else {
    left = pos_right + 265;
    line_new.style.left = left + "px";
  }
}
 */
/*-------------Новости----------------------------------------------------------------------- */


/* слайдер таймер */

autoSlider();
var left = 0;
var timer; 

function autoSlider(){
  timer = setTimeout(sliderLeft,2000);
}
function sliderLeft(){
var slider_brands = document.querySelector(".slider-brands");
  left = left -170;
  if(left<-900){
    left = 0;
    timer =0;
  }
autoSlider();
  slider_brands.style.left = left + 'px';
}

autoSlider2();
var left2 = 0;
var timer2; 

function autoSlider2(){
  timer2 = setTimeout(sliderLeft2,2000);
}
function sliderLeft2(){
var slider_brands2 = document.querySelector(".slider-brands2");
  left2 = left2 -170;
  if(left2<-900){
    left2 = 0;
    timer2 =0;
  }
autoSlider2();
  slider_brands2.style.left = left2 + 'px';
}