// function getAreaOfCircle(radius)
// {
//     this.radius = radius;
//   // area method
//     this.area = function () 
//     {
//         return Math.PI * this.radius * this.radius;
//     };
//   // perimeter method
//     this.perimeter = function ()
//     {
//         return 2*Math.PI*this.radius;
//     };
// }

// function calculateCircumference(radius) {
//     return 2 * Math.PI * radius;
//   }console.log(Math.PI);
  
  
//   console.log(calculateCircumference(10));

  
// var c = new getAreaOfCircle(3);
// console.log('Area =', c.area().toFixed(2));
// console.log('perimeter =', c.perimeter().toFixed(2));


// Area of Circle

function getAreaOfCircle(radius) {
    return Math.PI * radius * radius;
}

console.log(getAreaOfCircle(20));

// Circumference of Circle

function getCircumferenceOfCircle(radius) {
    return Math.PI * 2 * radius;
}

console.log(getCircumferenceOfCircle(20));

// Area of Square

function getAreaOfSquare(sideA , sideB) {
    return sideA * sideB;
}

console.log(getAreaOfSquare(sideA , sideB));

// Area of Triangle

function getAreaOfSquare(sideA , sideB) {
    return sideA * sideB;
}

console.log (getAreaOfSquare(sideA , sideB));
