// document.addEventListener("DOMContentLoaded", function () {
  // //  SLIDER SECTION

  // let slides = [
  //   {
  //     image: "./images/newsimage20.png",
  //     btnText: "FOOTBALL",
  //     PText:
  //       "Tournament canceled because COVID-19, and Indonesia stay safe and healthy",
  //   },
  //   {
  //     image: "./images/newsimage1.png",
  //     btnText: "SPORTS",
  //     PText: "Team Sedang Melakukan sesi Foto untuk majalah dan lainnya.",
  //   },
  // ];

  // let index = 0;

  // function updateSlide() {
  //   let header = document.querySelector(".main-content-header");
  //   let paragraph = document.querySelector(".main-p");
  //   let button = document.querySelector(".m-btn");

  //   if (header && paragraph && button) {
  //     header.style.backgroundImage = `url('${slides[index].image}')`;
  //     paragraph.innerHTML = slides[index].PText;
  //     button.innerHTML = slides[index].btnText;
  //   }
  // }

  // function nextSlide() {
  //   index++;
  //   if (index >= slides.length) index = 0;
  //   updateSlide();
  // }

  // function prevSlide() {
  //   index--;
  //   if (index < 0) index = slides.length - 1;
  //   updateSlide();
  // }

  // if (document.querySelector(".main-content-header")) {
  //   setInterval(nextSlide, 4000);
  // }

  // // live FOOTBALL API PAGE

  // let searchBtn = document.getElementById("btn-search");

  // if (searchBtn) {
  //   searchBtn.addEventListener("click", function () {
  //     let fromDate = document.querySelector(".from-date").value;
  //     let toDate = document.querySelector(".to-date").value;

  //     if (!fromDate || !toDate) {
  //       alert("Please select both dates");
  //       return;
  //     }

  //     let ApiKey =
  //       "0b6eaca5f67157779e051b0b21f584ee0c12ab49e84b9fb12ee9deda4e0639e0";
  //     let apiUrl = `https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${ApiKey}&from=${fromDate}&to=${toDate}&leagueId=152`;

  //     fetch(apiUrl)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         if (!data.result) {
  //           alert("No matches found");
  //           return;
  //         }

  //         let matchesContainer = document.querySelector(".matches-container");
  //         matchesContainer.innerHTML = "";

  //         data.result.forEach((m) => {
  //           let matchDiv = document.createElement("div");
  //           matchDiv.innerHTML = `
                 
  //               <div class="live-matches results">
  //                   <div class="results-head">
  //                       <p>PREMIER LEAGUE</p>
  //                       <button class="${m.event_status === "Finished" ? "finish-btn" : "live-btn"}">
  //                           ${m.event_status === "Finished" ? "FINISHED" : "LIVE"}
  //                       </button>
  //                   </div>
  //                   <div class="goal">
  //                       <div class="logo-img">
  //                           <img class="left-img" src="${m.away_team_logo}">
  //                           <p>${m.event_away_team}</p>
  //                       </div>
  //                       <div class="live-result">
  //                           <p class="final-result">${m.event_final_result}</p>
  //                       </div>
  //                       <div class="logo-img">
  //                           <p>${m.event_home_team}</p>
  //                           <img class="right-img" src="${m.home_team_logo}" alt="">
  //                       </div>
  //                   </div>
  //                   <div class="results-foot">
  //                       <div class="line"></div>
  //                       <div>
  //                           <p>${m.event_date}</p>
  //                       </div>
  //                   </div>
  //               </div>`;

  //           matchesContainer.appendChild(matchDiv);
  //         });
  //       })
  //       .catch((err) => console.error("Fetch error:", err));
  //   });
  // }

  // //  WEATHER SECTION

  //     let weatherKey = "0d4b55096c3f09f66d1db3a5796fccdd";
  //     let weatherCityName = "Cairo";
  //     let weatherCountryCode = "EG";

  //     let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${weatherCityName},${weatherCountryCode}&appid=${weatherKey}&units=metric`;

  // const weatherWidget = document.querySelector(".weather-card");
  // if (weatherWidget) {
  //   fetch(weatherUrl)
  //     .then((results) => results.json())
  //     .then((data) => {
  //       console.log({ data });

  //       document.querySelector(".weather-temp").innerText = `${Math.round(data.main.temp)}°C`;
  //       document.querySelector(".weather-city").innerText = `${data.name}, Egypt`;
  //       document.querySelector(".weather-desc").innerText = data.weather[0].description;
  //       document.querySelector(".wind").innerText = `${data.wind.speed} m/s`;
  //       document.querySelector(".humadity").innerText = `${data.main.humidity}%`;
  //       document.querySelector(".high").innerText = `${Math.round(data.main.temp_max)}°C`;

  //       const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  //       document.querySelector(".weather-icon-wrap img")?.setAttribute("src", iconUrl);
  //     })
  //     .catch((err) => console.error("Weather fetch failed:", err));
  // }

  // });

  // //  Standing SECTION

  //   let ApiKeySport = "0b6eaca5f67157779e051b0b21f584ee0c12ab49e84b9fb12ee9deda4e0639e0";
  // let leagueId = 152;

  // let apiUrlSport = `https://apiv2.allsportsapi.com/football/?met=Standings&leagueId=${leagueId}&APIkey=${ApiKeySport}`;

  // fetch(apiUrlSport)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //     data.result.away.forEach((team) => {

  //         let teamDiv = document.createElement("tr");
  //         teamDiv.innerHTML = `
  //                             <td><span class="rank-badge ${team.standing_place == 1 ? 'top' : ''}">${team.standing_place}</span></td>
  //                             <td>
  //                                 <div class="d-flex align-items-center">
  //                                     <img src="${team.team_logo}" class="team-logo" alt="Team Logo""/>
  //                                     <span class="player-name">${team.standing_team}</span>
  //                                 </div>
  //                             </td>
  //                             <td class="text-center hide-sm">${team.standing_P}</td>
  //                             <td class="text-center stat-pos">${team.standing_W}</td>
  //                             <td class="text-center stat-neg">${team.standing_L}</td>
  //                             <td class="text-center hide-sm">${team.standing_F}</td>
  //                             <td class="text-center hide-sm">${team.standing_A}</td>
  //                             <td class="text-center hide-sm">${team.standing_GD}</td>
  //                             <td class="text-center pts-cell">${team.standing_PTS}</td>`
  //         document.querySelector(".table tbody").appendChild(teamDiv);
  //     });
  //   });

  // // -----------------------------------

  // // TOP SCORERS SECTION fetch

  //   let ApiKeySTATUS = "0b6eaca5f67157779e051b0b21f584ee0c12ab49e84b9fb12ee9deda4e0639e0";
  // let topScorersUrl = `https://apiv2.allsportsapi.com/football/?met=Topscorers&leagueId=152&APIkey=${ApiKeySTATUS}`;

  // fetch(topScorersUrl)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //     data.result.forEach((scorer) => {
  //       let scorerDiv = document.createElement("tr");
  //       scorerDiv.innerHTML = `
  //                           <td><span class="rank-badge  ${scorer.player_place == 1 ? 'top' : ''}">${scorer.player_place}</span></td>
  //                           <td>
  //                               <div class="d-flex align-items-center">

  //                                   <span class="player-name me-3 fw-bold">${scorer.player_name}</span>
  //                                   <span class="team-name text-sm">(${scorer.team_name})</span>
  //                               </div>
  //                           </td>
  //                           <td class="text-center">${scorer.goals}</td>
  //                           <td class="text-center">${scorer.assists == null ? 0 : scorer.assists}</td>`;
  //                         document.querySelector(".table2 tbody").appendChild(scorerDiv);

  //     })

  //    });

  // /// ==============================

  // // Cards SECTION fetch

  //   let apiKey = "2870096360c359bf534e3848cd002d67";

  // fetch("https://v3.football.api-sports.io/players?league=29&season=2022&page=1", {
  //   method: "GET",
  //   headers: {
  //     "x-apisports-key": apiKey
  //   }
  // })
  // .then(response => response.json())
  // .then(data => {
  //   console.log(data);
  //   let count = 0 ;
  //   data.response.forEach(player => {
  //     ++count;
  //     let playerDiv = document.createElement("tr");
  //     playerDiv.innerHTML = `
  //                            <td><span class="rank-badge ${count === 1 ? 'top' : ''}">${count}</span></td>
  //                             <td>
  //                                 <div class="d-flex align-items-center">
  //                                     <img src=${player.statistics[0].team.logo} class="teamlogo" alt="Team Logo"   />
  //                                     <span class="player-name">${player.player.lastname}</span>
  //                                 </div>
  //                             </td>
  //                             <td class="text-center">${player.statistics[0].cards.red}</td>
  //                             <td class="text-center stat-pos">${player.statistics[0].cards.yellow}</td>

  //     `;
  //     document.querySelector(".table3 tbody").appendChild(playerDiv);

  //   })

  // });

  // // ==============================

  // // curency fetch

  // let currencyApiKey = '4261ad83026f8a740ec6ef28';
  // let currencyUrl = `https://v6.exchangerate-api.com/v6/${currencyApiKey}/latest/USD`;

  // fetch(currencyUrl)
  //   .then(response => response.json())
  //   .then(data => {

  //    console.log(data);
  //    document.querySelector(".dollar").innerText = data.conversion_rates.EGP.toFixed(2);
  //    document.querySelector(".sar").innerHTML = `${(data.conversion_rates.EGP / data.conversion_rates.SAR).toFixed(2)}`;

  //   }
  // );





  /// ==============================

  // let liveApiKey = "0b6eaca5f67157779e051b0b21f584ee0c12ab49e84b9fb12ee9deda4e0639e0";
  // let fromDatee = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
  // let toDatee = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]; // Get date 7 days from now
  // let liveUrl = `https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${liveApiKey}&from=${fromDatee}&to=${toDatee}&leagueId=152`;

  // fetch(liveUrl)
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);

  //   });



  // //for home page api fetch

  // let homeapikey = 'c7e30fc980451b60318881de6df8f7c2';
  // let category = 'sports';
  // let homeUrl = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&apikey=${homeapikey}`;

  // fetch(homeUrl).then(res => res.json()).then(data => {

  //  console.log(data);

  //  document.querySelector('.nav-header img').src= `${data.articles[3].image}`;
  //  document.querySelector('.aside-description').innerHTML= `${data.articles[3].description.slice(0,80)}`;
  //  document.querySelector('.nav-header .puplished-time').innerHTML = `${data.articles[3].publishedAt.slice(0,10)}`;
  //    document.querySelector('.place1').innerHTML = `${data.articles[3].source.name}`;

  //   document.querySelector('.nav-img2').src=`${data.articles[6].image}`;
  //  document.querySelector('.nav-2 .aside-description').innerHTML= `${data.articles[6].description.slice(0,80)}`;
  //    document.querySelector('.time2').innerHTML = `${data.articles[6].publishedAt.slice(0,10)}`;
  //    document.querySelector('.place2').innerHTML = ` ${data.articles[6].source.name}`;

  // });

  //------------------------------
  // //fetching live pahe home

  //   let ApiKey =
  //     "0b6eaca5f67157779e051b0b21f584ee0c12ab49e84b9fb12ee9deda4e0639e0";

  //   let today = new Date().toISOString().split("T")[0]; // 2026-03-08

  //   let fromDate = "2026-03-05";
  //   let toDate = "2026-03-08";
  //   let apiUrl = `https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${ApiKey}&from=${fromDate}&to=${toDate}&leagueId=152`;
  //   console.log(apiUrl);

  //   fetch(apiUrl)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (!data.result) {
  //         console.log("No matches returned");
  //         let element = this.createElement("div");
  //         element.innerHTML = `
  //         <div class="no-matches">
  //              <p>No Live Matches Exist !</p>
  //            </div>`;
  //            document.querySelector('.live-section').appendChild(element);

  //       }
  //       let matches = data.result.slice(0, 2);
  //       console.log(matches);

  //       matches.forEach((match) => {
  //         let element = document.createElement("div");
  //         element.innerHTML = `
  //     <div class="score-card">
  //             <div class="score-league">
  //               <i class="fa-solid fa-futbol"></i> La Liga
  //             </div>
  //             <div class="score-row">
  //               <div class="score-team">
  //                 <img
  //                   src=${match.away_team_logo}
  //                   class="team-logo" alt="BAR">
  //                 <span>${match.event_away_team}</span>
  //               </div>
  //               <div class="score-result">
  //                 <span class="score-num">${match.event_final_result[0]}</span>
  //                 <span class="score-sep">:</span>
  //                 <span class="score-num">${match.event_final_result[match.event_final_result.length-1]}</span>
  //                 <span class="score-time live-pulse">45'</span>
  //               </div>
  //               <div class="score-team right-team">
  //                 <img
  //                   src=${match.home_team_logo}
  //                   class="team-logo" alt="RMA">
  //                 <span>${match.event_home_team}</span>
  //               </div>
  //             </div>
  //           </div>`;

  //         document.querySelector(".live-section").appendChild(element);
  //       });
  //     });
  // });

  // // football fetching api

  // let basketapikey = 'c7e30fc980451b60318881de6df8f7c2';
  // let basketUrl = `https://gnews.io/api/v4/search?q=basketball&lang=en&country=us&apikey=${basketapikey}`;

  // fetch(basketUrl).then(res => res.json()).then(data => {

  // console.log(data);

  //   document.querySelector('.post1 img').src=`${data.articles[7].image}`;
  //    document.querySelector('.post1 .puplishd-place').innerHTML=`${data.articles[7].source.name}`;
  //    document.querySelector('.post1 .puplished-time').innerHTML=`${data.articles[7].publishedAt.slice(0,10)}`;
  //    document.querySelector('.post1 .post-desc').innerHTML=`${data.articles[7].title.slice(0,49)}`;

  //      document.querySelector('.post2 img').src=data.articles[6].image;
  //    document.querySelector('.post2 .puplishd-place').innerHTML=`${data.articles[6].source.name}`;
  //    document.querySelector('.post2 .puplished-time').innerHTML=`${data.articles[6].publishedAt.slice(0,10)}`;
  //    document.querySelector('.post2 .post-desc').innerHTML=`${data.articles[6].title.slice(0,51)}`;

  //      document.querySelector('.post3 img').src=data.articles[5].image;
  //    document.querySelector('.post3 .puplishd-place').innerHTML=`${data.articles[2].source.name}`;
  //    document.querySelector('.post3 .puplished-time').innerHTML=`${data.articles[2].publishedAt.slice(0,10)}`;
  //    document.querySelector('.post3 .post-desc').innerHTML=`${data.articles[2].title.slice(0,51)}`;

  // });

  // // football fetching api

  // let footballapikey = 'c7e30fc980451b60318881de6df8f7c2';
  // let footballUrl = `https://gnews.io/api/v4/search?q=football&lang=en&country=us&apikey=${footballapikey}`;

  // fetch(footballUrl).then(res => res.json()).then(data => {

  // console.log(data);

  //   document.querySelector('.foot1 img').src=data.articles[4].image;
  //    document.querySelector('.foot1 .puplishd-place').innerHTML=`${data.articles[7].source.name}`;
  //    document.querySelector('.foot1 .puplished-time').innerHTML=`${data.articles[7].publishedAt.slice(0,10)}`;
  //    document.querySelector('.foot1 .foot-p').innerHTML=`${data.articles[7].title.slice(0,49)}`;

  //      document.querySelector('.foot2 img').src=data.articles[6].image;
  //    document.querySelector('.foot2 .puplishd-place').innerHTML=`${data.articles[6].source.name}`;
  //    document.querySelector('.foot2 .puplished-time').innerHTML=`${data.articles[6].publishedAt.slice(0,10)}`;
  //    document.querySelector('.foot2 .foot-p').innerHTML=`${data.articles[6].title.slice(0,51)}`;

  //      document.querySelector('.foot3 img').src=data.articles[5].image;
  //    document.querySelector('.foot3 .puplishd-place').innerHTML=`${data.articles[2].source.name}`;
  //    document.querySelector('.foot3 .puplished-time').innerHTML=`${data.articles[2].publishedAt.slice(0,10)}`;
  //    document.querySelector('.foot3 .foot-p').innerHTML=`${data.articles[2].title.slice(0,51)}`;

  // });

















  // function detectSport(article) {
  //   let text = (article.title + " " + article.description).toLowerCase();

  //   if (
  //     text.includes("football") ||
  //     text.includes("soccer") ||
  //     text.includes("goal")
  //   ) {
  //     return "Football ⚽";
  //   }

  //   if (text.includes("basketball") || text.includes("nba")) {
  //     return "Basketball 🏀";
  //   }

  //   if (text.includes("tennis") || text.includes("grand slam")) {
  //     return "Tennis 🎾";
  //   }

  //   if (text.includes("nfl") || text.includes("touchdown")) {
  //     return "American Football 🏈";
  //   }

  //   if (text.includes("baseball") || text.includes("mlb")) {
  //     return "Baseball ⚾";
  //   }

  //   return "Sport";
  // }








  // // Fetching Trending Sports

  // let TrendingapiKey = 'c7e30fc980451b60318881de6df8f7c2';

  // let url = `https://gnews.io/api/v4/top-headlines?category=sports&lang=en&max=10&apikey=${TrendingapiKey}`;

  // fetch(url)
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);

  //    let selectedData = data.articles.slice(0,4);
  //    console.log(selectedData);

  //    selectedData.forEach(item => {

  //     let sport = document.createElement('div');
  //     let categry = detectSport(item);
  //     sport.innerHTML =`
  //      <div class="sport">

  //               <button class="aside-btn sport-btn">${categry}</button>
  //               <p class="sport-info">
  //                 <span class="puplishd-place">${item.source.name}</span>
  //                 <span class="puplished-time"> ${item.publishedAt.slice(0,10)} </span>
  //               </p>
  //               <p>${item.title}</p>
  //             </div>

  //     `;
  //     document.querySelector('.sports').appendChild(sport);

  //    })

  //   })
  //   .catch(error => console.log("Error:", error));







  // // fetching swimming sport from gnews

  // let swimmingApiKey = "c7e30fc980451b60318881de6df8f7c2";
  // let swimmingUrl = `https://gnews.io/api/v4/search?q=swimming&lang=en&country=us&apikey=${swimmingApiKey}`;

  // fetch(swimmingUrl)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data.articles);
  //     document.querySelector(".side .nav-headerimg img").src =data.articles[0].image;
  //      document.querySelector(".side .aside-btn").innerText=' Swimming';
  //      document.querySelector(".side .puplishd-place").innerHTML = data.articles[0].source.name;
  //       document.querySelector(".side .puplished-time").innerHTML = data.articles[0].publishedAt.slice(0,10);
  //       document.querySelector(".side .aside-description").innerHTML = data.articles[0].description.slice(0,143);
        


  //   });
// });
