let products = [
    {
        id: 1,
        name: "Office dress",
        size: "L",
        color: "white & black",
        price: 1200,
        image: "Product1.jpg",
        description: "Beautiful and fit",
    },
    {
        id: 2,
        name: "Coat with palazzo",
        size: "M",
        color: "orange & white",
        price: 2000,
        image: "Product2.jpg",
        description: "With a gorgeous look",
    },
    {
        id: 3,
        name: "Long Dress",
        size: "L",
        color: "Yellow",
        price: 1500,
        image: "Product3.jpg",
        description: "Beautiful look",
    },
    {
        id: 4,
        name: "Jeans Skirt",
        size: "S",
        color: "blue",
        price: 1000,
        image: "Product4.jpg",
        description: "Pretty Look",
    },
    {
        id: 5,
        name: "T-shirt",
        size: "M",
        color: "Pale blue",
        price: 900,
        image: "Product5.jpg",
        description: "Good looking tshirt",
    },
    {
        id: 6,
        name: "Long Frock",
        size: "L",
        color: "cream",
        price: 5000,
        image: "Product6.jpg",
        description: "Awesome looking long frock",
    },
    {
        id: 7,
        name: "Short skirt",
        size: "S",
        color: "red",
        price: 1400,
        image: "Product7.jpg",
        description: "Red skirt",
    },
    {
        id: 8,
        name: "Printed Saree",
        size: "XL",
        color: "cream",
        price: 4000,
        image: "Product8.jpg",
        description: "Beautiful Saree",
    },
    {
        id: 9,
        name: "Lehanga",
        size: "L",
        color: "Red",
        price: 2200,
        image: "Product9.jpg",
        description: "Perfect dress look for bride",
    },
    {
        id: 10,
        name: "Pattu Saree",
        size: "L",
        color: "Green & pink",
        price: 5200,
        image: "Product10.jpg",
        description: "Perfect Look",
    },
    {
        id: 11,
        name: "Chudhidhar",
        size: "XL",
        color: "Black",
        price: 800,
        image: "Product11.jpg",
        description: "Good looking black chudhidhar",
    },
    {
        id: 12,
        name: "Top",
        size: "L",
        color: "Multi Colors",
        price: 700,
        image: "Product12.jpg",
        description: "Awesome look with multi colors",
    },
];

let cart = [];
let count = 0;

function displayProducts(productsData, who = "productwrapper") {
  let productsString = "";

  productsData.forEach(function (product, index) {
    let { id, name, image, color, description, price, size } = product;

    if (who == "productwrapper") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="images/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="addToCart(${id})">Add to Cart</button>
        </p>
      </div>`;
    } else if (who == "cart") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="images/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="removeFromCart(${id})">Remove from Cart</button>
        </p>
      </div>`;
    }
  });

  document.getElementById(who).innerHTML = productsString;
}

displayProducts(products);

function searchProduct(searchValue) {
  let searchedProducts = products.filter(function (product, index) {
    let searchString = product.name + " " + product.color + " " + product.description;

    return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  });

  displayProducts(searchedProducts);
}

function getProductByID(productArray, id) {
  return productArray.find(function (product) {
    return product.id == id;
  });
}

let flag=false;
function addToCart(id) 
{
flag=false;
  let item = getProductByID(products, id);

  cart.forEach(function(element){
    if(element.id==item.id){
      flag=true;
    }
  
  })
  if (flag) {
    alert("Don't add the same product again");
    return 0;
  }
  count += 1;
  document.getElementById("cart").innerText=count;
  document.getElementById("numb").innerText=count;
  
  cart.push(item);
  displayProducts(cart, "cart");
}

function removeFromCart(id) {
  let item = getProductByID(products,id);
  let index = cart.findIndex(function (product) {
    return product.id == id;
  });
  cart.splice(index, 1);
  count-=1;

  document.getElementById("numb").innerText = count;
  displayProducts(cart, "cart");
}

function filter(){
  let minv=document.getElementById("minp").value;
  let maxv = document.getElementById("maxp").value;
  let items= products.filter(function(itemsl){
    return itemsl.price>=minv && itemsl.price<=maxv;
  })
  displayProducts(items);
  document.getElementById("minp").value;
  document.getElementById("maxp").value;
}