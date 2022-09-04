// Welcome to the logic

// getting the parent element using the children's class name i.e element
let parentElement = document.querySelector(".element").parentElement;
console.log(parentElement);

// GETTING THE FIRST CHILD ELEMENT

// getting the details of first child element of the above parent element
let firstChildElement = parentElement.firstElementChild;
console.log(firstChildElement);
// getting the id of the above firstchildelement
let firstChildElementId = firstChildElement.id;
console.log(firstChildElementId);

// GETTING THE LAST CHILD ELEMENT

// getting the details of last child element of the above parent element
let lastChildElement = parentElement.lastElementChild;
console.log(lastChildElement);
// getting the id of the above lastchildelement
let lastChildElementId = lastChildElement.id;
console.log(lastChildElementId);

// Declaring the variables

// let currentCircleId = firstChildElementId;
// console.log(currentCircleId);

// let rectangleId;
// let nextCircleId;
// let nextButtonClick = () => {
//   console.log(alert("next-button-clicked"));
//   //    logic-next-button-click;

//   if (firstChildElementId) {
//     firstChildElement.style.backgroundColor = "blue";
//     rectangleId = Number(currentCircleId) + 1;
//     console.log(rectangleId);
//     console.log(document.getElementById(`${rectangleId}`));
//     document.getElementById(`${rectangleId}`).style.backgroundColor = "blue";
//     nextCircleId = Number(rectangleId) + 1;
//     document.getElementById(`${nextCircleId}`).style.backgroundColor = "blue";
//   }
// };

// let previousButtonClick = () => {
//   console.log(alert("previous-button-clicked"));
// };
