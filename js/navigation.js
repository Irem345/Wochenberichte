// ===========================================
// Universelle Navigation für Wochenberichte
// Dateinamenformat: kw_XX_YYYY.html
// Beispiel: kw_35_2025.html
// ===========================================

// 1) Woche + Jahr aus URL auslesen
function getWeekAndYear() {
    const url = window.location.pathname;
    const match = url.match(/kw_(\d+)_(\d{4})\.html$/);

    if (!match) return null;

    return {
        week: parseInt(match[1]),
        year: parseInt(match[2])
    };
}

// 2) Prüfen, ob Datei existiert
async function pageExists(filename) {
    try {
        const response = await fetch(filename, { method: "HEAD" });
        return response.ok;
    } catch {
        return false;
    }
}

// 3) Navigation
async function navigateWeek(offset) {
    const info = getWeekAndYear();
    if (!info) return; // Auf index.html

    let { week, year } = info;
    week += offset;

    // Woche < 1 → Jahr -1
    if (week < 1) {
        year--;
        week = 52; // oder 53 (variabel)
    }

    // Woche > 52 → Jahr +1
    if (week > 52) {
        year++;
        week = 1;
    }

    const targetFile = `kw_${week}_${year}.html`;

    const exists = await pageExists(targetFile);

    if (exists) {
        window.location.href = targetFile;
    } else {
        window.location.href = "index.html";
    }
}

// 4) Buttons verbinden
document.addEventListener("DOMContentLoaded", () => {
    const back = document.getElementById("btnBack");
    const next = document.getElementById("btnNext");
    const menu = document.getElementById("menuButton");

    if (back) back.onclick = () => navigateWeek(-1);
    if (next) next.onclick = () => navigateWeek(1);

    // Menü redirect zur Startseite
    if (menu) menu.onclick = () => window.location.href = "index.html";
});
