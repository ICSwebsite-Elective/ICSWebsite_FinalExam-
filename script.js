// ------------------ Mascot Status Data ------------------ //
const mascotData = {
    "black-panthers": {
        color: "#030303ff", // black
        statuses: [
            "🐾 The Black Panther is silently watching from the shadows.",
            "🐾 The Black Panther is analyzing the battlefield.",
            "🐾 The Black Panther is hunting for bugs… in the code.",
            "🐾 The Black Panther is preparing a master strategy."
        ]
    },
    "blue-dragon": {
        color: "#5ba6f7ff", // blue
        statuses: [
            "🐉 The Blue Dragon is soaring across the ancient skies.",
            "🐉 The Blue Dragon is resting atop the highest peak.",
            "🐉 The Blue Dragon is guarding a sacred treasure.",
            "🐉 The Blue Dragon is breathing flames of wisdom."
        ]
    },
    "yellow-kitty": {
        color: "#ffcc00", // golden yellow
        statuses: [
            "🐱 The Yellow Kitty is meowing proudly on its golden throne.",
            "🐱 The Yellow Kitty is sharpening its claws for competition.",
            "🐱 The Yellow Kitty is sunbathing gracefully.",
            "🐱 The Yellow Kitty is training for the Catnip Cup."
        ]
    },
    "green-ninja": {
        color: "#28a745", // green
        statuses: [
            "🥷 The Green Ninja is practicing stealth techniques.",
            "🥷 The Green Ninja is slicing through obstacles.",
            "🥷 The Green Ninja is meditating for inner power.",
            "🥷 The Green Ninja has blended into the shadows."
        ]
    }
};

// ------------------ Status Button Handler ------------------ //
document.addEventListener("DOMContentLoaded", function () {
    const statusBtn = document.getElementById("checkStatusBtn");
    const statusBox = document.getElementById("statusResult");

    // If page doesn't contain a status section, stop
    if (!statusBtn || !statusBox) return;

    // Detect which page we're on by URL
    const page = window.location.pathname; // ex: /blue-dragon.html
    let group = null;

    if (page.includes("black-panthers")) group = "black-panthers";
    if (page.includes("blue-dragon")) group = "blue-dragon";
    if (page.includes("yellow-kitty")) group = "yellow-kitty";
    if (page.includes("green-ninja")) group = "green-ninja";

    if (!group) return; // Unknown page

    statusBtn.addEventListener("click", function () {
        let mascot = mascotData[group];          // retrieve data
        let randomStatus = mascot.statuses[Math.floor(Math.random() * mascot.statuses.length)];

        statusBox.textContent = randomStatus;
        statusBox.style.display = "block";
        statusBox.style.fontWeight = "bold";
        statusBox.style.color = mascot.color;    // themed color
    });
});
