const results = document.querySelector(".results");

const number1 = prompt("Zadej číslo (můžeš použít i desetinnou čárku).");
const number2 = prompt("Zadej druhé číslo (můžeš použít i desetinnou čárku).");

const numberComma1 = parseFloat(number1.replace(",", "."));
const numberComma2 = parseFloat(number2.replace(",", "."));

const addition = numberComma1 + numberComma2;
const subtraction = numberComma1 - numberComma2;
const multiplication = numberComma1 * numberComma2;
const division = numberComma1 / numberComma2;

console.log(addition, subtraction, multiplication, division);

const heading = document.createElement("h1");
const paragraph1 = document.createElement("p");
const paragraph2 = document.createElement("p");
const paragraph3 = document.createElement("p");
const paragraph4 = document.createElement("p");

heading.textContent = "Jednoduchá kalkulačka (JavaScript)";
paragraph1.textContent = `Součet tvých čísel je: ${addition}`;
paragraph2.textContent = `Rozdíl tvých čísel je: ${subtraction}`;
paragraph3.textContent = `Součin tvých čísel je: ${multiplication}`;
paragraph4.textContent = `Podíl tvých čísel je: ${division}`;

results.append(heading, paragraph1, paragraph2, paragraph3, paragraph4);
