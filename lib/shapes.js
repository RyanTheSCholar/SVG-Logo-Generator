class Shapes {
  constructor(shapecolor, logotext, textcolor) {
    this.shapecolor = shapecolor;
    this.textcolor = textcolor;
    this.logotext = logotext;
  }
}
class Triangle extends Shapes {
  render() {
    return `<svg xmlns="https://www.w3.org/TR/SVG2/" width="300" height="200">
<g>
<polygon points="50 15, 100 100, 0 100" width="100%" height="100%" fill= "${this.shapecolor}"/>
<text x="25 " y="80" font-family="Verdana" font-size="23" fill="${this.textcolor}">${this.logotext}</text>
</g>
</svg>`;
  }
}
class Square extends Shapes {
  render() {
    return `<svg xmlns="https://www.w3.org/TR/SVG2/" width="300" height="200">
<g>
<rect x="20" y="20" width="100%" height="100%" fill="${this.shapecolor}"></rect>
<text x="115" y="125" font-family="Verdana" font-size="55" fill="${this.textcolor}">${this.logotext}</text>
</g>
</svg>`;
  }
}
class Circle extends Shapes {
  render() {
    return `<svg xmlns="https://www.w3.org/TR/SVG2/" width="300" height="200">
<g>
<circle cx="35" cy="80" r="20" height="100%" width="100%" fill="${this.shapecolor}"/>
<text x="18" y="85" font-family="Verdana" font-size="20" fill="${this.textcolor}">${this.logotext}</text>
</g>
</svg>`;
  }
}
module.exports = { Shapes, Triangle, Square, Circle };

//const shape = new Triangle("blue", "ABC", "white")
