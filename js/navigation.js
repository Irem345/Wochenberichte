// ===========================================
// Navigation für Wochenberichte mit Fetch
// ===========================================

const FIRST_WEEK = 35;
const LAST_WEEK = 47;
const YEAR = 2025;

// Prüfen, ob eine Seite existiert
async function pageExists(filename) {
    try {
        const response = await fetch(filename, { method: "HEAD" });
        return response.ok;
    } catch (err) {
        console.error("Fehler beim Prüfen der Datei:", err);
        return false;
    }
}

// Aktuelle KW aus URL auslesen
function getWeekFromURL() {
    const url = window.location.pathname;
    const match = url.match(/kw_(\d+)_(\d{4})\.html$/);
    if (!match) return null; // index.html
    return parseInt(match[1]);
}

// Navigation
async function navigate(offset) {
    const currentWeek = getWeekFromURL();

    let targetWeek;

    // =========================
    // Index-Seite
    // =========================
    if (!currentWeek) {
        targetWeek = offset < 0 ? FIRST_WEEK : LAST_WEEK;
    } else {
        targetWeek = currentWeek + offset;

        // KW-Grenzen setzen
        if (targetWeek < FIRST_WEEK) targetWeek = FIRST_WEEK;
        if (targetWeek > LAST_WEEK) targetWeek = LAST_WEEK;

        // Sonderfall: KW 35 oder KW 47 → zurück zu Index
        if (targetWeek === FIRST_WEEK || targetWeek === LAST_WEEK) {
            window.location.href = "index.html";
            return;
        }
    }

    const targetFile = `kw_${targetWeek}_${YEAR}.html`;
    const exists = await pageExists(targetFile);

    if (exists) {
        window.location.href = targetFile;
    } else {
        window.location.href = "index.html";
    }
}

// Buttons verbinden
document.addEventListener("DOMContentLoaded", () => {
    const back = document.getElementById("btnBack");
    const next = document.getElementById("btnNext");
    const menu = document.getElementById("menuButton");

    if (back) back.onclick = () => navigate(-1);
    if (next) next.onclick = () => navigate(1);
    if (menu) menu.onclick = () => window.location.href = "index.html";

    console.log("navigation.js geladen ");
});
