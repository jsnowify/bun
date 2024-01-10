const text = document.querySelector(".second-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Bun";
  }, 0);
  setTimeout(() => {
    text.textContent = "Chichi";
  }, 4000);
  setTimeout(() => {
    text.textContent = "<3";
  }, 8000);
};
textLoad();
setInterval(textLoad, 12000);

const btnNo = document.querySelector(".btnno");

btnNo.addEventListener("click", moveAround);
btnNo.addEventListener("mouseenter", moveAround);

function moveAround() {
  if (!btnNo.classList.contains("moving")) {
    btnNo.classList.add("moving");
    animateNoButton();
  }
}

function animateNoButton() {
  let left = 0;
  let top = 0;

  const boundingBoxWidth = window.innerWidth * 0.4;
  const boundingBoxHeight = window.innerHeight * 0.4;

  const maxX = window.innerWidth - boundingBoxWidth;
  const maxY = window.innerHeight - boundingBoxHeight;

  const intervalId = setInterval(() => {
    left = Math.random() * boundingBoxWidth;
    top = Math.random() * boundingBoxHeight;

    btnNo.style.left = `${left}px`;
    btnNo.style.top = `${top}px`;
  }, 1000);

  setTimeout(() => {
    clearInterval(intervalId);
    btnNo.classList.remove("moving");
    btnNo.style.left = "0px";
    btnNo.style.top = "0px";
  }, 3000);
}
