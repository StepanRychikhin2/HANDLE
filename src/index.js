import source from "./template.hbs";
import data from "./data.json";
let saveData = data;

function createList(date) {
    return date.map((obj) => {
        return source(obj);
    }).join("");
}
const shop = document.querySelector(".shop");
shop.innerHTML = createList(data);

const name = document.querySelector("#name");
const price = document.querySelector("#prise");
const pover = document.querySelector("#pover");

name.addEventListener("click", () => {

    saveData.sort((a,b) => a.name.localeCompare(b.name));
    shop.innerHTML = createList(data);

});

price.addEventListener("click", () => {

    saveData.sort((a,b) => a.price - b.price);
    shop.innerHTML = createList(data);

});

pover.addEventListener("click", () => {

    saveData.sort((a,b) => a.pover - b.pover);
   
    shop.innerHTML = createList(data);
});