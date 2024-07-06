import { colorTypes } from "../constants";
import { getState } from "../state";
import { createParagraph } from "../ui";

export function createActiveColor(): HTMLParagraphElement {
  const text = createParagraph(`active: ${colorTypes[getState().color]}`);
  text.setAttribute("id", "active_color");
  text.setAttribute("class", "font-semibold");
  return text;
}
