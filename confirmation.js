let first = document.querySelector(".first");
let last = document.querySelector(".last");
let phone = document.querySelector(".phone");
let time = document.querySelector(".pickUpTime");
time.value //selected value



let getPaymentDetails = () => {
  axios.get("http://localhost:4000/api/payment").then((res) => {
    console.log(res);
    first.innerHTML = `<H2>${res.data.firstName}</H2>`;
  });

  axios.get("http://localhost:4000/api/payment").then((res) => {
    last.innerHTML = `<H2>${res.data.lastName}</H2>`;
  });

  axios.get("http://localhost:4000/api/payment").then((res) => {

    phone.innerHTML = `<H2>${res.data.phoneNumber}</H2>`;
  });
};

axios.get("http://localhost:4000/api/payment").then((res) => {


  time.innerHTML = `<H1>${res.data.pickUpTime}</H1>`;
});

getPaymentDetails();