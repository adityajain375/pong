var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var o1 = createSprite(50, 375,5,50);
var o2 = createSprite(5, 350,5,100);
var o3 = createSprite(150, 350,200,5);
var o4 = createSprite(50, 300,100,5);
var o5 = createSprite(100, 250,5,100);
var o6 = createSprite(150, 225,5,150);
var o7 = createSprite(175, 300,50,5);
var o8 = createSprite(200, 250,5,100);
var o9 = createSprite(250, 300,5,100);
var o10 = createSprite(275, 250,50,5);
var o11 = createSprite(300, 275,5,50);
var o12 = createSprite(345, 300,90,5);
var o13 = createSprite(390, 150,5,200);
var o14 = createSprite(275, 200,150,5);
var o15 = createSprite(350, 175,5,150);
var o16 = createSprite(325, 100,50,5);
var o17 = createSprite(300, 145,5,90);
var o18 = createSprite(320, 50,140,5);
var o19 = createSprite(250, 125,5,50);
var o20 = createSprite(150, 150,200,5);
var o21 = createSprite(225, 190,150,5);
var o22 = createSprite(55, 200,90,5);
var o23 = createSprite(10, 150,5,100);
var o24 = createSprite(200, 100,5,100);
var o25 = createSprite(250, 37.5,5,25);
var o26 = createSprite(100, 25,200,5);
var o27 = createSprite(100, 50,200,5);
var o28 = createSprite(150, 75,5,50);
var o29 = createSprite(77.5, 100,140,5);

var bar = createSprite(225, 25,25,5);

var ball = createSprite(25, 375,10,10);

function draw() {
  background("white");
  createEdgeSprites();
  ball.bounceOff(topEdge);
  ball.bounce(bar);
  if (ball.x===25,ball.y===375){
   text("press an arrow key to start",100,375);
  }
  if (bar.x===225,bar.y===25){
   text("<-push this bar out of the screen",228,30);
  }
   text("dont touch any of the walls if you touch,the game will restart",25,15);
  if (bar.x<0||bar.x>400||bar.y<0||bar.y>400){
    text("press 'space' to play again",210,240);
  }
  if (keyDown("space")){
    bar.x=225;
    bar.y=25;
    ball.x=25;
    ball.y=375;
    ball.velocityY = 0;
    ball.velocityX = 0;
    bar.velocityX = 0;
    bar.velocityY = 0;
  }
  if(ball.collide(o1)||ball.collide(o2)||ball.collide(o3)||ball.collide(o4)||ball.collide(o5)||ball.collide(o6)||ball.collide(o7)||ball.collide(o8)||ball.collide(o9)||ball.collide(o10)||ball.collide(o11)||ball.collide(o12)||ball.collide(o13)||ball.collide(o14)||ball.collide(o15)||ball.collide(o16)||ball.collide(o17)||ball.collide(o18)||ball.collide(o19)||ball.collide(o20)||ball.collide(o21)||ball.collide(o22)||ball.collide(o23)||ball.collide(o24)||ball.collide(o25)||ball.collide(o26)||ball.collide(o27)||ball.collide(o28)||ball.collide(o29)){
   ball.x = 25;
   ball.y = 375;
  }
  if (keyDown("UP_ARROW")){
    ball.velocityX = "0";
    ball.velocityY = "-4";
  }
  if (keyDown("LEFT_ARROW")){
    ball.velocityX = "-4";
    ball.velocityY = "0";
  }
  if (keyDown("RIGHT_ARROW")){
    ball.velocityX = "4";
    ball.velocityY = "0";
  }
  if (keyDown("DOWN_ARROW")){
    ball.velocityX = "0";
    ball.velocityY = "4";
  }
  if (ball.x<0||ball.x>400||ball.y>400){
    text("you lose!",210,230);
    text("press 'space' to restart",210,240);
  }
  if (bar.y<0){
   text("you win!",210,230); 
  }
  showMobileControls(true, true, true);
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
