const allCat = document.querySelectorAll(".item")
console.log(`Number of categories: ${allCat.length}`)
allCat.forEach(category =>{
    console.log(`Category: ${category.firstElementChild.textContent}`)
    console.log(`Elements: ${category.lastElementChild.children.length}`)
})

