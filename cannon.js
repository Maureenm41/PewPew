import cannonImage from '.../assets/cannon.png'

export class cannon 
{
    constructor()
    {
        this.el = document.createElement('img');
        this.el.src = cannonImage;
        document.body.appendChild(this.el);

    }
}