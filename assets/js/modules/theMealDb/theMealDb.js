export default function theMealDB() {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((response) => response.json())
        .then((data) => {
            createProduct(data.meals[0]);
        })
        .catch((error) => {
            console.error("Error fetching the data:", error);
        });
}

function createProduct(data) {
    const products = document.getElementById("the-meal-db");
    let html = `
        <div class="product">
            <h2>${data.strMeal}</h2>
            <img src="${data.strMealThumb}" alt="${data.strMeal}">
            <a href="${data.strYoutube}" target="_blank">Se på YouTube</a>
            <a href="${data.strSource}" target="_blank">Opskrift</a>  
    `;

    products.innerHTML += html;
}
