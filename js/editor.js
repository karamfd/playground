const html = document.querySelector("#html");
const css = document.querySelector("#css");
const iframe = document.querySelector("iframe").contentDocument;
const button = document.querySelector("button");

function outputCode() {
  iframe.open();
  iframe.writeln(`<!DOCTYPE html>${html.value}<style>${css.value}</style>`);
  iframe.close();
}

button.addEventListener("click", outputCode);
