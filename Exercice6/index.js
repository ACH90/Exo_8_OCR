const appendToDisplay = (value) => {
  const display = document.getElementById("display");
  display.value += value; // On ajoute la valeur au contenu existant dans l'input
  console.log(display);
};

const clearDisplay = () => {
  const display = document.getElementById("display");
  display.value = "";
};

const calculateResult = () => {
  const display = document.getElementById("display");
  try {
    if (display.value.includes("/0")) {
      display.value = "Division by zero is not allowed";
    } else {
      display.value = eval(display.value);
    }
  } catch (error) {
    display.value = "Error";
  }
};
