function preload(){}

function setup()
{
    canvas = createCanvas(1050,500);
    canvas.position(150,200)
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video,320,100,400,300); 
    
    fill("#FFB6C1"); 
    stroke("#FF69B4");

    circle(175,60,70);

    rect(215, 50, 620, 20);

    circle(875,60,70);

    rect(165, 100, 20, 300);

    circle(175,440,70);

    rect(865, 100, 20, 300);

    circle(875,440,70);

    rect(215, 430, 620, 20);
}

function take_snapshot()
{
    save("first_p5_project.png");
}