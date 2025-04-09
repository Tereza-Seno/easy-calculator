const section = document.querySelector (".results")

const number1 = parseInt(prompt("Zadej číslo"))
const number2 = parseInt(prompt("Zadej druhé čislo"))

const newparagraph1 = document.createElement ("p")
newparagraph1.textContent = (`Součet tvých čísel je: ${number1 + number2}`)
section.append(newparagraph1)

const newparagraph2 = document.createElement ("p")
newparagraph2.textContent = (`Rozdíl tvých čísel je: ${number1 - number2}`)
section.append(newparagraph2)

const newparagraph3 = document.createElement ("p")
newparagraph3.textContent = (`Násobek tvých čísel je: ${number1 * number2}`)
section.append(newparagraph3)

const newparagraph4 = document.createElement ("p")
newparagraph4.textContent = (`Podíl tvých čísel je: ${number1 / number2}`)
section.append(newparagraph4)



