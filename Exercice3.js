class Vecteur2D {
    constructor(x=0, y=0) {
        this.x = x;
        this.y = y;
    }

    affichage () {
        return `x: ${this.x} & y:  ${this.y}`;
    }

    addition(v) {
        this.x += v.x;
        this.y += v.y;
        return this.affichage();
    }
}

class Rectangle {
    constructor (length=0, width=0, name='reactangle') {
        this.length = length;
        this.width = width;
        this.name = name;
    }

    affichage () {
        return `Reactangle: ${this.name} & length:  ${this.length} & ${this.width}`;
    }

    surface() {
        return this.length * this.width;
    }
}

class Carre extends Rectangle {
    constructor (length, name='caree') {
        super(length, length, name)
    }
}

class Point {
    constructor (x = 0.0, y = 0.0) {
        this.x = x;
        this.y = y;
    }
}

class Segment {
    constructor (x1, y1, x2, y2) {
        this.orig = new Point(x1, y1);
        this.extrem = new Point(x2, y2);
    }
}

let v1 = new Vecteur2D();
let v2 = new Vecteur2D(10, 6);
let v3 = new Vecteur2D(4, 7);

console.log(v2)
console.log(v3)
console.log(v2.addition(v3))

let rect1 = new Rectangle(20, 7, "Rectangle 1");
let carre1 = new Carre(5, "Carre 1");

console.log(rect1.affichage());
console.log(carre1.affichage());
