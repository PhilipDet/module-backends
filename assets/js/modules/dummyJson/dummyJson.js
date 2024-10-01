export default function dummyJson() {
    fetch("https://dummyjson.com/products")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error("Error fetching the data:", error);
        });
}
