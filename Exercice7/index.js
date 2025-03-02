const convertToBinary = () => {
  const decimalInput = document.getElementById("decimalInput");
  const binaryResult = document.getElementById("binaryResult");
  const inputValue = decimalInput.value;

  console.log("Input reçu :", inputValue); // Ajout pour vérifier ce qui arrive

  if (!/^\d+$/.test(inputValue)) {
    binaryResult.replaceChildren();
    console.log("Input invalide, champ vidé."); // Log de debug
    return;
  }

  const decimalValue = parseInt(inputValue, 10);
  const binaryValue = decimalValue.toString(2);
  binaryResult.textContent = `Le nombre en binaire est : ${binaryValue}`;
  console.log("Conversion réussie :", binaryValue);
};
