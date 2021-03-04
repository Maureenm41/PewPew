const cannon = document.getElementById('cannon')
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
}

function onKeydown(e)
{
    let keycode=e.keycode;
}