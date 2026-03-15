// live FOOTBALL API PAGE

let searchBtn = document.getElementById("btn-search");

if (searchBtn) {
  searchBtn.addEventListener("click", function () {
    let fromDate = document.querySelector(".from-date").value;
    let toDate = document.querySelector(".to-date").value;

    if (!fromDate || !toDate) {
      alert("Please select both dates");
      return;
    }

    let ApiKey =
      "0b6eaca5f67157779e051b0b21f584ee0c12ab49e84b9fb12ee9deda4e0639e0";
    let apiUrl = `https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${ApiKey}&from=${fromDate}&to=${toDate}&leagueId=152`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (!data.result) {
          alert("No matches found");
          return;
        }
        console.log("live page data is ");
        console.log(data.result);

        let matchesContainer = document.querySelector(".matches-container");
        matchesContainer.innerHTML = "";
            
        let  status= "";
        data.result.forEach((m) => {
          if (m.event_live === "1" && m.event_status!=='Finished') {
            status = `Live .${m.event_status}`;
          } else if (m.event_final_result !== "-") {
            status = "Finished";
          } else {
            status = "Upcoming";
          }
          let matchDiv = document.createElement("div");
          matchDiv.innerHTML = `
                 
                <div class="live-matches results">
                    <div class="results-head">
                        <p>PREMIER LEAGUE</p>
                        
                        <button class="${status === "Finished" ? "finish-btn" : status.startsWith("Live") ? "live-btn" :"upcoming-btn"}">
                          ${status}  
                        </button>
                    </div>
                    <div class="goal">
                        <div class="logo-img">
                            <img class="left-img" src="${m.away_team_logo}">
                            <p>${m.event_away_team}</p>
                        </div>
                        <div class="live-result">
                            <p class="final-result">${m.event_final_result}</p>
                        </div>
                        <div class="logo-img">
                            <p>${m.event_home_team}</p>
                            <img class="right-img" src="${m.home_team_logo}" alt="">
                        </div>
                    </div>
                    <div class="results-foot">
                        <div class="line"></div>
                        <div>
                            <p class="livem-p">${status === "Upcoming"?`${m.event_date}   ${m.event_time}` : `${m.event_date}`}</p>
                        </div>
                    </div>
                </div>`;

          matchesContainer.appendChild(matchDiv);
        });
      })
      .catch((err) => console.error("Fetch error:", err));
  });
}
