const numbers = process.argv.slice(2).map(Number);

  const maxNumber = Math.max(...numbers);
  const minNumber = Math.min(...numbers);

  console.log(`Largest number: ${maxNumber}`);
  console.log(`Smallest number: ${minNumber}`);

