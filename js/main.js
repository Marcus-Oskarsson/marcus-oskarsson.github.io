const pageHeight = document.body.clientHeight - window.innerHeight;

document.addEventListener("scroll", () => {
  const currentY = window.scrollY;
  const percent = Math.round((currentY / pageHeight) * 100);
  const calcPercentDone = percent > 100 ? 100 : percent;
  const calcPercentLeft = 100 - calcPercentDone;
  const doneBar = document.querySelector(".progress-done");
  const leftBar = document.querySelector(".progress-left");
  doneBar.style.width = `${calcPercentDone}%`;
  leftBar.style.width = `${calcPercentLeft}%`;
});
