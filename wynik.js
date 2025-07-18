const params = new URLSearchParams(window.location.search);
const score = params.get("score");
const display = document.getElementById("score-display");

if (score !== null) {
    display.textContent = `Zdobyłeś ${score}/10 punktów!`;
} else {
    display.textContent = "Brak wyniku";
}