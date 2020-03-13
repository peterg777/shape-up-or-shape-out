const MAX = 600;

class Shape {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.div = $('<div></div>')
        $('#canvas-container').append(this.div);
        this.div.dblclick(() => {
            this.div.remove();
            $('#shapeName').text('')
            $('#shapeWidth').text('');
            $('#shapeHeight').text('');
            $('#shapeArea').text('');
            $('#shapePerimeter').text('');


        })
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
class Square extends Shape {
    constructor(sideLength) {
        super(sideLength, sideLength)
        this.div.addClass('Square')
        this.div.click(() => {
            $('#shapeName').text('square')
            $('#shapeWidth').text(this.height);
            $('#shapeHeight').text(this.width);
            $('#shapeArea').text(this.height * this.width);
            $('#shapePerimeter').text(this.width * 4);

        })
    }

}

// new Shape(100, 100)


class Rectangle extends Shape {
    constructor(height, width) {
        super(height, width)
        this.div.addClass('Rectangle')
        this.div.click(() => {
            $('#shapeName').text('rectangle')
            $('#shapeWidth').text(this.height);
            $('#shapeHeight').text(this.width);
            $('#shapeArea').text(this.height * this.width);
            $('#shapePerimeter').text(this.width * 2 + this.height * 2);


        })
    }
}
// new shape (200,100)



class Circle extends Shape {
    constructor(radius) {
        super(radius * 2, radius * 2)
        this.radius = radius
        this.div.addClass('Circle')
        this.div.click(() => {
            $('#shapeName').text('circle')
            $('#shapeWidth').text(this.radius * 2)
            $('#shapeHeight').text(this.radius * 2)
            $('#shapeArea').text(this.radius * this.radius * Math.PI)
            $('#shapePerimeter').text(this.radius * Math.PI * 2)

        })

    }
}



class Triangle extends Shape {
    constructor(sideLength) {
        super(sideLength, sideLength)
        this.div.addClass('Triangle-bottomright')
        this.div.css({
            height: '0px',
            width: '0px',
            borderBottom: `${this.height}px solid black`,
            borderLeft: `${this.width}px solid transparent`,
        })
        this.div.click(() => {
            $('#shapeName').text('triangle-bottomright')
            $('#shapeWidth').text(sideLength)
            $('#shapeHeight').text(sideLength)
            $('#shapeArea').text(0.5 * sideLength * sideLength)
            $('#shapePerimeter').text(2 * sideLength + (Math.sqrt(2 * Math.pow(sideLength, 2))))
        })
    }
}



$('#squareBtn').click(() => {
    let sideLength = $('#squareInput').val();
    new Square(sideLength);
    
})
$('#rectBtn').click(() => {
    let height = $('#rectHeight').val();
    let width = $('#rectWidth').val();
    new Rectangle (height, width);
})
$('#circleBtn').click(() => {
    let radius = $('#circleInput').val();
    new Circle(radius);
})
$('#triangleBtn').click(() => {
    let sideLength = $('#triangleInput').val();
    new Triangle(sideLength);
})




