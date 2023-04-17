const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.getElementById("ingredients")
ingredients.forEach((ingredient) =>{
  const liEl = document.createElement("li")
  liEl.textContent = ingredient;
  liEl.classList.add("item")
  list.append(liEl)
})

