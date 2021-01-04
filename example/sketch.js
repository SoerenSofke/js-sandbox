function setup() {
    createCanvas(200, 200);
}

function draw() {
    background(220);

    circle(mouseX, mouseY, sum(1, 10))
}