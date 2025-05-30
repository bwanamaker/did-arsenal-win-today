import { apiKey } from config;

const API_KEY = apiKey; 
const ARSENAL_TEAM_ID = 42; // Example ID, verify this
const LONDON_TIMEZONE = 'Europe/London';

const mainResultText = document.getElementById('main-result-text');
const matchDateCityEl = document.getElementById('match-date-city');
const matchStadiumEl = document.getElementById('match-stadium');
const teamHomeNameEl = document.getElementById('team-home-name');
const teamHomeScoreEl = document.getElementById('team-home-score');
// ... and other elements

async function fetchArsenalMatches() {
    // Get current date in London
    const nowInLondon = new Date().toLocaleDateString('en-CA', { timeZone: LONDON_TIMEZONE }); // YYYY-MM-DD

    // 1. Check for a completed match today
    // Example endpoint: /fixtures?team=ARSENAL_TEAM_ID&date=YYYY-MM-DD&status=FT&timezone=LONDON_TIMEZONE
    // let response = await fetch(`https://v3.football.api-sports.io/fixtures?team=${ARSENAL_TEAM_ID}&date=${nowInLondon}&status=FT&timezone=${LONDON_TIMEZONE}`, {
    //     headers: { 'x-apisports-key': API_KEY }
    // });
    // let data = await response.json();
    // let todayMatch = data.response.find(fixture => /* logic to confirm it's Arsenal and relevant */);

    // if (todayMatch) {
    //     displayMatchResult(todayMatch, true);
    // } else {
    //     mainResultText.textContent = "ARSENAL DIDN'T PLAY TODAY";
    //     // 2. Fetch last completed match
    //     // Example endpoint: /fixtures?team=ARSENAL_TEAM_ID&last=1&status=FT&timezone=LONDON_TIMEZONE
    //     // response = await fetch(`https://v3.football.api-sports.io/fixtures?team=${ARSENAL_TEAM_ID}&last=5&status=FT&timezone=${LONDON_TIMEZONE}`, { /* ... headers ... */ });
    //     // data = await response.json();
    //     // Filter for league matches if necessary, find the most recent one
    //     // let lastMatch = data.response[0]; // Assuming sorted by date desc
    //     // if (lastMatch) {
    //     //     displayMatchResult(lastMatch, false);
    //     // } else {
    //     //     // Handle no matches found
    //     // }
    // }
}

function displayMatchResult(fixtureData, isTodayMatch) {
    // const homeTeam = fixtureData.teams.home;
    // const awayTeam = fixtureData.teams.away;
    // const arsenalIsHome = homeTeam.id === ARSENAL_TEAM_ID;
    // const arsenalTeam = arsenalIsHome ? homeTeam : awayTeam;
    // const opponentTeam = arsenalIsHome ? awayTeam : homeTeam;
    // const arsenalScore = arsenalIsHome ? fixtureData.goals.home : fixtureData.goals.away;
    // const opponentScore = arsenalIsHome ? fixtureData.goals.away : fixtureData.goals.home;

    // if (isTodayMatch) {
    //     if (arsenalScore > opponentScore) mainResultText.textContent = "YES!";
    //     else mainResultText.textContent = "NO!"; // Covers loss and draw
    // }

    // let datePrefix = isTodayMatch ? "" : "Last Match: ";
    // const matchDate = new Date(fixtureData.fixture.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: LONDON_TIMEZONE });
    // matchDateCityEl.textContent = `${datePrefix}${matchDate} - ${fixtureData.fixture.venue.city}`;
    // matchStadiumEl.textContent = fixtureData.fixture.venue.name;

    // teamHomeNameEl.textContent = arsenalTeam.name; // Assuming Arsenal is always 'home' in our display
    // teamHomeScoreEl.textContent = arsenalScore;
    // document.getElementById('team-away-name').textContent = opponentTeam.name;
    // document.getElementById('team-away-score').textContent = opponentScore;

    // // Ensure score section is visible
    // document.getElementById('match-details-section').style.display = 'block';
}

// Call fetchArsenalMatches() when the page loads
// window.addEventListener('DOMContentLoaded', fetchArsenalMatches);
