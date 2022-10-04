const widthInput = document.getElementById("widthInput");
const widthDisplay = document.getElementById("widthDisplay");

const heightInput = document.getElementById("heightInput");
const heightDisplay = document.getElementById("heightDisplay");

const colorInput = document.getElementById("colorInput");
const colorDisplay = document.getElementById("colorDisplay");

const colorAdjust = document.getElementById("colorAdjust");

widthInput.value = 50;
widthDisplay.innerHTML = "100px";

heightInput.value = 75;
heightDisplay.innerHTML = "100px";

colorInput.value = "#ff69b4"
colorDisplay.innerHTML = "ff69b4"

colorAdjust.style.width = `${widthInput.value}px`;
colorAdjust.style.height = `${heightInput.value}px`;
colorAdjust.style.backgroundColor = colorInput.value;


widthInput.addEventListener("input", update)
heightInput.addEventListener("input", update)
colorInput.addEventListener("input", update)

function update(e) {
  widthDisplay.innerHTML = `${widthInput.value}px`;
  heightDisplay.innerHTML = `${heightInput.value}px`;
  colorDisplay.innerHTML = colorInput.value;

  widthDisplay.style.color = colorInput.value;
  heightDisplay.style.color = colorInput.value;
  colorDisplay.style.color = colorInput.value;

  colorAdjust.style.width = `${widthInput.value}px`;
  colorAdjust.style.height = `${heightInput.value}px`;
  colorAdjust.style.backgroundColor = colorInput.value;
}
