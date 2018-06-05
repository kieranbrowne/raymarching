var myshader;

function preload() {
    myshader = loadShader(
            "assets/shaders/basic.vert",
            "assets/shaders/raymarching.frag");
}

function setup(){
    createCanvas(540, 540, WEBGL);

    noStroke();

    console.log(pixelDensity());

    // frameRate(30);
    // greek = loadModel("assets/models/nymph.obj");
}

function draw() {
    myshader.setUniform('uResolution',[width,height]);
    myshader.setUniform('uPixelDensity',pixelDensity());
    myshader.setUniform('uTime',100+frameCount/40.0);
    shader(myshader);
    plane(); // drawing area

    // if(frameCount < 300) {
    //     saveCanvas('frame'+nf(frameCount, 5, 0), 'png');
    // }


    // console.log(frameRate());
}

