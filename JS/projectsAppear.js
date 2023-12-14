function delay(milliseconds)
{
    return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
    });
}

async function showProjects()
{
    const toAppearElement = document.getElementById('to-appear');
    const toDisappearElement = document.getElementById('to-disappear');
    let pourcentage = 100;
    
    await delay(3000);
    while (pourcentage >= 0) {
        toDisappearElement.style.opacity = pourcentage + "%";
        pourcentage -= 3;
        await delay(0.2);
    }
    toDisappearElement.style.display = "none";

    while (pourcentage < 100) {
        toAppearElement.style.opacity = pourcentage + "%";
        pourcentage += 3
        await delay(0.2);
    }
}

showProjects();