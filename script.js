const section = document.querySelector (".results")

const number1 = parseInt(prompt("Zadej číslo"))
const number2 = parseInt(prompt("Zadej druhé čislo"))

const newparagrapg1 = document.createElement ("p")
newparagrapg1.textContent = (`Součet tvých čísel je: ${number1 + number2}`)
section.append(newparagrapg1)

const newparagrapg2 = document.createElement ("p")
newparagrapg2.textContent = (`Rozdíl tvých čísel je: ${number1 - number2}`)
section.append(newparagrapg2)

const newparagrapg3 = document.createElement ("p")
newparagrapg3.textContent = (`Násobek tvých čísel je: ${number1 * number2}`)
section.append(newparagrapg3)

const newparagrapg4 = document.createElement ("p")
newparagrapg4.textContent = (`Podíl tvých čísel je: ${number1 / number2}`)
section.append(newparagrapg4)


