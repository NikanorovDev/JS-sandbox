document.querySelector("#run-button").addEventListener("click", () => {
  const codeEditor = document.getElementById("code-editor");
  const output = document.getElementById("output");

  output.textContent = "";

  try {
    const sandbox = {
      console: {
        log: (...args) => {
          output.textContent += args.join(" ") + "\n";
        },
        error: (...args) => {
          output.textContent += "Error: " + args.join(" ") + "\n";
        },
      },
    };
    const userCode = codeEditor.value;
    const func = new Function("sandbox", userCode);
    func(sandbox);

    output.textContent += "Execution completed.\n";
  } catch (error) {
    output.textContent += `Error: ${error.message}\n`;
  }
});
