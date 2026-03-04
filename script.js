




document.addEventListener("DOMContentLoaded", function () {


  //  SLIDER SECTION


  let slides = [
    {
      image: "./images/newsimage20.png",
      btnText: "FOOTBALL",
      PText:
        "Tournament canceled because COVID-19, and Indonesia stay safe and healthy",
    },
    {
      image: "./images/newsimage1.png",
      btnText: "SPORTS",
      PText:
        "Team Sedang Melakukan sesi Foto untuk majalah dan lainnya.",
    },
  ];

  let index = 0;

  function updateSlide() {
    let header = document.querySelector(".main-content-header");
    let paragraph = document.querySelector(".main-p");
    let button = document.querySelector(".m-btn");

    if (header && paragraph && button) {
      header.style.backgroundImage = `url('${slides[index].image}')`;
      paragraph.innerHTML = slides[index].PText;
      button.innerHTML = slides[index].btnText;
    }
  }

  function nextSlide() {
    index++;
    if (index >= slides.length) index = 0;
    updateSlide();
  }

  function prevSlide() {
    index--;
    if (index < 0) index = slides.length - 1;
    updateSlide();
  }

  
  if (document.querySelector(".main-content-header")) {
    setInterval(nextSlide, 4000);
  }










  //  FOOTBALL API SECTION
 
  let searchBtn = document.getElementById("btn-search");

  if (searchBtn) {
    searchBtn.addEventListener("click", function () {

      let fromDate = document.querySelector(".from-date").value;
      let toDate = document.querySelector(".to-date").value;

      if (!fromDate || !toDate) {
        alert("Please select both dates");
        return;
      }

      let ApiKey = "0b6eaca5f67157779e051b0b21f584ee0c12ab49e84b9fb12ee9deda4e0639e0";
      let apiUrl = `https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${ApiKey}&from=${fromDate}&to=${toDate}&leagueId=152`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {

          if (!data.result) {
            alert("No matches found");
            return;
          }

        let matchesContainer = document.querySelector(".matches-container");
                 matchesContainer.innerHTML = "";

          data.result.forEach((m) => {

            let matchDiv = document.createElement('div');
                matchDiv.innerHTML = `
                 
                <div class="live-matches results">
                    <div class="results-head">
                        <p>PREMIER LEAGUE</p>
                        <button class="${m.event_status === 'Finished' ? 'finish-btn' : 'live-btn'}">
                            ${m.event_status === 'Finished' ? 'FINISHED' : 'LIVE'}
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
                            <p>${m.event_date}</p>
                        </div>
                    </div>
                </div>`;

            matchesContainer.appendChild(matchDiv);
          });
        })
        .catch((err) => console.error("Fetch error:", err));
    }
  );
  }







  
  //  WEATHER SECTION
 

 

    let weatherKey = "0d4b55096c3f09f66d1db3a5796fccdd";
    let weatherCityName = "Cairo";
    let weatherCountryCode = "EG";

    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${weatherCityName},${weatherCountryCode}&appid=${weatherKey}&units=metric`;

   
const weatherWidget = document.querySelector(".weather-card");
if (weatherWidget) {
  fetch(weatherUrl)
    .then((results) => results.json())
    .then((data) => {
      console.log({ data });

      document.querySelector(".weather-temp").innerText = `${Math.round(data.main.temp)}°C`;
      document.querySelector(".weather-city").innerText = `${data.name}, Egypt`;
      document.querySelector(".weather-desc").innerText = data.weather[0].description;
      document.querySelector(".wind").innerText = `${data.wind.speed} m/s`;
      document.querySelector(".humadity").innerText = `${data.main.humidity}%`;
      document.querySelector(".high").innerText = `${Math.round(data.main.temp_max)}°C`;

      const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      document.querySelector(".weather-icon-wrap img")?.setAttribute("src", iconUrl);
    })
    .catch((err) => console.error("Weather fetch failed:", err));
}
  

});














  //  Standing SECTION
  



  let ApiKeySport = "0b6eaca5f67157779e051b0b21f584ee0c12ab49e84b9fb12ee9deda4e0639e0";
let leagueId = 152;

let apiUrlSport = `https://apiv2.allsportsapi.com/football/?met=Standings&leagueId=${leagueId}&APIkey=${ApiKeySport}`;

fetch(apiUrlSport)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.result.away.forEach((team) => {

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
                            <td class="text-center stat-neg">${team.standing_L}</td>
                            <td class="text-center hide-sm">${team.standing_F}</td>
                            <td class="text-center hide-sm">${team.standing_A}</td>
                            <td class="text-center hide-sm">${team.standing_GD}</td>
                            <td class="text-center pts-cell">${team.standing_PTS}</td>`
        document.querySelector(".table tbody").appendChild(teamDiv);
    });
  });


  // -----------------------------------

  // TOP SCORERS SECTION fetch

    let ApiKeySTATUS = "0b6eaca5f67157779e051b0b21f584ee0c12ab49e84b9fb12ee9deda4e0639e0";
  let topScorersUrl = `https://apiv2.allsportsapi.com/football/?met=Topscorers&leagueId=152&APIkey=${ApiKeySTATUS}`;

  fetch(topScorersUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.result.forEach((scorer) => {
        let scorerDiv = document.createElement("tr");
        scorerDiv.innerHTML = `
                            <td><span class="rank-badge  ${scorer.player_place == 1 ? 'top' : ''}">${scorer.player_place}</span></td>
                            <td>
                                <div class="d-flex align-items-center">
                                   
                                    <span class="player-name me-3 fw-bold">${scorer.player_name}</span>
                                    <span class="team-name text-sm">(${scorer.team_name})</span>
                                </div>
                            </td>
                            <td class="text-center">${scorer.goals}</td>
                            <td class="text-center">${scorer.assists == null ? 0 : scorer.assists}</td>`;
                          document.querySelector(".table2 tbody").appendChild(scorerDiv);


      })

     });





     /// ==============================

     // Cards SECTION fetch



  let apiKey = "2870096360c359bf534e3848cd002d67";
 

fetch("https://v3.football.api-sports.io/players?league=29&season=2022&page=1", {
  method: "GET",
  headers: {
    "x-apisports-key": apiKey
  }
})
.then(response => response.json())
.then(data => {
  console.log(data);
  let count = 0 ;
  data.response.forEach(player => {
    ++count;
    let playerDiv = document.createElement("tr");
    playerDiv.innerHTML = `
                           <td><span class="rank-badge top">${count}</span></td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <img src=${player.statistics[0].team.logo} class="teamlogo" alt="Team Logo"   />
                                    <span class="player-name">${player.player.lastname}</span>
                                </div>
                            </td>
                            <td class="text-center">${player.statistics[0].cards.red}</td>
                            <td class="text-center stat-pos">${player.statistics[0].cards.yellow}</td>
    
    
    `;
    document.querySelector(".table3 tbody").appendChild(playerDiv);
      

  })




});







// ==============================

// concurency fetch 

