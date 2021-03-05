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
                 let dd = _.id;
                        _.targetRange.w=dd.cols*dd.w+dd.cols*dd.gap;
                        _.targetRange.x=cw/2-_.targetRange.w/2;
                        let yoffset=10;
                        let xoffset= _.targetRange.x ;
                        for(let x=0; x<dd.cols; x++)
                            {
                                for(let y=0; y<dd.rows; y++)
                                    {
                                        let target ={x:x*dd.w+x*dd.gap , y:y*dd.h+y*dd.gap , w:dd.w , h:dd.h};
                                        target.x+=xoffset;
                                        target.y+=yoffset;
                                        _.target.push(target);
                                    } 
                            }
            }

        this.draw = function(cc) //drawing the img
                    {
                        for(let i=0 ;i<_.target.length;i++)
                            {
                                let tar = _.target[i];
                                drawImg(cc,_.target_img,tar.x,tar.y,tar.w,tar.h);

                            }
                        drawImg(cc,_.cannon_img,_.cannon.x,_.cannon.y,_.cannon.w,_.cannon.h);

                    }
        this.update = function(cc)
                    {
                        if(_.completed)return ;
                        _.updateCannonMove();
                        _.draw(cc);
                        _.updateMissiles(cc);
                        _.updateTargetBehavior();
                        _.checkGameComplete;

                    }

        this.updateCannonMove = function() //move of the ship
                    {
                        if(leftkey)
                            {
                                _.cannon.x-=_.cannonSpeed;
                            }
                        if(rightkey)
                            {
                                _.cannon.x+=_.cannonSpeed;
                            }
                        if(_.cannon.x<_.targetRange.x)
                            {
                                _.cannon.x=_.targetRange.x;

                            }
                        if()
                        {
                            ;
                        }

                    }
        this.cannonShootBall= function()
                    {

                    }
        this.updateMissiles = function(cc)
                    {

                    }
        this.updateTargetBehavior = function()
            {

            }
        this.checkGameComplete = function()
            {

            }
        }
    


    