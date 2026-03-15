// for main content
//  SLIDER SECTION

let slides = [
  {
    image: "./images/newsimage20.png",
    btnText: "FOOTBALL",
    PText:
      "The 2026 FIFA World Cup is set to begin on June 15, 2026, across the USA, Mexico, and Canada",
  },
  {
    image: "./images/newsimage1.png",
    btnText: "SPORTS",
    PText:
      "Arizona Wildcats won the Big 12 Tournament, finishing strong and entering March.",
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

// football fetching api section

let footballapikey = "c7e30fc980451b60318881de6df8f7c2";
let footballUrl = `https://gnews.io/api/v4/search?q=football&lang=en&country=us&apikey=${footballapikey}`;

fetch(footballUrl)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    document.querySelector(".foot1 img").src = data.articles[4].image;
    document.querySelector(".foot1 .puplishd-place").innerHTML =
      `${data.articles[7].source.name}`;
    document.querySelector(".foot1 .puplished-time").innerHTML =
      `${data.articles[7].publishedAt.slice(0, 10)}`;
    document.querySelector(".foot1 .foot-p").innerHTML =
      `${data.articles[7].title.slice(0, 49)}`;

    document.querySelector(".foot2 img").src = data.articles[6].image;
    document.querySelector(".foot2 .puplishd-place").innerHTML =
      `${data.articles[6].source.name}`;
    document.querySelector(".foot2 .puplished-time").innerHTML =
      `${data.articles[6].publishedAt.slice(0, 10)}`;
    document.querySelector(".foot2 .foot-p").innerHTML =
      `${data.articles[6].title.slice(0, 51)}`;

    document.querySelector(".foot3 img").src = data.articles[5].image;
    document.querySelector(".foot3 .puplishd-place").innerHTML =
      `${data.articles[2].source.name}`;
    document.querySelector(".foot3 .puplished-time").innerHTML =
      `${data.articles[2].publishedAt.slice(0, 10)}`;
    document.querySelector(".foot3 .foot-p").innerHTML =
      `${data.articles[2].title.slice(0, 51)}`;
  });

// basket fetching api

let basketapikey = "c7e30fc980451b60318881de6df8f7c2";
let basketUrl = `https://gnews.io/api/v4/search?q=basketball&lang=en&country=us&apikey=${basketapikey}`;
// Basketball news

fetch(basketUrl)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    document.querySelector(".post1 img").src = `${data.articles[7].image}`;
    document.querySelector(".post1 .puplishd-place").innerHTML =
      `${data.articles[7].source.name}`;
    document.querySelector(".post1 .puplished-time").innerHTML =
      `${data.articles[7].publishedAt.slice(0, 10)}`;
    document.querySelector(".post1 .post-desc").innerHTML =
      `${data.articles[7].title.slice(0, 49)}`;

    document.querySelector(".post2 img").src = data.articles[6].image;
    document.querySelector(".post2 .puplishd-place").innerHTML =
      `${data.articles[6].source.name}`;
    document.querySelector(".post2 .puplished-time").innerHTML =
      `${data.articles[6].publishedAt.slice(0, 10)}`;
    document.querySelector(".post2 .post-desc").innerHTML =
      `${data.articles[6].title.slice(0, 51)}`;

    document.querySelector(".post3 img").src = data.articles[5].image;
    document.querySelector(".post3 .puplishd-place").innerHTML =
      `${data.articles[2].source.name}`;
    document.querySelector(".post3 .puplished-time").innerHTML =
      `${data.articles[2].publishedAt.slice(0, 10)}`;
    document.querySelector(".post3 .post-desc").innerHTML =
      `${data.articles[2].title.slice(0, 51)}`;
  });

//for home page api fetch General Sports

// let homeapikey = "c7e30fc980451b60318881de6df8f7c2";
// let category = "sports";
// let homeUrl = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&apikey=${homeapikey}`;
let generalsportskey = `85cfcd572fb542818cbf1d42902ab004`;
let generalsportsurlKey = `https://newsapi.org/v2/top-headlines?category=sports&language=en&apiKey=${generalsportskey}`;

