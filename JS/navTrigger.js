
// on rajoute un event listener au DOM
document.addEventListener('keydown', (event) => {

    // on recupere le navigation menu
    const nav = document.querySelector('nav');
    const links = document.getElementsByClassName("nav-wrapper")

    
    // on check si la pressed key est Echap 
    if (event.key === 'Escape') {
      nav.style.opacity  = (nav.style.opacity == 0 || !nav.style.opacity) ? 1 : 0;
      nav.style["pointer-events"]  = (nav.style["pointer-events"] == "none" || !nav.style["pointer-events"]) ? "all" : "none";
    }
});

const fadeInNextPage = event => {
  document.getElementById("fadeInEffect").style.opacity = "1";
}

Array.from(document.getElementsByClassName("links")).forEach(element => {
  element.onclick = fadeInNextPage 
})