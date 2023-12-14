const toAppearElement = document.getElementById('to-appear')
const toDisappearElement = document.getElementById('to-disappear')
let pourcentage = 100;
function delay(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
    });
}

async function showProjects() {

    await delay(0);

    while (pourcentage >= 0) {
        toDisappearElement.style.opacity = pourcentage + "%";
        pourcentage -= 3;
        await delay(0.5);
    }
    toDisappearElement.style.display = "none";
    await delay(500);
    while (pourcentage < 100) {
        toAppearElement.style.opacity = pourcentage + "%";
        pourcentage += 3
        await delay(0.5);
    }
}
showProjects();