fetch(generalsportsurlKey)
  .then((res) => res.json())
  .then((data) => {
    console.log("general");

    console.log(data);

    document.querySelector(".nav-header img").src = `${data.articles[3].image||'images/basktplayer1.png'}`;
    document.querySelector(".aside-description").innerHTML =
      `${data.articles[3].description.slice(0, 80)}`;
    document.querySelector(".nav-header .puplished-time").innerHTML =
      `${data.articles[3].publishedAt.slice(0, 10)}`;
    document.querySelector(".place1").innerHTML =
      `${data.articles[3].source.name}`;

    document.querySelector(".nav-img2").src = `${data.articles[6].image ||'images/pasket- player2.png'}`;
    document.querySelector(".nav-2 .aside-description").innerHTML =
      `${data.articles[6].description.slice(0, 93)}`;
    document.querySelector(".time2").innerHTML =
      `${data.articles[6].publishedAt.slice(0, 10)}`;
    document.querySelector(".place2").innerHTML =
      ` ${data.articles[6].source.name}`;
  });

// for sidebar

// fetching swimming sport from gnews and handeling section

function detectSport(article) {
  let text = (article.title + " " + article.description).toLowerCase();

  if (
    text.includes("football") ||
    text.includes("soccer") ||
    text.includes("goal")
  ) {
    return "Football ⚽";
  }

  if (text.includes("basketball") || text.includes("nba")) {
    return "Basketball 🏀";
  }

  if (text.includes("tennis") || text.includes("grand slam")) {
    return "Tennis 🎾";
  }

  if (text.includes("nfl") || text.includes("touchdown")) {
    return "American Football 🏈";
  }

  if (text.includes("baseball") || text.includes("mlb")) {
    return "Baseball ⚾";
  }

  return "Sport";
}

let swimmingApiKey = "c7e30fc980451b60318881de6df8f7c2";
let swimmingUrl = `https://gnews.io/api/v4/search?q=swimming&lang=en&country=us&apikey=${swimmingApiKey}`;

fetch(swimmingUrl)
  .then((res) => res.json())
  .then((data) => {
    console.log("swimming data");

    console.log(data.articles);
    document.querySelector(".side .nav-headerimg img").src =
      data.articles[0].image;
    document.querySelector(".side .aside-btn").innerText = " Swimming";
    document.querySelector(".side .puplishd-place").innerHTML =
      data.articles[0].source.name;
    document.querySelector(".side .puplished-time").innerHTML =
      data.articles[0].publishedAt.slice(0, 10);
    document.querySelector(".side .aside-description").innerHTML =
      data.articles[0].description.slice(0, 143);
  });

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
      console.log('weather');
      
      console.log({ data });

      document.querySelector(".weather-temp").innerText =
        `${Math.round(data.main.temp)}°C`;
      document.querySelector(".weather-city").innerText = `${data.name}, Egypt`;
      document.querySelector(".weather-desc").innerText =
        data.weather[0].description;
      document.querySelector(".wind").innerText = `${data.wind.speed} m/s`;
      document.querySelector(".humadity").innerText = `${data.main.humidity}%`;
      document.querySelector(".high").innerText =
        `${Math.round(data.main.temp_max)}°C`;

      const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      document.querySelector(".weather-icon-wrap .weather-icon").setAttribute("src", iconUrl);
    })
    .catch((err) => console.error("Weather fetch failed:", err));
}

// ==============================

// curency fetch

let currencyApiKey = "4261ad83026f8a740ec6ef28";
let currencyUrl = `https://v6.exchangerate-api.com/v6/${currencyApiKey}/latest/USD`;

fetch(currencyUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.querySelector(".dollar").innerText =
      data.conversion_rates.EGP.toFixed(2);
    document.querySelector(".sar").innerHTML =
      `${(data.conversion_rates.EGP / data.conversion_rates.SAR).toFixed(2)}`;
  });

//fetching live homepage section

let ApiKey = "0b6eaca5f67157779e051b0b21f584ee0c12ab49e84b9fb12ee9deda4e0639e0";

// let today = new Date().toISOString().split("T")[0]; // 2026-03-08

// let fromDate = "2026-03-14";
// let toDate = "2026-03-14";
const today = new Date().toISOString().slice(0, 10);
let apiUrl = `https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${ApiKey}&from=${today}&to=${today}&leagueId=152`;
console.log(apiUrl);

