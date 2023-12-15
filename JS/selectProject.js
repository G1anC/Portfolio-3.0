const projects = document.getElementsByClassName("project");
const selectors = document.getElementsByClassName("selector");
const img = document.getElementsByTagName("img");
let index = 0;

function delay(milliseconds)
{
    return new Promise((resolve) => {
        setTimeout(resolve, milliseconds)
    });
}

Array.from(projects).forEach((element) => { element.style.display = "none" })

Array.from(selectors).forEach((element) => {
    element.addEventListener("mouseenter", async (event) => {
        index = event.target.dataset.value
        projects[index].style.display = "block"
        for (let i = 0; i < 71; i += 5, await delay(0.05))
            projects[index].style.opacity = i + "%"
    })
    element.addEventListener("mouseleave", () => {
        projects[index].style.display = "none"
        projects[index].style.opacity = "0%"
    })
    element.addEventListener("click", async () => {
    // i need to display the project as larger and with an opacity of 100% without the blur
    // and drop the opacity of the selectors to 0%
        let blur = 20
        const projectsWrapper = document.getElementById("projects-wrapper")
        for (let i = 70; i < 100; i += 5, await delay(0.05)) {
            projects[index].style.opacity = i + "%"
            if (blur > 0) blur -= 2
            img[index].style.filter = "blur(" + blur + "px)"
        }
        projectsWrapper.style.transfrom = "scale(1.2)";
        
    })
})
