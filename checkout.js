
let cartMath = document.querySelector(".cart-math");
const cartItems = JSON.parse(localStorage.getItem("cartItems"));
console.log(cartItems);

function grabCart() {
  for (let i = 0; i < cartItems.length; i++) {
    let item = cartItems[i];
    let selectedItem = document.createElement("div");
    let title = document.createElement("div");
    let img = document.createElement("img");
    title.innerHTML = `<h4>${item.name}</h4><p>${item.price}</p>`;
    selectedItem.classList.add("cartImg");
    img.setAttribute("src", item.image);
    selectedItem.append(img);
    selectedItem.append(title);
    let itemContainer = document.getElementById("title");
    itemContainer.append(selectedItem);
  }
  let total = 0;
  for (j = 0; j < cartItems.length; j++) {
    total += +cartItems[j].price;
  }

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
}

//****************** US STATES ************************ */
let usStates = [
  { name: " ", abbreviation: "" },
  { name: "ALABAMA", abbreviation: "AL" },
  { name: "ALASKA", abbreviation: "AK" },
  { name: "ARIZONA", abbreviation: "AZ" },
  { name: "ARKANSAS", abbreviation: "AR" },
  { name: "CALIFORNIA", abbreviation: "CA" },
  { name: "COLORADO", abbreviation: "CO" },
  { name: "CONNECTICUT", abbreviation: "CT" },
  { name: "DELAWARE", abbreviation: "DE" },
  { name: "FLORIDA", abbreviation: "FL" },
  { name: "GEORGIA", abbreviation: "GA" },
  { name: "GUAM", abbreviation: "GU" },
  { name: "HAWAII", abbreviation: "HI" },
  { name: "IDAHO", abbreviation: "ID" },
  { name: "ILLINOIS", abbreviation: "IL" },
  { name: "INDIANA", abbreviation: "IN" },
  { name: "IOWA", abbreviation: "IA" },
  { name: "KANSAS", abbreviation: "KS" },
  { name: "KENTUCKY", abbreviation: "KY" },
  { name: "LOUISIANA", abbreviation: "LA" },
  { name: "MAINE", abbreviation: "ME" },
  { name: "MARYLAND", abbreviation: "MD" },
  { name: "MASSACHUSETTS", abbreviation: "MA" },
  { name: "MICHIGAN", abbreviation: "MI" },
  { name: "MINNESOTA", abbreviation: "MN" },
  { name: "MISSISSIPPI", abbreviation: "MS" },
  { name: "MISSOURI", abbreviation: "MO" },
  { name: "MONTANA", abbreviation: "MT" },
  { name: "NEBRASKA", abbreviation: "NE" },
  { name: "NEVADA", abbreviation: "NV" },
  { name: "NEW HAMPSHIRE", abbreviation: "NH" },
  { name: "NEW JERSEY", abbreviation: "NJ" },
  { name: "NEW MEXICO", abbreviation: "NM" },
  { name: "NEW YORK", abbreviation: "NY" },
  { name: "NORTH CAROLINA", abbreviation: "NC" },
  { name: "NORTH DAKOTA", abbreviation: "ND" },
  { name: "OHIO", abbreviation: "OH" },
  { name: "OKLAHOMA", abbreviation: "OK" },
  { name: "OREGON", abbreviation: "OR" },
  { name: "PENNSYLVANIA", abbreviation: "PA" },
  { name: "PUERTO RICO", abbreviation: "PR" },
  { name: "RHODE ISLAND", abbreviation: "RI" },
  { name: "SOUTH CAROLINA", abbreviation: "SC" },
  { name: "SOUTH DAKOTA", abbreviation: "SD" },
  { name: "TENNESSEE", abbreviation: "TN" },
  { name: "TEXAS", abbreviation: "TX" },
  { name: "UTAH", abbreviation: "UT" },
  { name: "VERMONT", abbreviation: "VT" },
  { name: "VIRGINIA", abbreviation: "VA" },
  { name: "WASHINGTON", abbreviation: "WA" },
  { name: "WEST VIRGINIA", abbreviation: "WV" },
  { name: "WISCONSIN", abbreviation: "WI" },
  { name: "WYOMING", abbreviation: "WY" },
];

let stateSelect = document.getElementById("state");
function stateDrop() {
  for (let i = 0; i < usStates.length; i++) {
    let option = document.createElement("option");
    option.text = usStates[i].name;
    option.value = usStates[i].abbreviation;
    stateSelect.append(option);
  }
}
stateDrop();

//****************** Send payment info to Payment endpoint ********************** */

let submitDetails = () => {
  let phoneNumber = document.querySelector("#pNum").value;
  let firstName = document.querySelector("#fName").value;
  let lastName = document.querySelector("#lName").value;
  let pickUpTime = document.querySelector("#pTime").value;

  axios
    .post("http://localhost:4000/api/payment", {
      paymentInfo: { phoneNumber, firstName, lastName,pickUpTime  },
    })
    .then(() => {
      location.href = "./confirmation.html"; //redirects to confirmation page on submit click
    });
};

document.querySelector("#checkout").onclick = submitDetails;
grabCart();
