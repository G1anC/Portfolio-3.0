

let activeIndex = 0;
const slides = document.getElementsByTagName("article");

function handleLeftClick() {

    var element = document.getElementById("work-body");
    element.scrollIntoView({behavior: "smooth"});
    element.style.overflowY = "hidden";

    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1, 
          currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
          nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
          
    currentSlide.dataset.status = "after";
    nextSlide.dataset.status = "becoming-active-from-before";  

    setTimeout(() => {
      nextSlide.dataset.status = "active";
      activeIndex = nextIndex;
    });
    element.scrollIntoView({behavior: "smooth"});
}

function handleRightClick() {

  var element = document.getElementById("work-body");
  element.scrollIntoView({behavior: "smooth"});
  element.style.overflowY = "hidden";

  document.getElementById("work-body").style.overflowY = "hidden";
  const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;
  
  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
  nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

  currentSlide.dataset.status = "before";
  nextSlide.dataset.status = "becoming-active-from-after";

  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
  element.scrollIntoView({behavior: "smooth"});
}

document.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft")
      handleLeftClick();
    if (event.key === "ArrowRight")
    handleRightClick();
});