const {Shapes, Triangle, Square, Circle}= require("./shapes")

describe("Shapes", () => {
    test("Instantiate the Shape class", () => {
        const shapes = new Shapes();
        expect(shapes).toBeInstanceOf(Shapes); 
    });
});
describe("Initialize shapecolor", () => {
    test("Should set shapecolor properly", () => {
        const shapecolor = "red";
        const shapes = new Shapes(shapecolor);
        expect(shapes.shapecolor).toBe(shapecolor); 
    });
});
describe("Shapes", () => {
    test("Instantiate the Shape class", () => {
        const logotext = "efg";
        const shapes = new Shapes("red", logotext);
        expect(shapes.logotext).toBe(logotext); 
    });
});
describe("Shapes", () => {
    test("Instantiate the Shape class", () => {
        const textcolor = "black"
        const shapes = new Shapes("red", "efg", textcolor);
        expect(shapes.textcolor).toBe(textcolor); 
    });
});

describe("Triangle", () => {
    test("should render Triangle logo", () => {
        const triangle = new Triangle("blue", "ABC", "white");
        expect(triangle.render()).toEqual(`<svg xmlns="https://www.w3.org/TR/SVG2/" width="300" height="200">
<g>
<polygon points="50 15, 100 100, 0 100" width="100%" height="100%" fill= "blue"/>
<text x="25 " y="80" font-family="Verdana" font-size="23" fill="white">ABC</text>
</g>
</svg>`); 
    });
});
describe("Triangle", () => {
    test("should render Square logo", () => {
        const square = new Square("blue", "ABC", "white");
        expect(square.render()).toEqual(`<svg xmlns="https://www.w3.org/TR/SVG2/" width="300" height="200">
<g>
<rect x="20" y="20" width="200" height="300" fill="blue"></rect>
<text x="70" y="125" font-family="Verdana" font-size="55" fill="white">ABC</text>
</g>
</svg>`); 
    });
});
describe("Circle", () => {
    test("should render Triangle logo", () => {
        const circle = new Circle("blue", "ABC", "white");
        expect(circle.render()).toEqual(`<svg xmlns="https://www.w3.org/TR/SVG2/" width="300" height="200">
<g>
<circle cx="35" cy="80" r="20" height="100%" width="100%" fill="blue"/>
<text x="19" y="85" font-family="Verdana" font-size="20" fill="white">ABC</text>
</g>
</svg>`); 
    });
});

