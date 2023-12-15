const projects = document.getElementsByClassName("project"),
    selectors = document.getElementsByClassName("selector"),
    img = document.getElementsByClassName("project-image"),
    text = document.getElementsByClassName("project-text"),
    projectsWrapper = document.getElementById("projects-wrapper")
let index = 0

function delay(milliseconds)
{
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds)
  });
}

Array.from(projects).forEach(element => { element.style.display = "none" })

Array.from(selectors).forEach(element => {
  element.addEventListener("mouseenter", async e => { 
    index = e.target.dataset.value
    projects[index].style.display = "block"
    img[index].style.filter = "blur(10px)"
    text[index].style.opacity = "100%"
    for (let i = 0; i < 71; i += 5, await delay(0.05))
      projects[index].style.opacity = i + "%"
  })
  element.addEventListener("mouseleave", () => { 
    projects[index].style.display = "none"
    projects[index].style.opacity = "0%"
    projectsWrapper.style.transfrom = "scale(1)"
    projects[index].style.border = "none"

  })
  element.addEventListener("click", async () => {
    img[index].style.filter = "blur(0px)"
    img[index].style.opacity = "100%"
    projects[index].style.opacity = "100%"
    projects[index].style.borderRadius = "25px"
    projects[index].style.border = "1px solid rgba(255, 255, 255, 0.333)"
    projectsWrapper.style.transfrom = "scale(1.5)"
    text[index].style.opacity = "0"
    Array.from(selectors).forEach(async e => {
      for (let i = 0; i < selectors.length; i++) {
        for (let right = 0; right < projectsWrapper.style.width; right++, await delay(0.01)) {
          selectors[i].style.right = `-${right}%`
        }
      }
    })
  })
})
