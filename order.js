let addItemId = 0;
let cartMath = document.querySelector(".cart-math");
let cart = [];

//************** Adds Item + Price to cart **************************

function addToCart(item, localStorageItem) {
  cart.push(item);
  disCart();
  disPrice();
  let ourItems = localStorage.getItem("cartItems");
  if (!ourItems) {
    ourItems = [];
  } else {
    console.log("cartItems:", ourItems);
    ourItems = JSON.parse(ourItems);
  }
  ourItems.push(localStorageItem);
  localStorage.setItem("cartItems", JSON.stringify(ourItems));
  // console.log("1. Cart:", cart);
  console.log(ourItems);

  // console.log("2. localStorage:", ourItems.length);
}

const cartObj = {}; //Object for localStorage

function disCart(id) {
  let cartItems = document.getElementById("title");
  //clears items in cart when adding new (to avoid duplicates)
  cartItems.innerHTML = "";

  for (let i = 0; i < cart.length; i++) {
    //************** places IMG + Title to cart on click *******************

    let item = cart[i]; //array for object within for Loop for localStorage
    let selectedItem = document.createElement("div");
    let img = document.createElement("img");
    selectedItem.classList.add("cartImg");
    selectedItem.setAttribute("id", addItemId);
    img.setAttribute("src", item.children[0].currentSrc);

    //************** adds menu item title to cart ********************

    let title = document.createElement("div");
    title.innerText = item.children[1].innerText;

    //************** adds menu item Instructions to cart **************

    let label = document.createElement("div");
    let select = document.createElement("span");
    label.innerText = item.children[2].children[0].innerText;
    select.innerText = item.children[2].children[1].value;
    console.log(cart.length);

    //*************** adds delete button to cart *********************

    let delBtn = document.createElement("button");
    delBtn.classList.add("margin");
    delBtn.innerText = "Delete";
    delBtn.addEventListener("click", () => {
      deleteItem(cart[i].innerText.split("\n")[0]);
      console.log("delete Button:", cart, i);
      localStorage.removeItem("item");
      console.log("Cart items after delete:", cart);
    });

    //*************** adds clearAll button to cart *********************

    let clearBtn = document.createElement("button");
    clearBtn = document.getElementById("clearAll");
    clearBtn.classList.add("margin");
    clearBtn.innerText = "Clear All";
    clearBtn.addEventListener("click", () => {
      deleteItem(cart);
      localStorage.clear();
      console.log("# of items in localStorage after clear all:", cart.length);
    });

    //*************** Append **********************

    label.append(select);
    selectedItem.append(img);
    selectedItem.append(title);
    selectedItem.append(label);
    selectedItem.append(delBtn);
    //selectedItem.append(clearBtn);
    cartItems.append(selectedItem);
  } //end for loop
} //end cart

//**********************localStorage Function**********************

//**********************Delete Function**********************

const deleteItem = (name) => {
  let index = cart.findIndex((item) => {
    return item.name === name;
  });

  cart.splice(index, 1);
  disCart(cart);
  disPrice(cart);
  let cartDelObj = localStorage.getItem("cartItems");
  console.log(cartDelObj);

  cartDelObj = JSON.parse(cartDelObj);
  index = cartDelObj.findIndex((item) => {
    console.log(item, name);
    return item?.name === name;
  });
  if (cartDelObj.length > 1) {
    console.log(index);
    cartDelObj = cartDelObj.splice(index, 1);
  } else {
    cartDelObj = [];
  }
  localStorage.setItem("cartItems", JSON.stringify(cartDelObj));
};

function disPrice() {
  let total = 0;
  for (i = 0; i < cart.length; i++) {
    total += +cart[i].getAttribute("name");
  }

  //**********************SUBTOTALS**************************

  let tax = total * 0.047;
  let subtotal = total + tax;
  cartMath.innerHTML = "";
  let h1 = document.createElement("h1");
  let h2 = document.createElement("h1");
  let h3 = document.createElement("h1");
  h1.innerText = `Total: $ ${total.toFixed(2)}`;
  h2.innerText = `Tax: $ ${tax.toFixed(2)}`;
  h3.innerText = `Subtotal: $ ${subtotal.toFixed(2)}`;
  cartMath.append(h1);
  cartMath.append(h2);
  cartMath.append(h3);
  console.log("3. Subtotal:", subtotal.toFixed(2));
}

localStorage
