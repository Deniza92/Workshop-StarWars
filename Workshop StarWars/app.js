console.log("Its working");

const personEl = document.querySelector(".person");
const logoEl = document.querySelector(".logo");
const shipEl = document.querySelector(".ship");

const PEOPLE_URL = "https://swapi.dev/api/people/?page=1";

function fetchPeople() {
    fetch(PEOPLE_URL) 
    .then(function (res) {
        return res.json();
  })
  .then(function (data) {
    console.log(data);
  });
}
fetchPeople();

function renderPeopleTable(containerPeopleTable, peopleInfo) {
containerPeopleTable = "";
for (let people of peopleInfo.results) {
    containerPeopleTable.innerHTML += `
    table>
          <thead>
            <th>Name</th>
            <th>Height ( cm )</th>
            <th>Mass ( kg )</th>
            <th>Gender</th>
            <th>Birth Year</th>
          </thead>
          <tbody>
            <tr>
                <td>${person.name}</td>
                <td>${person.height}</td>
                <td>${person.mass}</td>
                <td>${person.gender}</td>
                <td>${person.birth_year}</td>
            </tr>
          </tbody>
        </table>
    `;
}
}



const SHIPS_URL = "https://swapi.dev/api/starships/?page=1";

function fetchShips() {
    fetch(SHIPS_URL) 
    .then(function (res) {
        return res.json();
  })
  .then(function (data) {
    console.log(data);
  });
  }

  function renderShipsTable(containerShipsTable, shipsInfo) {
    containerShipsTable = "";
    for (let ship of shipsInfo.results) {
        containerShipsTable.innerHTML += `
        
        
        `
  }
    }
fetchShips();
