

document.getElementById("heartbeat").onmouseover = function() {mouseOver()};
function mouseOver() {
    document.getElementById("heartbeat").style.color = "red";
}

document.getElementById("heartbeat").onmouseout = function() {mouseOut()};
function mouseOut() {
    document.getElementById("heartbeat").style.color = "black";
}

// $('#esittelyCarousel').onmouseover('slide.bs.carousel', function () {
//     do something…
// })


$('#esittelyCarousel').carousel({
   interval: false
});

var i;

$('.carousel-control').on("mouseover", function () {
   var control = $(this),
       interval = 500;

   i = setInterval(function () {
       control.trigger("click");
   }, interval);
})
.on("mouseout", function () {
   clearInterval(i);
});
