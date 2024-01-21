import source from "./template.hbs";
import data from "./data.json";
let jsData = data;
import { log } from "console";

function createList(data) {
    return data.map((obj) => {
        return source(obj);
    }).join("");
}
const products = document.querySelector(".products");
products.innerHTML = createList(data);

const filterName = document.querySelector("#one");
const filterPrice = document.querySelector("#two");
const filterQuantity = document.querySelector("#three");

filterName.addEventListener("click", () => {
    jsData.sort((a,b) => a.name.localeCompare(b.name));
    products.innerHTML = createList(data);
});

filterPrice.addEventListener("click", () => {
    jsData.sort((a,b) => a.price - b.price);
    products.innerHTML = createList(data);
});

filterQuantity.addEventListener("click", () => {
    jsData.sort((a,b) => a.quantity - b.quantity);
    products.innerHTML = createList(data);
});