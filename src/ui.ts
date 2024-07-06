export function createDiv(): HTMLDivElement {
  const div = document.createElement("div");
  return div;
}

export function createButton(
  text?: string,
  onclick?: () => void
): HTMLButtonElement {
  const button = document.createElement("button");
  if (text) {
    button.appendChild(document.createTextNode(text));
  }
  if (onclick) {
    button.addEventListener("click", onclick);
  }
  return button;
}

export function createInput(
  type: string,
  placeholder?: string
): HTMLInputElement {
  const input = document.createElement("input");
  input.type = type;
  input.placeholder = placeholder ? placeholder : "";
  return input;
}

export function createParagraph(text?: string): HTMLParagraphElement {
  const p = document.createElement("p");
  if (text) {
    p.appendChild(document.createTextNode(text));
  }
  return p;
}

export function createSpan(text?: string): HTMLSpanElement {
  const span = document.createElement("span");
  if (text) {
    span.appendChild(document.createTextNode(text));
  }
  return span;
}

export function createH3(text?: string): HTMLHeadingElement {
  const h3 = document.createElement("h3");
  if (text) {
    h3.appendChild(document.createTextNode(text));
  }
  return h3;
}

export function createDynamicTitle(text?: string): HTMLHeadingElement {
  const title = createH3(text);
  title.setAttribute("class", "text-xl font-semibold");
  return title;
}
