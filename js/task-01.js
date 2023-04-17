const allCat = document.querySelectorAll(".item")
console.log(`Number of categories: ${allCat.length}`)
allCat.forEach(el => {
    const headerName = el.querySelector("h2").textContent;
    const liCounter = el.querySelectorAll("li").length;
    console.log(`Category: ${headerName}`)
    console.log(`Elements: ${liCounter}`)
})


