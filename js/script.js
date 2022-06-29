/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

// TO ACCESS THE JSON, THE VARIABLE IS `data`

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
  // create two variables which will represent the index for the first and last student on the page
  let numOfStudentsPerPage = 9;
  let startIndex = page * numOfStudentsPerPage - numOfStudentsPerPage;
  let endIndex = page * numOfStudentsPerPage;
  // select the element with a class of `student-list` and assign it to a variable
  let studentList = document.querySelector(".student-list");
  // set the innerHTML property of the variable you just created to an empty string
  studentList.innerHTML += "";
  // loop over the length of the `list` parameter

  for (i = 0; i < list.length; i++) {
    // inside the loop create a conditional to display the proper students
    // inside the conditional:
    // create the elements needed to display the student information
    // insert the above elements
  }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
  // create a variable to calculate the number of pages needed
  // select the element with a class of `link-list` and assign it to a variable
  // set the innerHTML property of the variable you just created to an empty string
  // loop over the number of pages needed
  // create the elements needed to display the pagination button
  // insert the above elements
  // give the first pagination button a class of "active"
  // create an event listener on the `link-list` element
  // if the click target is a button:
  // remove the "active" class from the previous button
  // add the active class to the clicked button
  // call the showPage function passing the `list` parameter and page to display as arguments
}

// Call functions
// showpage(data,1);
// addPagination(data);
