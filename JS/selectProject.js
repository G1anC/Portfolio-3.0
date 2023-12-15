const projects = document.getElementsByClassName("project");
const selectors = document.getElementsByClassName("selector");
const img = document.getElementsByClassName("project-image");
let index = 0;
let stay = false;

function delay(milliseconds)
{
    return new Promise((resolve) => {
        setTimeout(resolve, milliseconds)
    });
}

async function enterProject(event) {
    index = event.target.dataset.value
    projects[index].style.display = "block"
    img[index].style.filter = "blur(20px)"
    for (let i = 0; i < 71; i += 5, await delay(0.05))
        projects[index].style.opacity = i + "%"
    stay = false;
}

function unDisplayProject() {
    if (stay === false) {
        projects[index].style.display = "none"
        projects[index].style.opacity = "0%"
    }
}

async function showEntireProject() {
    let blur = 20
    const projectsWrapper = document.getElementById("projects-wrapper")
    for (let i = 70; i < 100; i += 5, await delay(0.05)) {
        projects[index].style.opacity = i + "%"
        if (blur > 0)
            blur -= 2
        img[index].style.filter = "blur(0px)"
    }
    stay = true;
    projectsWrapper.style.transfrom = "scale(1.2)";
}

Array.from(projects).forEach(element => { element.style.display = "none" })

Array.from(selectors).forEach(element => {
    element.addEventListener("mouseenter", event => {enterProject(event)})  
    element.addEventListener("mouseleave", unDisplayProject())
    element.addEventListener("click", showEntireProject())
})
