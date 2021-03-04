//part 1
//const clearColor="#121212";
//const cannonBallColor="#000";
//const targetMissileColor="#fff";
const can = document.getElementById('can')
const target = document.getElementById('target')
const ball = document.getElementById('ball')

let leftkey=rightkey=false;
let cc,game;

function init()
{
    window.addEventListener("keydown", onKeydown);
    window.addEventListener("keyup", onKeyup);
    cc=cannon.getContext("2d");
}

function update()
{
    clearCanvas(cc);
    game.update(cc);
    requestAnimationFrame(update);
}

function onKeyDown(e)
{
    let keycode=e.keyCode;
    
    if(keycode==37)
    {
        leftkey=true;
    }
    
    if(keycode==39)
    {
        rightkey=true;
    }
    
    if(keycode==32)
    {
        game.cannonShootBall();
    }
}

function onKeyUp(e)
{
    let keycode=e.keyCode;
    
    if(keycode==37){
        leftkey=false;
    }
    
    if(keycode==39){
        rightkey=false;
    }
}

window.onload=function(){
    init();
    update();
}

//part 2

let game = function()
    {
        let _ =this ;

        this.scl=0.1;

        this.cannon_img = document.getElementById("cannon");

        this.target_img = document.getElementById("target");

        this.cd={w:380*_.scl , h:400*_.scl}; // cd = cannon data

        this.td={w:400*_.scl , h:400*_.scl , rows: 3 , cols: 8 ,gap : 10}; //td =target data

        this.cannon={x:cw/2-_.sd.w/2 , y:ch-10-_.sd.h, w:sd.w , h:_.sd.h };

        this.ball = new Array();

        this.cannonSpeed = 5 ;

        this.ballSpeed = 3.5 ; 

        this.target = new Array();

        this.targetMissiles = new Array();

        this.targetMissilesSpeed = 3.5 ; 

        this.missilesWidth = 4 ;

        this.missilesHeight = 25 ; 

        this.targetRange = { x:0 , w:0 } ; 

        this.completed = false ;


        this.init = function()
            {
                this.draw = function(cc)
                    {

                    }

                this.update = function(cc)
                    {

                    }
            }
    }


    