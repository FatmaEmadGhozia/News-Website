//  Standing SECTION fetch

    let ApiKeySport = "0b6eaca5f67157779e051b0b21f584ee0c12ab49e84b9fb12ee9deda4e0639e0";
  let leagueId = 177;

  let apiUrlSport = `https://apiv2.allsportsapi.com/football/?met=Standings&leagueId=${leagueId}&APIkey=${ApiKeySport}`;

  fetch(apiUrlSport)
    .then((response) => response.json())
    .then((data) => {
        console.log('standing');
        
      console.log(data);
      data.result.forEach((team) => {

          let teamDiv = document.createElement("tr");
          teamDiv.innerHTML = `
                              <td><span class="rank-badge ${team.standing_place == 1 ? 'top' : ''}">${team.standing_place}</span></td>
                              <td>
                                  <div class="d-flex align-items-center">
                                      <img src="${team.team_logo}" class="team-logo" alt="Team Logo""/>
                                      <span class="player-name">${team.standing_team}</span>
                                  </div>
                              </td>
                              <td class="text-center hide-sm">${team.standing_P}</td>
                              <td class="text-center stat-pos">${team.standing_W}</td>
                              <td class="text-center stat-pos">${team.standing_D}</td>
                              <td class="text-center stat-neg">${team.standing_L}</td>
                              <td class="text-center hide-sm">${team.standing_F}</td>
                              <td class="text-center hide-sm">${team.standing_A}</td>
                              <td class="text-center hide-sm">${team.standing_GD}</td>
                              <td class="text-center pts-cell">${team.standing_PTS}</td>`
          document.querySelector(".table tbody").appendChild(teamDiv);
      });
    });