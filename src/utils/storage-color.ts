import { Color } from "../types";

export function getStorageColor(): Color {
  return localStorage.getItem("color") as Color;
}

export function setStorageColor(value: Color) {
  localStorage.setItem("color", value);
}
