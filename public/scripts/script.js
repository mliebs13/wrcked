var root = document.querySelector(":root");

const setVariables = () => {
  const windowWidth = innerWidth;

  windowWidth >= 960
    ? root.style.setProperty("--mobile-rule", "none")
    : root.style.setProperty("--mobile-rule", "flex");
  windowWidth < 960
    ? root.style.setProperty("--desktop-rule", "none")
    : root.style.setProperty("--desktop-rule", "flex");
};

setVariables();

window.addEventListener("resize", setVariables);

const viewportWidth = window.innerWidth;
