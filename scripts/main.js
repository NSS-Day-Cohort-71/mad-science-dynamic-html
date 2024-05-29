import database from "./database.js";

let inventionsHtml = "";
for (let i in database.inventions){
    const invention = database.inventions[i];
    inventionsHtml += `<li><p>🧪 ${invention.name}</p><p class="description">${invention.description}</p></li>`;
}
const inventionContentBlock = document.querySelector("#invention-content");
inventionContentBlock.innerHTML = inventionsHtml;


const listings = database.experiments.map( experiment => {
    const icon = experiment.succeeded ? "✔️" : "❌";
    return `<li>${icon} ${experiment.name}</li>`;
});
const listingsHtml = listings.join('');
const experimentContentBlock = document.querySelector("#experiment-content");
experimentContentBlock.innerHTML = listingsHtml;