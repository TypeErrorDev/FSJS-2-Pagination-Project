/////////////////////////////////////////////////////////////////
//////////// CREATE AND APPEND ELEMENT TO PAGE //////////////////
/////////////////////////////////////////////////////////////////
const numOfStudentsPerPage = 9;
// let filteredPosts = [];

/**
 * This function will display the data within the page
 * @param {string} list - This will declare what's being connected to
 * @param {string} page - This will declare how many pages you'd like to have
 */
function showPage(list, page) {
  const startIndex = page * numOfStudentsPerPage - numOfStudentsPerPage;
  const endIndex = page * numOfStudentsPerPage;
  const studentList = document.querySelector(".student-list");

  studentList.innerHTML = "";
  if (list.length === 0) {
    studentList.innerHTML =
      "<h1>No results were found. Please check your spelling and try again!</h1>";
  } else {
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
}

/////////////////////////////////////////////////////////////////
//////////// CREATE THE PAGINATION AT THE BOT ///////////////////
/////////////////////////////////////////////////////////////////
/**
 * This function will create and insert/append the elements needed for the pagination buttons
 * @param {string} list - This will be calling the Data.js file to grab the objects
 */
function addPagination(list) {
  const currentPages = Math.ceil(list.length / numOfStudentsPerPage);
  let linkList = document.querySelector(".link-list");
  linkList.innerHTML = "";
  for (let i = 1; i <= currentPages; i++) {
    let pageButton = `
       <li>
          <button type="button">${i}</button>
        </li>
       `;
    linkList.insertAdjacentHTML("beforeend", pageButton);
    const firstPageBtn = document.querySelector("button");
    firstPageBtn.className = "active";
  }
  linkList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      let prevBtn = document.querySelector(".active");
      prevBtn.className = "";
      e.target.className = "active";
      removePreviousPage();
      showPage(list, e.target.textContent);
    }
  });
}

/////////////////////////////////////////////////////////////////
/////////////////// REMOVE INITIAL 9 USERS //////////////////////
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

const input = document.querySelector("#search");
const searchButton = document.querySelector("button");

function filterPosts() {
  const searchFilter = (data) =>
    [data.name.first.toLowerCase(), data.name.last.toLowerCase()]
      .join("")
      .toLowerCase()
      .indexOf(input.value.toLowerCase()) !== -1;
  filterPosts = data.filter(searchFilter);
  showPage(filterPosts, 1);
  addPagination(filterPosts);
}

input.addEventListener("keyup", filterPosts);
searchButton.addEventListener("click", () => {
  showPage(filterPosts, 1);
  addPagination(filterPosts);
});

/////////////////////////////////////////////////////////////////
/////////////////// CALL RENDERING FUNCTIONS ////////////////////
/////////////////////////////////////////////////////////////////
showPage(data, 1);
addPagination(data);
