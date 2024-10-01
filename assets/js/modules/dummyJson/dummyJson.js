export default function dummyJson() {
    fetch("https://dummyjson.com/products")
        .then((response) => response.json())
        .then((data) => {
            console.log(data.products);
            createProducts(data.products);
        })
        .catch((error) => {
            console.error("Error fetching the data:", error);
        });
}

function createProducts(products) {
    const productsElement = document.getElementById("products");
    let html = "";
    products.forEach((product) => {
        html += `
            <img src="${product.thumbnail}" alt="${product.title}" data-title="${product.title}" data-description="${product.description}" />
        `;
    });
    productsElement.innerHTML = html;

    const images = productsElement.querySelectorAll("img");
    images.forEach((img) => {
        img.addEventListener("click", (event) => {
            const thumbnail = event.target.src;
            const title = event.target.getAttribute("data-title");
            const description = event.target.getAttribute("data-description");
            selectProduct(thumbnail, title, description);
        });
    });
}

function selectProduct(thumbnail, title, description) {
    const selectedProductImg = document.querySelector("#selected-product img");
    const selectedProductName = document.querySelector("#selected-product h2");
    const selectedProductDescription = document.querySelector(
        "#selected-product p"
    );

    selectedProductImg.src = thumbnail;
    selectedProductName.textContent = title;
    selectedProductDescription.textContent = description;
}
