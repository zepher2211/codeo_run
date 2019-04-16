let horizontal_direction = "stop"
let frameCount = 0;
let vertical_direction = null

document.addEventListener('DOMContentLoaded', () => {
  const can = document.querySelector('#background');
  const ctx = can.getContext('2d');
  const can2 = document.querySelector('#foreground');
  const ctx2 = can.getContext('2d');


  can.width = window.innerWidth -20;
  can.height = 400;
  can2.width = window.innerWidth -20;
  can2.height = 400;

  const bg = document.createElement('img')
  bg.src = 'assets/desert_BG.png'

  let imgWidth = 0;

  const  scrollSpeed = 2;


  bg.addEventListener('load', () => {
    const loop = () => {
      let imgPos = imgWidth;


      ctx.drawImage(bg, imgPos, 0);
        while(imgPos < can.width) {
          ctx.drawImage(bg, imgPos += bg.width, 0);
        }
      imgWidth -= scrollSpeed;
      if (imgWidth <= -bg.width){
        imgWidth = 0;}


      window.requestAnimationFrame(loop);
    }



  loop()

})


  let character = new PlayableCharacter("Mark")
  character.horizontal_move(horizontal_direction)

  document.addEventListener('keydown', function(e){
    if(e.repeat) return
  if(e.key == 'ArrowRight'){
    console.log("right")
    horizontal_direction = "right"
    character.horizontal_move(horizontal_direction)
    }
    if(e.key == 'ArrowLeft'){
      console.log("left")
      horizontal_direction = "left"
      character.horizontal_move(horizontal_direction)
    }
  })

  document.addEventListener('keyup', function(e){
    if(e.key == 'ArrowRight'||e.key == 'ArrowLeft'){
    console.log("stop")
    horizontal_direction = "stop"
    character.horizontal_move(horizontal_direction)
    }
  })

  document.addEventListener('keydown', function(e){
    if(e.repeat) return
    if(e.key == ' '){
      vertical_direction = 'up'
      character.jump()
    }
  })

  setInterval(function(){
    StaticObject.scroll()
    if (character.vertical_speed > -15) {
      character.vertical_speed -= 1.2
    }
    if(parseInt(character.y) < 220){
      character.verticalMovement()
    }
  }, 10)


  let nextPlatformInterval = function(){
    return ((Math.floor(Math.random() * 5000) + 1500))  // 1.5 sec + 0 to 5 sec (i.e. 1.5 to 6.5 sec interval)
  }

  let nextItemInterval = function(){
    return ((Math.floor(Math.random() * 3000) + 500))  // 0.5 sec + 0 to 3 sec (i.e. 0.5 to 3.5 sec interval)
  }

  setInterval(function(){
    Platform.choosePlatform()
    console.log(nextPlatformInterval())
  }, nextPlatformInterval())

  setInterval(function(){
    Item.pickRandomItem();
    console.log(nextItemInterval())
  }, nextItemInterval())

})
