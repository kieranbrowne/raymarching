var myshader;

function preload() {
    myshader = loadShader(
            "assets/shaders/basic.vert",
            "assets/shaders/raymarching.frag");
}

function setup(){
    createCanvas(540, 540, WEBGL);

    // frameRate(30);
    // greek = loadModel("assets/models/nymph.obj");
        // saveCanvas('frame'+nf(frameCount, 5, 0), 'jpg');
}

function draw() {
    myshader.setUniform('uResolution',[width,height]);
    myshader.setUniform('uPixelDensity',pixelDensity());
    myshader.setUniform('uTime',100+frameCount/40.0);
    shader(myshader);
    plane(); // drawing area

    // if(frameCount/2 < 375 && frameCount %2 == 0) {
    //     saveCanvas('frame'+nf(frameCount/2, 5, 0), 'jpg');
    // }


    // console.log(frameRate());
}

