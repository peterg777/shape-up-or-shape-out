const MAX = 600;

class Shape {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.div = $('<div id="test"></div>')
        $('#canvas-container').append(this.div);
        this.div.css({
            height: `${this.height}px`,
            width: `${this.width}px`,
            top: `${this.randomPos(this.height)}px`,
            left: `${this.randomPos(this.width)}px`

        })

    }
    randomPos(offset) {
        return Math.floor(Math.random() * (MAX - offset));
    }
}
class Square extends Shape{
    constructor(sideLength) {
        super(sideLength,sideLength)
        this.div.click(()=> { 
            $('#shapeName').text('square')
            $('#shapeWidth').text(this.height)
        } )

    }
}
// new Shape(100, 100)
new Square(200)
new Square(250)
new Square(300)