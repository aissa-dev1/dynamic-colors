import { colors, colorTypes } from "../constants";
import { getState, setState } from "../state";
import { Color } from "../types";
import { createDiv, createSpan } from "../ui";
import { setStorageColor } from "../utils/storage-color";
import { tailwindParse } from "../utils/tailwind-parse";

export function createColors(): HTMLDivElement {
  const container = createDiv();
  container.setAttribute(
    "class",
    "flex items-center justify-center gap-4 border p-4 mt-4 rounded-lg shadow"
  );
  for (const color of colors) {
    const colorElm = createColor(color);
    container.appendChild(colorElm);
  }
  document.body.classList.add(getState().color);
  return container;
}

function createColor(color: Color): HTMLSpanElement {
  const colorElm = createSpan();
  const activeMark = createSpan();
  colorElm.setAttribute("id", "color");
  colorElm.setAttribute(
    "class",
    "flex items-center justify-center rounded-full w-8 h-8 cursor-pointer transition-transform transform hover:scale-110"
  );
  colorElm.style.backgroundColor = colorTypes[color];
  activeMark.setAttribute("id", "color_active_mark");
  activeMark.setAttribute(
    "class",
    "hidden w-3 h-3 bg-white rounded-full duration-200"
  );
  colorElm.appendChild(activeMark);
  updateColor(activeMark, color);
  colorElm.addEventListener("click", () => {
    handleColorElmClick(activeMark, color);
  });
  return colorElm;
}

function handleColorElmClick(colorElm: HTMLSpanElement, color: Color) {
  if (getState().color === color) return;
  const activeColorElm = document.querySelector("#active_color")!;
  setState("color", color);
  for (const color of colors) {
    document.body.classList.remove(color);
  }
  document.body.classList.add(getState().color);
  activeColorElm.textContent = `active: ${colorTypes[color]}`;
  setStorageColor(color);
  updateColor(colorElm, color);
}

function updateColor(activeMark: HTMLSpanElement, color: Color) {
  if (getState().color !== color) return;

  const colorActiveMarks = document.querySelectorAll("#color_active_mark");
  colorActiveMarks.forEach((elm) => elm.classList.add("hidden"));
  activeMark.classList.remove(...tailwindParse("hidden w-3 h-3"));
  activeMark.classList.add(...tailwindParse("block w-2 h-2"));
  setTimeout(() => {
    activeMark.classList.remove(...tailwindParse("w-2 h-2"));
    activeMark.classList.add(...tailwindParse("w-3 h-3"));
  }, 200);
}
