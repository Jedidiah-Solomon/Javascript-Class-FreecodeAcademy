const box = document.querySelector(".box");
const boxStyles = getComputedStyle(box);
const boxMainColor = boxStyles.getPropertyValue("--box-main-color");

const header = document.querySelector("#main-header");
header.style.setProperty("--header-bg-color", boxMainColor);
header.style.fontSize = "x-large";
header.style.textAlign = "center";
