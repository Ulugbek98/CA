/* document.getElementById("slider-left").onclick = sliderLeft;
document.getElementById("slider-right").onclick = sliderRight;
var js_slider = document.getElementById("slider-items");
var left = 0;
var right =0;

function sliderLeft(){
    left -= 265;
    $("#slider-left").on('click',function(){
        js_slider.appendChild(js_slider.firstChild);
    })
    js_slider.style.left = left +'px';
};
 */

const carousel = document.querySelector(".js-slider");
const slider = document.querySelector("#slider-items");
const next = document.querySelector("#slider-right");
const prev = document.querySelector("#slider-left");
let direction;

next.addEventListener("click", function () {
  direction = -1;
  carousel.style.justifyContent = "flex-start";
  slider.style.transform = "translate(-13%)";
});

prev.addEventListener("click", function () {
  if (direction === -1) {
    direction = 1;
    slider.appendChild(slider.firstElementChild);
  }
  carousel.style.justifyContent = "flex-end";
  slider.style.transform = "translate(13%)";
});
if (direction === 1) {
  slider.prepend(slider.lastElementChild);
} else {
  slider.appendChild(slider.firstElementChild);
}
slider.addEventListener(
  "transitionend",
  function () {
    // get the last element and append it to the front
    slider.style.transition = "none";
    slider.style.transform = "translate(0)";
    setTimeout(() => {
      slider.style.transition = "all 0.5s";
    });
  },
  false
);
