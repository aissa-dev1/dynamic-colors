import { createButton, createDiv, createDynamicTitle } from "../ui";

export function createButtons(): HTMLDivElement {
  const container = createDiv();
  const buttonsContainer = createDiv();
  const title = createDynamicTitle("Buttons");
  container.setAttribute("class", "flex flex-col gap-2 mt-4");
  buttonsContainer.setAttribute("class", "flex flex-col gap-2");
  buttonsContainer.append(
    createFilledButton(),
    createOutlineButton(),
    createElevatedButton(),
    createTextButton()
  );
  container.append(title, buttonsContainer);
  return container;
}

function createFilledButton(): HTMLButtonElement {
  const button = createButton("Filled");
  button.setAttribute(
    "class",
    "dynamic-backgroundcolor text-white w-full lg:w-52 py-2 rounded"
  );
  return button;
}

function createOutlineButton(): HTMLButtonElement {
  const button = createButton("Outline");
  button.setAttribute(
    "class",
    "dynamic-bordercolor dynamic-color border w-full lg:w-52 py-2 rounded"
  );
  return button;
}

function createElevatedButton(): HTMLButtonElement {
  const button = createButton("Elevated");
  button.setAttribute(
    "class",
    "dynamic-color border shadow w-full lg:w-52 py-2 rounded"
  );
  return button;
}

function createTextButton(): HTMLButtonElement {
  const button = createButton("Text");
  button.setAttribute("class", "dynamic-color w-full lg:w-52 py-2");
  return button;
}
