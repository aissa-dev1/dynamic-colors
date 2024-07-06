import { Color } from "./types";
import { getStorageColor } from "./utils/storage-color";

interface State {
  color: Color;
}

const state: State = {
  color: getStorageColor() || "default",
};

export function getState(): State {
  return state;
}

export function setState<K extends keyof typeof state>(
  prop: K,
  value: State[K]
) {
  state[prop] = value;
}
