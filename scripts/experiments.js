import { getExperiments } from "./database.js"

export const Experiments = () => {
  let experimentsHtml = ""
  const experiments = getExperiments()

  for (const experiment of experiments) {
    experimentsHtml += `<li><p>Experiment: ${experiment.name}</p><p>Succeeded: ${experiment.succeeded}</p></li>`
  }

  return experimentsHtml
}
