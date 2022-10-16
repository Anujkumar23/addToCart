products = [
  {
    id: 0,
    name: "T-shirt ",
    price: 200,
    imgSrc: "001.jpg",
    quantity:1,
  },
  {
    id: 1,
    name: "T-shirt ",
    price: 150,
    imgSrc: "002.jpg",
     quantity:1,
  },
    
  {
    id: 2,
    name: "T-shirt ",
    price: 250,
    imgSrc: "003.jpg",
    quantity:1,
    
  },
  {
    id: 3,
    name: "T-shirt ",
    price: 250,
    imgSrc: "004.jpg",
    quantity:1,
     
  },
];

let productElm = document.querySelector(".flex-left");
let cartItemsElm = document.querySelector(".cart-items");
let subtotalElm=document.querySelector(".subtotal")

function renderProduct() {
  products.forEach((product) => {
    productElm.innerHTML += `
    <div class="product-box">
      <div class="img-box"id="">
        <img src="${product.imgSrc}" alt="${product.name}" />
      </div>

      <section class="info">
        <h4>T-shirt</h4>
        <div class="price">
          <strong>$ ${product.price}</strong>
          </div>
          </section>
          <div class="button">
            <button onclick="addToCart(${product.id})">Add To Cart</button>
            </div>`;
  });
}
renderProduct();

let cart = [];
function addToCart(id) {
  // if product already exist in cart
  let cartItemIndex=cart.findIndex((item) =>item.id === id);
    
  if(cartItemIndex!==-1){
    cart[cartItemIndex].quantity++;
  }
  else {
    let item = products.find((product) => product.id === id);

    cart.push(item);
   
  }

  renderCartItems();
  
}

function renderCartItems() {
  cartItemsElm.innerHTML =""
  cart.forEach((item) => {
    console.log(item);
    cartItemsElm.innerHTML += `
     <div class="cart-item">
     <div class="item-info column1">
       <div class="img">
         <img src="${item.imgSrc}" alt="t-shirt1">
       </div>
       <div class="name">
         <h4>${item.name}</h4>
       </div>
     </div>
       <div class="unit-price ">
         $<span>${item.price}</span>
       </div>
       <div class="units ">
        <input type="number" id="num" value=${item.quantity} width=30%>
        <button id="btn" onclick="removeCartItem(${item.id})">Remove</button>
       </div>  
</div>`;
    
  });
}


function removeCartItem(id) {
  let index=cart.findIndex((item)=>item.id===id);
 
  let removeItem=cart.splice(index,1);
 
  renderCartItems();
 }