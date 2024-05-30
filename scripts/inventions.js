import { getInventions } from "./database.js"

// This is a function that will return HTML (in string format)
// Component naming convention is to be pascal case
export const Inventions = () => {
  // need the inventions data
  const inventions = getInventions()
  // start with empty string
  let inventionsHtml = ""
  // for every invention obj make a <li> with the name and description of the invention and add that to the base string
  for (const invention of inventions) {
    inventionsHtml += `<li><p>Invention Name: ${invention.name}</p> <p>Description: ${invention.description}</p></li>`
  }
  // return base string
  return inventionsHtml
}
