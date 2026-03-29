


// live FOOTBALL API PAGE

let searchBtn = document.getElementById("btn-search");
let allMatches = []; 

const teamFilterInput = document.getElementById("team-filter");
const clearTeamBtn    = document.getElementById("clear-team");

if (teamFilterInput) {
  teamFilterInput.addEventListener("input", function () {
    applyTeamFilter();
    toggleClearBtn();
  });
}

if (clearTeamBtn) {
  clearTeamBtn.addEventListener("click", function () {
    teamFilterInput.value = "";
    applyTeamFilter();
    toggleClearBtn();
    teamFilterInput.focus();
  });
}

function toggleClearBtn() {
  if (!clearTeamBtn) return;
  clearTeamBtn.style.opacity = teamFilterInput.value.trim() ? "1" : "0";
  clearTeamBtn.style.pointerEvents = teamFilterInput.value.trim() ? "auto" : "none";
}

function applyTeamFilter() {
  if (!allMatches.length) return;
  const query = teamFilterInput ? teamFilterInput.value.trim().toLowerCase() : "";

  const filtered = query
    ? allMatches.filter(
        (m) =>
          m.event_home_team.toLowerCase().includes(query) ||
          m.event_away_team.toLowerCase().includes(query)
      )
    : allMatches;

  renderMatches(filtered);

  // update count badge
  const badge = document.getElementById("results-count");
  if (badge) {
    badge.textContent = filtered.length + " match" + (filtered.length !== 1 ? "es" : "");
    badge.style.display = "inline-block";
  }
}

// ── Main search (date range – unchanged from original) ──────────────────────
if (searchBtn) {
  searchBtn.addEventListener("click", function () {
    let fromDate = document.querySelector(".from-date").value;
    let toDate   = document.querySelector(".to-date").value;

    if (!fromDate || !toDate) {
      alert("Please select both dates");
      return;
    }

    // Reset team filter on new fetch
    if (teamFilterInput) teamFilterInput.value = "";
    toggleClearBtn();

    const matchesContainer = document.querySelector(".matches-container");
    matchesContainer.innerHTML = `
      <div class="loading-state">
        <div class="spinner"></div>
        <p>Fetching matches…</p>
      </div>`;

    const badge = document.getElementById("results-count");
    if (badge) badge.style.display = "none";

    let ApiKey  = "0b6eaca5f67157779e051b0b21f584ee0c12ab49e84b9fb12ee9deda4e0639e0";
    let apiUrl  = `https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${ApiKey}&from=${fromDate}&to=${toDate}&leagueId=177`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (!data.result) {
          matchesContainer.innerHTML = `<p class="empty-state">No matches found for this period.</p>`;
          allMatches = [];
          return;
        }

        allMatches = data.result;
        populateTeamSuggestions(allMatches);
        renderMatches(allMatches);

        if (badge) {
          badge.textContent = allMatches.length + " match" + (allMatches.length !== 1 ? "es" : "");
          badge.style.display = "inline-block";
        }
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        matchesContainer.innerHTML = `<p class="empty-state">Failed to load matches. Please try again.</p>`;
      });
  });
}


function renderMatches(matches) {
  const matchesContainer = document.querySelector(".matches-container");
  matchesContainer.innerHTML = "";

  if (!matches.length) {
    matchesContainer.innerHTML = `<p class="empty-state">No matches found for "<strong>${teamFilterInput?.value || ""}</strong>".</p>`;
    return;
  }

  matches.forEach((m, i) => {
    const matchDate = new Date(`${m.event_date}T${m.event_time}`);
    const now       = new Date();
    let status      = "";

    if (m.event_live === "1") {
      status = `Live${m.event_status ? " · " + m.event_status : ""}`;
    } else if (m.event_final_result !== "-" && m.event_final_result !== "") {
      status = "Finished";
    } else if (matchDate < now) {
      status = "Pending";
    } else {
      status = "Upcoming";
    }

    const statusClass = status === "Finished"
      ? "finish-btn"
      : status.startsWith("Live")
      ? "live-btn"
      : "upcoming-btn";

    let matchDiv = document.createElement("div");
    matchDiv.style.animationDelay = `${i * 40}ms`;
    matchDiv.classList.add("match-entry");
    matchDiv.innerHTML = `
      <div class="live-matches results">
        <div class="results-head">
          <p>PREMIER LEAGUE</p>
          <button class="${statusClass}">${status}</button>
        </div>
        <div class="goal">
          <div class="logo-img">
            <img class="left-img" src="${m.away_team_logo}" alt="${m.event_away_team}">
            <p>${m.event_away_team}</p>
          </div>
          <div class="live-result">
            <p class="final-result">${m.event_final_result}</p>
          </div>
          <div class="logo-img">
            <p>${m.event_home_team}</p>
            <img class="right-img" src="${m.home_team_logo}" alt="${m.event_home_team}">
          </div>
        </div>
        <div class="results-foot">
          <div class="line"></div>
          <p class="livem-p">
            ${status === "Upcoming" ? `${m.event_date} &nbsp;${m.event_time}` : m.event_date}
          </p>
        </div>
      </div>`;

    matchesContainer.appendChild(matchDiv);
  });
}

// ── Populate datalist with real team names
function populateTeamSuggestions(matches) {
  const datalist = document.getElementById("team-suggestions");
  if (!datalist) return;
  const teams = new Set();
  matches.forEach((m) => { teams.add(m.event_home_team); teams.add(m.event_away_team); });
  datalist.innerHTML = [...teams].map((t) => `<option value="${t}">`).join("");
}