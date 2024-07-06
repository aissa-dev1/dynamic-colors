import "./style.css";
import { createButtons } from "./template/buttons";
import { createColors } from "./template/colors";
import { createInputs } from "./template/inputs";
import { createNavbar } from "./template/navBar";
import { createTexts } from "./template/texts";

const app = document.querySelector<HTMLDivElement>("#app")!;

document.addEventListener("DOMContentLoaded", render);

function render() {
  const navBar = createNavbar();
  const colors = createColors();
  const buttons = createButtons();
  const inputs = createInputs();
  const texts = createTexts();
  app.append(navBar, colors, buttons, inputs, texts);
}
