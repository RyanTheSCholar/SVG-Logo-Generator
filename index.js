// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered
const { Shapes, Triangle, Circle, Square } = require("./lib/shapes");
const inquirer = require("inquirer");
const fs = require('fs');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);
const questions = [
  {
    type: "maxlength-input",
    message: "What Text do you want in your logo? ",
    name: "logotext",
    maxLength: 3
  },
  {
    type: "input",
    message: "What color do you want?",
    name: "textcolor",
  },
  {
    type: "list",
    message: "What shape do you want?",
    name: "shape",
    choices: ["Square", "Circle", "Triangle"],
  },
  {
    type: "input",
    message: "What is the shapes color?",
    name: "shapecolor",
  },
  {
    type: "input",
    message: "What is the name of your file",
    name: "logofile",
  },
];
inquirer
  .prompt(questions)
  .then(({ shape, shapecolor, logotext, textcolor, logofile }) => {
    let shapeType;
    switch (shape) {
      case "Triangle":
        shapeType = new Triangle(shapecolor, logotext, textcolor);
        break;
      case "Square":
        shapeType = new Square(shapecolor, logotext, textcolor);
        break;
      default:
        shapeType = new Circle(shapecolor, logotext, textcolor);
        break;
    } 
    writeToFile(`./examples/${logofile}.svg`, shapeType.render());
  })
//   .then((answer) => {
//     console.log();
//     const result = "hi";
   
//   });
function writeToFile(fileName, data) {
  fs.writeFile(fileName, (data), (err) =>
    err ? console.log(err) : console.log(`generated File`)
  );
}
