class Platform extends StaticObject {

    constructor(name, src, width, height){
        super()
        this.name = name
        this.src = src
        this.width = width
        this.height = height
        this.bottom = this.randomVerticalPosition()
        this.spawn()
        allPlatforms.push(this)
        
        collisionTestMethod(this);
    }

    static choosePlatform(){

        let names = ['log', 'grass', 'ladderbar', 'floating_rock', 'ladder']
        let srcs = [`./assets/Platforms/log.png`, `./assets/Platforms/grass.png`, `./assets/Platforms/ladderbar.png`, `./assets/Platforms/floating_rock.png`, `./assets/Platforms/ladder.png` ]
        let widths = [250, 100, 200, 120, 75]
        let heights = [45, 45, 80, 80, 80]
        let choice = (Math.floor(Math.random() * names.length))
        let newPlatform = new Platform(names[choice], srcs[choice], widths[choice], heights[choice]);
        allPlatforms.push(newPlatform)
        return newPlatform;
    }
     
    
    
    //lets write a method here to update the game element based on the collision

    
    //the following is just a method to test whether our colloisionDetection mechanism works properly
     
   
        
    }






const allPlatforms = [];

function renderPosition(platform){
    //let platform = allPlatforms[0]
   //let p = this.element
    let positions = []
    positions.push(parseInt(platform.left))
    positions.push(parseInt(platform.bottom))
    positions.push((parseInt((platform.width) + (platform.left)))) //right
    positions.push(parseInt((platform.bottom) + (platform.height))) //top
    return positions;
}

function collisionTestMethod(platform){
    const playableCharacter = allPcs[0]
    const pc = playableCharacter.element
    
    const pcPositions = playableCharacter.pcPositions
    
    const pcWidth = 32
    const pcHeight = 32
    console.log(pcPositions)
    
    if((collisionDetection(pcPositions, pcWidth, pcHeight , renderPosition(platform))===true)){
       

        console.log("collision occurred");
        
        //debugger
    }
}
function collisionDetection(pcPositions, pcWidth, pcHeight, pPositions){
    var pleft = pPositions[0];
    //pPositions -> platform->left, bottom ,right, top
    //pcPositions -> playableCharacter ->left, bottom
    
    var pright = (pPositions[0])+ (pPositions[2]);//platform's left + platform's width
    var ptop = pPositions[1]; //platform's top (y)
    var pbottom = pPositions[1] + pPositions[3]; //pPositions[1] + (platform.height)
    var pcleft = pcPositions[0];
    var pcright = (pcPositions[0]) + (pcWidth);
    var pcbottom = pcPositions[1];
    var pctop= (pcPositions[1])  + (pcHeight);
    var collision = false;

    if((pleft < pcright) && (pright > pcleft) && (pbottom < pctop) && (ptop > pcbottom)){
        collision = true;
    }
   
    return collision;
    debugger
}