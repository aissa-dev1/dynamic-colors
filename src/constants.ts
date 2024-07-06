import { Color } from "./types";

export const colors = [
  "default",
  "smooth-purple",
  "dark-blue",
  "light-pink",
] as const;

export const colorTypes: Record<Color, string> = {
  default: "#393e46",
  "smooth-purple": "#d0a2f7",
  "dark-blue": "#3f72af",
  "light-pink": "#f2bed1",
};
