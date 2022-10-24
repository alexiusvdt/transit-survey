//original code
// function handleForm(event) {
//   event.preventDefault();
//   const userSelections = document.querySelectorAll("input[name=transportation-option]:checked");
// // userSelections is a NodeList Element, which we can pass to an array
// }

// window.addEventListener("load", function() {
//   document.querySelector("form#transportation_survey").addEventListener("submit", handleForm);
// });

// second iteration
// function handleForm(event) {
//   event.preventDefault();
//   const userSelections = document.querySelectorAll("input[name=transportation-option]:checked");
//   //added the array and sets it to pull from the userSelections variable. this is static, not instance
//   const userSelectionsArray = Array.from(userSelections);

//   // The element parameter is the placeholder for the actual array element.
//   userSelectionsArray.forEach(function(element) {    
//     const paragraph = document.createElement("p");
//     paragraph.append(element.value);
//     document.body.append(paragraph);
//   });
// }

// window.addEventListener("load", function() {
//   document.querySelector("form#transportation_survey").addEventListener("submit", handleForm);
// });
//final iteration with fancy printouts
function handleForm(event) {
  event.preventDefault();
  const userSelections = document.querySelectorAll("input:checked");
  const userSelectionsArray = Array.from(userSelections);

  // create results heading
  const resultsHeading = document.createElement("h2");
  resultsHeading.append("You use the following methods of transportation to travel to work or school:");
  document.body.append(resultsHeading);

  userSelectionsArray.forEach(function(element) {
    const paragraph = document.createElement("p");
    paragraph.append(element.value);
    document.body.append(paragraph);
  });
}

window.addEventListener("load", function() {
  document.querySelector("form#transportation_survey").addEventListener("submit", handleForm);
});
