import { createDiv, createH3 } from "../ui";
import { createActiveColor } from "./active-color";

export function createNavbar(): HTMLDivElement {
  const container = createDiv();
  const title = createH3("Dynamic colors");
  const activeColor = createActiveColor();
  container.setAttribute("class", "flex items-center justify-between");
  title.setAttribute("class", "text-lg font-semibold uppercase");
  container.append(title, activeColor);
  return container;
}
