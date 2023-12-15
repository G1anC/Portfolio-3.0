const projects = document.getElementsByClassName("project")
const selectors = document.getElementsByClassName("selector")
const img = document.getElementsByClassName("project-image")
const text = document.getElementsByClassName("project-text")
const projectsWrapper = document.getElementById("projects-wrapper")

let index = 0

function delay(milliseconds)
{
    return new Promise((resolve) => {
        setTimeout(resolve, milliseconds)
    });
}

async function enterProject(e) {
    index = e.target.dataset.value
    projects[index].style.display = "block"
    img[index].style.filter = "blur(20px)"
    text[index].style.opacity = "100%"
    for (let i = 0; i < 71; i += 5, await delay(0.05))
        projects[index].style.opacity = i + "%"
}

function unDisplayProject() {
    projects[index].style.display = "none"
    projects[index].style.opacity = "0%"
}

function showEntireProject() {
    img[index].style.filter = "blur(0px)"
    projects[index].style.opacity = "100%"
    projects[index].style.borderRadius = "25px"
    projects[index].style.border = "1px solid white"
    projectsWrapper.style.transfrom = "scale(1.2)"
    text[index].style.opacity = "0"
}

Array.from(projects).forEach(element => { element.style.display = "none" })

Array.from(selectors).forEach(element => {
    element.addEventListener("mouseenter",  e => { enterProject(e) })  
    element.addEventListener("click",      () => { showEntireProject() })
    element.addEventListener("mouseleave", () => { unDisplayProject() })
})
