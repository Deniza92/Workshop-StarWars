console.log("Its working");

const characterEl = document.querySelector(".character");
const shipEl = document.querySelector(".ship");

const PEOPLE_URL = "https://swapi.dev/api/people/?page=1";

function fetchPeople(url) {
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      characterEl.addEventListener("click", function () {
        renderPeopleTable(peopleTableEl, data);
      });
    });
}

function renderPeopleTable(containerPeopleTable, peopleInfo) {
  containerPeopleTable = "";
  for (let person of peopleInfo.results) {
    containerPeopleTable.innerHTML += `
      <table>
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
  containerPeopleTable.innerHTML = `
  <footer>
  <button type = "button" id= "previousPeopleBtn">PREVIOUS</>
  <utton type = "button" id= "nextPeopleBtn">NEXT</>
  </footer>
  `;
}

// fetchPeople();

const SHIPS_URL = "https://swapi.dev/api/starships/?page=1";

function fetchShips(url) {
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      renderShipsTable.addEventListener("click", function () {
        renderShipsTable(shipsTableEl, data);
      });
    });
}

function renderShipsTable(containerShipsTable, shipsInfo) {
  containerShipsTable = "";
  for (let ship of shipsInfo.results) {
    containerShipsTable.innerHTML += `
      <table>
      <thead>
        <th>Name</th>
        <th>Model ( cm )</th>
        <th>Manufacturer ( kg )</th>
        <th>Cost(Credits)</th>
        <th>People Capacity</th>
        <th>Class</th>
      </thead>
      <tbody>
        <tr>
            <td>${ship.name}</td>
            <td>${ship.model}</td>
            <td>${ship.manufacturer}</td>
            <td>${ship.cost_in_credits}</td>
            <td>${ship.people_capacity}</td>
            <td>${ship.class}</td>
        </tr>
      </tbody>
    </table> 
      
      `;
  }
  containerShipsTable.innerHTML = `
  <footer>
  <button type = "button" id= "previousShipsBtn">PREVIOUS</>
  <utton type = "button" id= "nextShipsBtn">NEXT</>
  </footer>
  `;
}

//fetchShips();
