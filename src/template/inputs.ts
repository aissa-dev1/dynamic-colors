import { createDiv, createDynamicTitle, createInput } from "../ui";

export function createInputs(): HTMLDivElement {
  const container = createDiv();
  const inputsContainer = createDiv();
  const title = createDynamicTitle("Inputs");
  container.setAttribute("class", "flex flex-col gap-2 mt-4");
  inputsContainer.setAttribute("class", "flex flex-col gap-2");
  inputsContainer.append(
    createPrimaryInput(),
    createSecondaryInput(),
    createOutlineInput()
  );
  container.append(title, inputsContainer);
  return container;
}

function createPrimaryInput(): HTMLInputElement {
  const input = createInput("text", "Primary input");
  input.setAttribute(
    "class",
    "dynamic-focus outline-none border py-2 px-3 rounded"
  );
  return input;
}

function createSecondaryInput(): HTMLInputElement {
  const input = createInput("text", "Secondary input");
  input.setAttribute(
    "class",
    "dynamic-backgroundcolor text-white outline-none py-2 px-3 rounded placeholder:text-white"
  );
  return input;
}

function createOutlineInput(): HTMLInputElement {
  const input = createInput("text", "Outline input");
  input.setAttribute(
    "class",
    "dynamic-bordercolor dynamic-color dynamic-placeholder outline-none border py-2 px-3 rounded"
  );
  return input;
}
