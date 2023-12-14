function delay(milliseconds)
{
    return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
    });
}

const projects = document.getElementsByClassName("project");

Array.from(document.getElementsByClassName("selector")).forEach((element) => {
    element.addEventListener("mouseenter", async (event) => {
        let index = event.target.dataset.value;
        const project = projects[index];
        console.log(index);
        let i = 0;
        let newLeft = 0;
        while (75 > newLeft) {
            project.style.left = -newLeft + "vw";
            newLeft -= 3;
            await delay(0.1); 
            i++;
        }
    })
    element.addEventListener("mouseout", async (event) => {
        let index = event.target.dataset.value;
        const project = projects[index];
        let i = 0;
        let newLeft = 0;

        while (i < 100) {
            project.style.left = newLeft + "%"; 
            pourcentage += 3;
            await delay(0.1);
        }
    })
})