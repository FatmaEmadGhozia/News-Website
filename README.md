⚡ RetNews — Football News & Stats Web App
A responsive football-focused news and statistics web application built with vanilla HTML, CSS, and JavaScript. RetNews provides live match tracking, league standings, top scorer stats, weather updates, and a currency converter — all in a clean magazine-style layout.

📸 Pages Overview
PageDescriptionindex.htmlHomepage with trending news, featured articles, weather widget, currency rates & converter, and live scores sidebarlive.htmlMatch tracker — search fixtures by date range and filter by team namestanders.htmlPremier League standings table for the current seasonstatus.htmlTop scorers leaderboard and players cards (yellow/red)

🚀 Features

Live Match Tracker — Search EPL fixtures by date range with real-time data from AllSportsAPI. Includes a team name filter with autocomplete suggestions and a results count badge.
League Standings — Full Premier League table showing played, wins, draws, losses, goals for/against, goal difference, and points.
Top Scorers — Ranked leaderboard of goals and assists for the current season.
Cards Table — Player yellow/red card stats pulled per team.
Weather Widget — Live weather for Cairo showing temperature, wind speed, and humidity.
Currency Rates & Converter — Live USD/SAR to EGP rates with an interactive converter supporting multiple currencies.
Trending News Ticker — Scrolling headline bar on the homepage.
Newsletter Signup — Email subscription form in the sidebar and footer.
Responsive Design — Mobile-friendly layout using Bootstrap 5; certain columns hide on small screens.


🛠️ Tech Stack

HTML5 / CSS3 — Semantic markup and custom styling
Vanilla JavaScript — No frameworks; all DOM manipulation is native JS
Bootstrap 5.3 — Grid system and utility classes
Font Awesome 6 — Icons throughout the UI
Google Fonts — Playfair Display & Merriweather
AllSportsAPI — Football fixtures, standings, top scorers, and team data


📁 Project Structure
RetNews/
├── index.html          # Homepage
├── live.html           # Live match tracker
├── standers.html       # League standings
├── status.html         # Top scorers & cards
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   ├── main.js         # Homepage logic (weather, currency, news)
│   ├── live.js         # Match search & team filter logic
│   ├── standers.js     # Standings fetch & render
│   └── status.js       # Top scorers & cards fetch & render
└── images/
    ├── logo1.png
    ├── banner.png
    └── ...

⚙️ Setup & Usage
This is a static front-end project — no build step or server required.

Clone the repository

bash   git clone https://github.com/your-username/retnews.git
   cd retnews

Add your API key
The project uses AllSportsAPI. Replace the API key in each JS file with your own:

js   // In live.js, standers.js, status.js
   let ApiKey = "YOUR_API_KEY_HERE";

Open in browser
Simply open index.html in any modern browser. No local server needed.

For best results (to avoid CORS issues with API calls), serve via a local server:
bashnpx serve .
# or
python -m http.server 8080




🔌 API Reference
Gnews for news in the main page 
All football data is fetched from AllSportsAPI v2.
EndpointUsed InPurposemet=Fixtureslive.jsFetch matches by date range (League ID: 177)met=Standingsstanders.jsLeague standings table (League ID: 177)met=Topscorersstatus.jsTop scorers list (League ID: 152)met=Teamsstatus.jsPlayer cards data (Team ID: 96)



📄 License
This project is open source and free to use for educational and personal purposes.


Built with ❤️ — RetNews © 2025
