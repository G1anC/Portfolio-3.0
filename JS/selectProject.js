function delay(milliseconds)
{
    return new Promise((resolve) => {
        setTimeout(resolve, milliseconds)
    });
}

const projects = document.getElementsByClassName("project");

Array.from(projects).forEach((element) => {
    element.style.display = "none"
})

Array.from(document.getElementsByClassName("selector")).forEach((element) => {
    element.addEventListener("mouseenter", async (event) => {
        let i = 0
        let index = event.target.dataset.value
        projects[index].style.display = "block"
        while (i < 100) {
            projects[index].style.opacity = i + "%"
            i += 3
            await delay(0.05)
        }
    })
    element.addEventListener("mouseleave", async (event) => {
        index = event.target.dataset.value
        projects[index].style.display = "none"
        projects[index].style.opacity = "0%"
    })
})