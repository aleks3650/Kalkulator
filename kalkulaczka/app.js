const Prev = document.querySelector(".previousNumber p");

const Curr = document.querySelector(".currentNumber");

const Sign = document.querySelector(".mathSign");

const Oper = document.querySelectorAll(".operator");

const Equal = document.querySelector(".equal");

const Clear = document.querySelector(".clear");

const Numb = document.querySelectorAll(".number");

let result = "";

let done = false;

function displayNumbers() {
  if (done === true) {
    Curr.innerHTML = "";
    done = false;
  }
  if (this.textContent === "." && Curr.innerHTML.includes(".")) return;
  if (this.textContent === "." && Curr.innerHTML === "")
    return (Curr.innerHTML = "0.");

  if (Curr.innerHTML === "Infinity") {
    Curr.innerHTML = "";
  }
  Curr.innerHTML += this.textContent;
}

function operate() {
  if (Sign.innerHTML === "") {
    Sign.innerHTML += this.textContent;
  }
  if (Curr.innerHTML === "Infinity") {
    Curr.innerHTML = "";
  }
  if (Curr.innerHTML !== "" && Sign.innerHTML !== "") {
    Prev.innerHTML = Curr.innerHTML;
    Curr.innerHTML = "";
  }
}

function clearFunction() {
  Sign.innerHTML = "";
  Curr.innerHTML = "";
  Prev.innerHTML = "";
}

function equalFunction() {
  if (Prev.innerHTML === "" || Curr.innerHTML === "") return;
  else {
    const a = Number(Curr.innerHTML);
    const b = Number(Prev.innerHTML);
    const operator = Sign.innerHTML;

    switch (operator) {
      case "+":
        result = a + b;
        break;
      case "x":
        result = a * b;
        break;
      case "/":
        result = b / a;
        break;
      case "-":
        result = b - a;
        break;
      case "Pow":
        result = Math.pow(b, a);

        break;
    }

    Curr.textContent = result;
    Sign.innerHTML = "";
    Prev.innerHTML = "";
    done = true;
  }
}

Oper.forEach((button) => {
  button.addEventListener("click", operate);
});

Numb.forEach((button) => {
  button.addEventListener("click", displayNumbers);
});

Clear.addEventListener("click", clearFunction);

Equal.addEventListener("click", equalFunction);
