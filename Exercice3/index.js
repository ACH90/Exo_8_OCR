// Créez votre fonction ici

const calculateAverage = (numbers) => {
  //si numbers n'est pas un tableau, le convertir en tableau
  if (!Array.isArray(numbers)) {
    return "No numbers to calculate average";
  }

  if (numbers.length === 0) {
    return "No numbers to calculate average";
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
};
export default calculateAverage;

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])); // retourne 10
console.log(calculateAverage([10, 20, 30, 20])); // retourne 20
console.log(calculateAverage()); // No numbers to calculate average
