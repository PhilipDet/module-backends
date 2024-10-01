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
    productsElement.innerHTML = "";
    products.forEach((product) => {
        const productImg = document.createElement("img");
        productImg.src = product.thumbnail;

        productsElement.appendChild(productImg);

        productImg.addEventListener("click", () =>
            selectProduct(product.thumbnail, product.title, product.description)
        );
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
