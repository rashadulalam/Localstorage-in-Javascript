// All Variable //
const productForm = document.getElementById("add-product");
const allProductDiv = document.getElementById("all-product");
const productNameInput = document.getElementById("product-name");
const productImageInput = document.getElementById("product-image");
const productPriceInput = document.getElementById("product-price");
const productTextInput = document.getElementById("product-text");

const products = JSON.parse(localStorage.getItem("lsproducts")) || [];

// Add product Function //
const addProduct = (nameValue, imageValue, priceValue, textValue) => {
  products.push({
    image: imageValue,
    price: priceValue,
    name: nameValue,
    text: textValue,
  });
  //   Add product localstorage (NB: ls means localstorage)
  localStorage.setItem("lsproducts", JSON.stringify(products));
};

// Create Element Function //
const createElement = (nameValue, imageValue, priceValue, textValue) => {
  //// (1) Task one (create a collumn, div & div elements) //
  //   Create Col
  const productCol = document.createElement("div");
  productCol.classList.add("col-lg-3");

  //   Create Single product Div
  const productDiv = document.createElement("div");
  productDiv.classList.add("single-product");

  //   Create Single product Image
  const productImage = document.createElement("img");
  productImage.setAttribute("src", imageValue);

  //   Create Single product price
  const productPrice = document.createElement("h5");
  productPrice.innerText = priceValue;

  //   Create Single product Name
  const productName = document.createElement("h3");
  productName.innerText = nameValue;

  //   Create Single product Text
  const productText = document.createElement("p");
  productText.innerText = textValue;

  //   Compleet single product
  productDiv.append(productImage, productPrice, productName, productText);

  //   complete Col
  productCol.appendChild(productDiv);

  //   Complete first Task
  allProductDiv.appendChild(productCol);
};

// Main click function
productForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameValue = productNameInput.value;
  const imageValue = productImageInput.value;
  const priceValue = productPriceInput.value;
  const textValue = productTextInput.value;

  //   (1) Task one [into create element function]
  createElement(nameValue, imageValue, priceValue, textValue);

  // (2)  Task 2  (make a product array and push it into localstorage) //
  addProduct(nameValue, imageValue, priceValue, textValue);
});

// (3) Task 3 (Show Product from localstorage)
products.forEach((product) => {
  console.log(product);
  console.log(product["image"]);
  createElement(
    product["name"],
    product["image"],
    product["price"],
    product["text"]
  );
});
