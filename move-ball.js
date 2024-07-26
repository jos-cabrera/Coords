const coordintes = document.getElementsByClassName("coordinates")[0];
const ball = document.getElementsByClassName("ball")[0];

ball.addEventListener("click", function (click) {
  coordintes.innerHTML = "x:" + " " + click.x + "y:" + " " + click.y;
  moveBall();
});

function moveBall() {
  let ballSize = 150,
    coordinatesLabelHeight = 40;

  ball.style.left =
    Math.floor(
      Math.random() * (document.documentElement.clientWidth - ballSize) +
        ballSize / 2
    ) + "px";

  ball.style.top =
    Math.floor(
      Math.random() *
        (document.documentElement.clientHeight -
          ballSize -
          coordinatesLabelHeight) +
        coordinatesLabelHeight +
        ballSize / 2
    ) + "px";
}
