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
let currentElementId = 0;
let ElementId = 0;

//////////////////////////////////////////
let nextButtonClick = () => {
  console.log(alert("next-button-clicked"));

  if (ElementId <= lastChildElementId) {
    document.getElementById(`${currentElementId}`).style.backgroundColor =
      "blue";
    let NextElementId = ElementId + 1;
    document.getElementById(`${NextElementId}`).style.backgroundColor = "blue";
    let NextOfNextElementId = NextElementId + 1;
    document.getElementById(`${NextOfNextElementId}`).style.backgroundColor =
      "blue";
    console.log(`next of next `, NextOfNextElementId);
    ElementId = NextOfNextElementId;
    console.log(`element `, ElementId);
    currentElementId = ElementId;
    console.log(`current `, currentElementId);
  }
};

////////////////////////////////////////////////
let previousButtonClick = () => {
  console.log(alert("previous-button-clicked"));
};