fetch(apiUrl)
  .then((res) => res.json())
  .then((data) => {
    console.log("live data");
    console.log(data);

    if (!data.result) {
      console.log("No results returned");
      // let element = this.createElement("div");
      // element.innerHTML = `
      //     <div class="no-matches">
      //          <p>No Live Matches Exist !</p>
      //        </div>`;
      // document.querySelector(".live-section").appendChild(element);
    }
    let liveArray = [];

    data.result.forEach((e) => {
      if (e.event_live === "1") {
        liveArray.push(e);
      }
    });
    if (liveArray.length === 0) {
      console.log("No matches returned");
      let element = this.createElement("div");
      element.innerHTML = `
          <div class="no-matches">
               <p>No Live Matches Exist !</p>
             </div>`;
      document.querySelector(".live-section").appendChild(element);
    }
    console.log(liveArray);

    liveArray.slice(0,2).forEach((match) => {
      let element = document.createElement("div");
      element.innerHTML = `
      <div class="score-card">
              <div class="score-league">
                <i class="fa-solid fa-futbol"></i> La Liga
              </div>
              <div class="score-row">
                <div class="score-team">
                  <img
                    src=${match.away_team_logo}
                    class="team-logo" alt="BAR">
                  <span>${match.event_away_team}</span>
                </div>
                <div class="score-result">
                  <span class="score-num">${match.event_final_result[0]}</span>
                  <span class="score-sep">:</span>
                  <span class="score-num">${match.event_final_result[match.event_final_result.length - 1]}</span>
                  <span class="score-time live-pulse">${match.event_status}</span>
                </div>
                <div class="score-team right-team">
                  <img
                    src=${match.home_team_logo}
                    class="team-logo" alt="RMA">
                  <span>${match.event_home_team}</span>
                </div>
              </div>
            </div>`;

      document.querySelector(".live-section").appendChild(element);
    });
  });

//Fetching Trending Sports

// let TrendingapiKey = "c7e30fc980451b60318881de6df8f7c2";

// let url = `https://gnews.io/api/v4/top-headlines?category=sports&lang=en&max=10&apikey=${TrendingapiKey}`;
let sportskey = `85cfcd572fb542818cbf1d42902ab004`;
let sportsurlKey = `https://newsapi.org/v2/top-headlines?category=sports&language=en&apiKey=${sportskey}`;

fetch(sportsurlKey)
  .then((response) => response.json())
  .then((data) => {
    console.log('trending sports');
    
    console.log(data);

    let selectedData = data.articles.slice(0, 4);
    console.log(selectedData);

    selectedData.forEach((item) => {
      let sport = document.createElement("div");
      let categry = detectSport(item);
      sport.innerHTML = `
     <div class="sport">

              <button class="aside-btn sport-btn">${categry}</button>
              <p class="sport-info">
                <span class="puplishd-place">${item.source.name}</span>
                <span class="puplished-time"> ${item.publishedAt.slice(0, 10)} </span>
              </p>
              <p>${item.title}</p>
            </div>

    `;
      document.querySelector(".sports").appendChild(sport);
    });
  })
  .catch((error) => console.log("Error:", error));

// fetch health news

let key = `85cfcd572fb542818cbf1d42902ab004`;
let urlKey = `https://newsapi.org/v2/top-headlines?category=health&language=en&apiKey=${key}`;

fetch(urlKey)
  .then((res) => res.json())
  .then((data) => {
    console.log("Health news:", data.articles);

    data.articles.slice(0, 3).forEach((art) => {
      let article = document.createElement("div");
      article.innerHTML = `
    <div class="article">
              <div class="article-img">
                <img src=${art.urlToImage} alt="">
              </div>
              <div class="article-info">
                <p class="sport-info">
                  <span class="puplishd-place">${art.source.name}</span>
                  <span class="puplished-time"> ${art.publishedAt.slice(0, 10)} </span>
                </p>
                <p class="art-p">${art.description.slice(0, 60)}</p>

              </div>
            </div>
   `;
      document.querySelector(".related-articles").appendChild(article);
    });
  })
  .catch((err) => console.error(err));
