
function delay(milliseconds) {
  return new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
  });
}

async function triggerNav() {
  let nav = document.querySelector('nav');
  let newRight = 0;
  let hamburger = document.querySelector('.hamburger');

  if (nav.classList.contains('active')) {
    nav.classList.remove('active');
    nav.classList.add('inactive');
    hamburger.innerHTML = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve"> <path fill="#FFFFFF" d="M8.667,15h30c0.552,0,1-0.447,1-1s-0.448-1-1-1h-30c-0.552,0-1,0.447-1,1S8.114,15,8.667,15z"/> <path fill="#FFFFFF" d="M8.667,37h30c0.552,0,1-0.447,1-1s-0.448-1-1-1h-30c-0.552,0-1,0.447-1,1S8.114,37,8.667,37z"/> <path fill="#FFFFFF" d="M8.667,26h30c0.552,0,1-0.447,1-1s-0.448-1-1-1h-30c-0.552,0-1,0.447-1,1S8.114,26,8.667,26z"/> </svg>`;
    while (newRight !== -31) {
      newRight--;
      nav.style.right = newRight + 'vw';
      await delay(0.1);
    }
  } else {
    newRight = -31;
    nav.classList.remove('inactive');
    nav.classList.add('active');
    hamburger.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 64 64"><line x1="9.37" x2="54.63" y1="9.37" y2="54.63" fill="#FFFFFF" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width="4"/><line x1="9.37" x2="54.63" y1="54.63" y2="9.37" fill="#FFFFFF" stroke="#FFFFFF" stroke-miterlimit="10" stroke-width="4"/></svg>`;
    while (newRight != 0) {
      newRight++;
      nav.style.right = newRight + 'vw';
      await delay(0.1);
    }
  }
}
