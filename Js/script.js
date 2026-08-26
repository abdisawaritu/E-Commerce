let products = [
  {
    name: "Laptop",
    price: 850,
    img: "./images/laptop.jpg",
  },

  {
    name: "Smartphone",
    price: 550,
    img: "./images/smartphone.jpg",
  },

  {
    name: "Headphones",
    price: 120,
    img: "./images/headphones.jpg",
  },

  {
    name: "Smart Watch",
    price: 180,
    img: "./images/smart-watch.jpg",
  },

  {
    name: "Digital Camera",
    price: 700,
    img: "./images/camera.jpg",
  },

  {
    name: "Keyboard",
    price: 75,
    img: "./images/keyboard.jpg",
  },
];

let productsContainer = document.getElementById("products-container");

for (let product of products) {
  let productColumn = document.createElement("div");

  productColumn.className = "col-12 col-sm-6 col-lg-4";

  let productCard = document.createElement("div");

  productCard.className = "product-card";

  let productImage = document.createElement("img");

  productImage.className = "product-image";

  productImage.src = product.img;

  productImage.alt = product.name;

  let productContent = document.createElement("div");

  productContent.className = "product-content";

  let productName = document.createElement("h2");

  productName.className = "product-name";

  productName.textContent = product.name;

  let productPrice = document.createElement("p");

  productPrice.className = "product-price";

  productPrice.textContent = `$${product.price}`;

  let productButton = document.createElement("button");

  productButton.className = "product-button";

  productButton.textContent = "Add to Cart";

  productContent.append(productName, productPrice, productButton);

  productCard.append(productImage, productContent);

  productColumn.append(productCard);

  productsContainer.append(productColumn);
}
