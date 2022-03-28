const picture = document.getElementById("pic");

const swipe = () => {
  let url = picture.getAttribute("src");
  window.open(url);
};

picture.addEventListener("click", swipe);
