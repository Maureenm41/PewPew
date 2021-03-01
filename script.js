const grid = document.querySelector('.grid')

for (let i = 0 ; i < 225; i++)
{
    const square = document.createElement('div')
    grid.appendChild(square)
}

const squares = Array.from(document.querySelectorAll('.grid div'))

const target =
[
    0,1,2,3,4,5,6,7,8,9;
    10,11,12,13,14,15,16,17,18,19;
]


function draw()
{
    for (let i = 0 ; target.length; i++) 
    {
        squares=[target[i]].classList.add('target')
    }
}

draw