// Výběr selektoru
const section = document.querySelector(".section");

// Přidání nadpisu
const heading = document.createElement("h1");
heading.textContent = "Jednoduchá kalkulačka (JavaScript)";
section.append(heading);

// Čísla od uživatele
const number1 = prompt("Zadej číslo (můžeš použít i desetinnou čárku).");
const number2 = prompt("Zadej druhé číslo (můžeš použít i desetinnou čárku).");

// Předělání čárky na desetinnou tečku a převedení na číslo
const numberComma1 = parseFloat(number1.replace(",", "."));
const numberComma2 = parseFloat(number2.replace(",", "."));

// Funkce - výpočet na stránku
const paragraphToWebsite = (text, result, whereToAdd) => {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = text + result;
    whereToAdd.append(newParagraph);
}

// Ošetření vstupů a výpis výsledků nebo chyby
if (Number.isFinite(numberComma1) && Number.isFinite(numberComma2)) {
    const addition = numberComma1 + numberComma2;
    const subtraction = numberComma1 - numberComma2;
    const multiplication = numberComma1 * numberComma2;
    const division = numberComma2 !== 0 ? (numberComma1 / numberComma2) : "Nedefinováno (dělení nulou)";

    paragraphToWebsite('Součet tvých čísel je: ', addition, section);
    paragraphToWebsite('Rozdíl tvých čísel je: ', subtraction, section);
    paragraphToWebsite('Součin tvých čísel je: ', multiplication, section);
    paragraphToWebsite('Podíl tvých čísel je: ', division, section);
} else {
    paragraphToWebsite('Špatné vstupy', '', section);
}