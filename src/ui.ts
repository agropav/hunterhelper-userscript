export function createUi() {
  // TODO: integrate some framework, e.g. Svelte, for more ergonomic UI work.
  const containerEl = document.createElement("div");
  containerEl.style.position = "fixed";
  containerEl.style.top = "0";
  containerEl.style.left = "0";
  containerEl.style.zIndex = "99999999";
  containerEl.style.padding = "0.2em";
  containerEl.style.backgroundColor = "grey";
  document.body.prepend(containerEl);

  const headerEl = document.createElement("pre");
  headerEl.innerText = "Custom control panel";
  containerEl.appendChild(headerEl);

  function addButton(label: string, tooltip: string, callback: (event: Event) => void) {
    const buttonEl = document.createElement("button");
    buttonEl.innerText = label;
    buttonEl.title = tooltip;
    buttonEl.onclick = callback;
    containerEl.appendChild(buttonEl);
  }
  
  addButton(
    "Hello, Hunter",
    "Say hello, hunter",
    () => alert("Hello, hunter! 👋")
  );

  addButton(
    "❌",
    "Close this box, hunter. Refresh the page to get it back.",
    () => containerEl.remove()
  );
};
