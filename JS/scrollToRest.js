function scrollToRest(index)
{
    document.getElementById(`work-body`).style.overflowY = "scroll";
    const workBody = document.getElementById(`work-body`);
    console.log(workBody.style.overflowY);
    workBody.style.overflowY = "scroll";
    const rest = document.getElementById(`rest-${index}`);
    (!rest.style.display || rest.style.display === "none") ? rest.style.display = "grid" : rest.style.display = "none";
    window.scroll({
        top : window.innerHeight,
        behavior: "smooth",
    });
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}