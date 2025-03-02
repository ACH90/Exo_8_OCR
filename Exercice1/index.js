//votre code ici
const pairNumbers = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    return "Les deux arguments doivent être des nombres";
  }

  const pairs = [];
  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
      pairs.push(i);
    }
  }

  return pairs.join(",");
};

export default pairNumbers;
