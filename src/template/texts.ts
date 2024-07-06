import { createDiv, createDynamicTitle, createParagraph } from "../ui";

export function createTexts(): HTMLDivElement {
  const container = createDiv();
  const title = createDynamicTitle("Texts");
  const textsContainer = createDiv();
  container.setAttribute("class", "flex flex-col gap-2 mt-4");
  textsContainer.setAttribute("class", "flex flex-col gap-2");
  textsContainer.append(
    create2xLargeText(),
    create1xLargeText(),
    createLargeText(),
    createMediumText(),
    createSmallText()
  );
  container.append(title, textsContainer);
  return container;
}

function create2xLargeText(): HTMLHeadingElement {
  const text = createParagraph("2x Large text");
  text.setAttribute("class", "dynamic-color capitalize text-2xl");
  return text;
}

function create1xLargeText(): HTMLHeadingElement {
  const text = createParagraph("1x Large text");
  text.setAttribute("class", "dynamic-color capitalize text-1xl");
  return text;
}

function createLargeText(): HTMLHeadingElement {
  const text = createParagraph("Large text");
  text.setAttribute("class", "dynamic-color capitalize text-lg");
  return text;
}

function createMediumText(): HTMLHeadingElement {
  const text = createParagraph("Medium text");
  text.setAttribute("class", "dynamic-color capitalize");
  return text;
}

function createSmallText(): HTMLHeadingElement {
  const text = createParagraph("Small text");
  text.setAttribute("class", "dynamic-color capitalize text-sm");
  return text;
}
