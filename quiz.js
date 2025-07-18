const correctAnswers = [
    "Azja", 
    "Mount Everest", 
    "Rosja", 
    "Amazonka", 
    "Antarktyczna (Pustynia Polarna)", 
    "Canberra", 
    "Arktyczny", 
    "Chiny", 
    "Grenlandia", 
    "Stambuł"
];

const sections = document.querySelectorAll("section");
let userAnswers = Array(sections.length).fill(null);

sections.forEach((section, index) => {
    const buttons = section.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.classList.remove("selected"));
            button.classList.add("selected");
            userAnswers[index] = button.textContent.trim();
        });
    });
});

document.querySelector("#btn").addEventListener("click", (e) => {
    e.preventDefault();

    

    let score = 0;
    userAnswers.forEach((ans, i) => {
        if (ans === correctAnswers[i]) {
            score++;
        }
    });

    window.location.href = `wynik.html?score=${score}`;
});