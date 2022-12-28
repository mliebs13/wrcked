var root = document.querySelector(":root");

const setVariables = () => {
  const windowWidth = innerWidth;

  windowWidth >= 960
    ? root.style.setProperty("--small", "none")
    : root.style.setProperty("--small", "flex");
  windowWidth < 960
    ? root.style.setProperty("--large", "none")
    : root.style.setProperty("--large", "flex");
};

setVariables();

window.addEventListener("resize", setVariables);

const viewportWidth = window.innerWidth;
