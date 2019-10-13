/*jshint esversion: 6 */
$('body').prepend('<div id="pixiview"></div>');
$('div:first').css({"position": "fixed","pointer-events": "none","z-index":"50"});
//don't move
var width = $('body').width();
var height = $('body').height();
var x = width/2;
var y = height/2;
var stage = new PIXI.Container();
var renderer = PIXI.autoDetectRenderer(width, height,{
    resolution: 1,
    antialias: true,
    transparent: true,
});
document.getElementById("pixiview").appendChild(renderer.view);
window.onresize = function () {
    location.reload();
};

var img = [];
var link = "https://akatsuki1910.github.io/ChromePlugin/twi-bal/pic/";
var cou=0;

function loop(){
    requestAnimationFrame(loop);
    for(var i=0;i<img.length;i++){
        img[i].y-=3;
    }

    cou++;
    if(cou==3){
        createballoon(img.length);
        cou=0;
    }
    renderer.render(stage);
}

function createballoon(i){
    var a = Math.floor(Math.random()*5)+1;
    img[i] = new PIXI.Sprite(PIXI.Texture.fromImage(link+"bal-"+a+".png"));
    stage.addChild(img[i]);
    img[i].anchor.x = 0.5;
    img[i].anchor.y = 0.5;
    img[i].position.x=Math.floor(Math.random()*width);
    img[i].position.y=height;
}
createballoon(0);
loop();