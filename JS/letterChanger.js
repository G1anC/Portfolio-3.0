const alphabet = "abcdefghijklmnopqrstuvwxyz";
let interval = null;


function chooseWhichLetter (e, index, i) {
    return (index < i) ? e.dataset.value[index] : alphabet[Math.floor(Math.random() * 26)]
}

const letterChanger = event => {
  let i = 0;
  clearInterval(interval);
  interval = setInterval(() => {

    let e = event.target;
    if (!e.value && (e.type === "email" || e.type === "textarea")) {
      e.placeholder = e.placeholder.split("").map((letter, index) => { return chooseWhichLetter(e, index, i); }).join("");
    } else if (e.type === "button") {
      e.innerText = e.innerText.split("").map((letter, index) => { return chooseWhichLetter(e, index, i); }).join("");
    } else if (e.type === "input") {
      e.value = e.value.split("").map((letter, index) => { return chooseWhichLetter(e, index, i); }).join("");
    } else if (e.innerText) {
      e.innerText = e.innerText.split("").map((letter, index) => { return chooseWhichLetter(e, index, i); }).join("");
    }
    
    if (i >= e.dataset.value.length) { 
      clearInterval(interval);
    }
    i += 1 / 2;
  }, 20);
}

Array.from(document.getElementsByClassName("cript-js")).forEach(e => {
  e.onmouseenter = letterChanger;
});
