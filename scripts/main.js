import { Experiments } from "./experiments.js"
import { Inventions } from "./inventions.js"

const inventionContainer = document.getElementById("invention-content")

inventionContainer.innerHTML = Inventions()

const experimentsContainer = document.querySelector(".experiment-content")

experimentsContainer.innerHTML = Experiments()
