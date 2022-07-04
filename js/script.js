/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

// TO ACCESS THE JSON, THE VARIABLE IS `data`
/////////////////////////////////////////////////////////////////
//////////// CREATE AND APPEND ELEMENT TO PAGE //////////////////
/////////////////////////////////////////////////////////////////
const numOfStudentsPerPage = 9;

/**
 * This function will display the data within the page
 * @param {string} list - This will declare what's being connected to
 * @param {string} page - This will declare how many pages you'd like to have
 */
function showPage(list, page) {
  const startIndex = page * numOfStudentsPerPage - numOfStudentsPerPage;
  const endIndex = page * numOfStudentsPerPage;
  const studentList = document.querySelector(".student-list");

  studentList.innerHTML += "";

  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      let listHTML = `
        <li class="student-item cf">
          <div class="student-details">
            <img class="avatar" src="${list[i].picture.medium}" alt="Profile Picture">
            <h3>${list[i].name.first} ${list[i].name.last}</h3>
            <span class="email">${list[i].email}</span>
          </div>
          <div class="joined-details">
            <span class="date">${list[i].registered.date}</span>
          </div>
        </li>`;
      studentList.insertAdjacentHTML("beforeend", listHTML);
    }
  }
}

/////////////////////////////////////////////////////////////////
//////////// CREATE THE PAGINATION AT THE BOT ///////////////////
/////////////////////////////////////////////////////////////////
/**
 * This function will create and insert/append the elements needed for the pagination buttons
 * @param {string} list - This will be calling the Data.js file to grab the objects
 */
function addPagination(list) {
  // create a variable to calculate the number of pages needed
  const currentPages = Math.ceil(list.length / numOfStudentsPerPage);
  // select the element with a class of `link-list` and assign it to a variable
  let linkList = document.querySelector(".link-list");
  // set the innerHTML property of the variable you just created to an empty string
  linkList.innerHTML = "";
  // loop over the number of pages needed
  for (let i = 1; i <= currentPages; i++) {
    // create the elements needed to display the pagination button
    let pageButton = `
       <li>
          <button type="button">${i}</button>
        </li>
       `;
    //      insert the above elements
    linkList.insertAdjacentHTML("beforeend", pageButton);
    //      give the first pagination button a class of "active"
    const firstPageBtn = document.querySelector("button");
    firstPageBtn.className = "active";
  }
  linkList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      //       // remove the "active" class from the previous button add the active class to the clicked button
      let prevBtn = document.querySelector(".active");
      prevBtn.className = "";
      e.target.className = "active";
      //       // call the showPage function passing the `list` parameter and page to display as arguments
      removePreviousPage();
      showPage(list, e.target.textContent);
    }
  });
}

/////////////////////////////////////////////////////////////////
////////////////// REMOVE PREVIOUS 9 USERS //////////////////////
/////////////////////////////////////////////////////////////////
function removePreviousPage() {
  let studentList = document.querySelector(".student-list");
  studentList.innerHTML = "";
}

/////////////////////////////////////////////////////////////////
///////////////////// DISPLAY SEARCH BAR ////////////////////////
/////////////////////////////////////////////////////////////////
function searchBar() {
  const searchHeader = document.querySelector("header");
  const searchLabel = document.createElement("label");
  searchLabel.className = "student-search";
  searchLabel.innerHTML = `
            <span>Search by name</span>
            <input id="search" placeholder="Search by name..."  />
            <button type="button">
              <img src="img/icn-search.svg" alt="Search icon" />
            </button>
`;
  searchHeader.appendChild(searchLabel);
}
searchBar();

/////////////////////////////////////////////////////////////////
/////////////////// DISPLAY SEARCH RESULTS //////////////////////
/////////////////////////////////////////////////////////////////

//I'm thinking I need the following but i'm really not sure and I'm getting confused:
// 1. grab the input field and store it in a variable of searchInput
// 2. store the e.target.value.toLowerCase() into a variable searchValue
// 3. Loop through data.js and compare the searchValue to ${data.name.first.toLowerCase()} ${data.name.last.toLowerCase()} and filter out the matching objects into a new array newStudentList[]
// 4. count the indexs of newStudentList[] and adjust the pagination buttons to reflect the correct amount of pages based on the results
//  call showPage(newStudentList, 1)
// call addPagination(newStudentListß)

const input = document.querySelector("#search");
const searchButton = document.querySelector("button");

// this is the function that I'm working on to try and get it to filter the results
let users = document.querySelector(".student-item");
function handleFilter(searchedValue) {
  const results = data.filter((item) => {
    const name = `${item.name.first.toLowerCase()} ${item.name.last.toLowerCase()}`;
    return name.includes(searchedValue);
  });
  showPage(results, 1);
  addPagination(results);
}

// this grabs the search input
input.addEventListener("keyup", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  handleFilter(searchTerm);
  console.log(searchTerm);
});

// Call functions
showPage(data, 1);
addPagination(data);
