// // fetch top scorers
//  <img src="${playerPhoto}" class="player-photo me-2 rounded-circle pe-1" width="35px"></img>
let ApiKeySTATUS =
  "0b6eaca5f67157779e051b0b21f584ee0c12ab49e84b9fb12ee9deda4e0639e0";
let topScorersUrl = `https://apiv2.allsportsapi.com/football/?met=Topscorers&leagueId=152&APIkey=${ApiKeySTATUS}`;

fetch(topScorersUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log("top scorers data is ");

    console.log(data);
    var sortedTopScorers = data.result.sort();
    data.result.forEach((scorer) => {
      let scorerDiv = document.createElement("tr");
      let playerPhoto =
        scorer.player_image && scorer.player_image.trim() !== ""
          ? scorer.player_image
          : "https://www.gravatar.com/avatar/?d=mp&s=40";

      scorerDiv.innerHTML = `
      <td>
        <span class="rank-badge ${scorer.player_place == 1 ? "top" : ""}">
          ${scorer.player_place}
        </span>
      </td>

      <td>
        <div class="d-flex align-items-center">

        

          <div>
            <div class="player-name fw-bold">${scorer.player_name}</div>
            <div class="team-name text-muted">${scorer.team_name}</div>
          </div>

        </div>
      </td>

      <td class="text-center">${scorer.goals}</td>
      <td class="text-center">${scorer.assists ?? 0}</td>
    `;

      document.querySelector(".table2 tbody").appendChild(scorerDiv);
    });
  });

let apiToken =
  "0b6eaca5f67157779e051b0b21f584ee0c12ab49e84b9fb12ee9deda4e0639e0";

// Example league (Premier League = 8)
const cardsrequestUrl = `https://apiv2.allsportsapi.com/football/?&met=Teams&teamId=96&APIkey=${apiToken}`;

fetch(cardsrequestUrl)
  .then((res) => res.json())
  .then((data) => {
    console.log("cards data");
    console.log(data.result[0].players);

    let players = data.result[0].players;
    players.forEach((player) => {
      let row = document.createElement("tr");
      row.innerHTML = `
                          <td><span class="rank-badge ">${player.player_number}</span></td>
                            <td>
                                <div class="d-flex align-items-center">
                                    
                                    <img src="${player.player_image || "https://www.gravatar.com/avatar/?d=mp&s=40"}"onerror="this.src='https://www.gravatar.com/avatar/?d=mp&s=40'"class="team-logo rounded-circle pe-1"alt="player" width="15px" height="15px"/>
                                    <span class="player-name">${player.player_name}</span>
                                </div>
                            </td>
                            <td class="text-center">${player.player_red_cards === "" ? 0 : player.player_red_cards}</td>
                            <td class="text-center stat-pos">${player.player_yellow_cards === "" ? 0 : player.player_yellow_cards}</td>`;

      document.querySelector(".table3 tbody").appendChild(row);
    });
  })
  .catch((error) => console.log(error));


  document.querySelector('.sort').addEventListener('click',sort());

   function sort() {
    
   }
