//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function () {
  const inputVal = document.getElementById("ip").value.trim();
  const outputDiv = document.getElementById("output");

  outputDiv.textContent = "";

  if (inputVal === "") {
    outputDiv.textContent = "Please enter a number!";
    return;
  }

  const num = parseFloat(inputVal);

  new Promise((resolve) => {
    setTimeout(() => {
      outputDiv.textContent = `Result: ${num}`;
      resolve(num);
    }, 2000);
  })
    .then((val) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = val * 2;
          outputDiv.textContent = `Result: ${result}`;
          resolve(result);
        }, 2000);
      });
    })
    .then((val) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = val - 3;
          outputDiv.textContent = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    .then((val) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = val / 2;
          outputDiv.textContent = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    .then((val) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = val + 10;
          outputDiv.textContent = `Final Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    .catch((err) => {
      console.error("Error:", err);
    });
});