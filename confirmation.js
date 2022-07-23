let getPaymentDetails = () => {
    axios.get("http://localhost:4000/api/payment").then((res) => {
      let first = document.querySelector(".first");
      first.innerHTML = `<H1>${res.data.firstName}</H1>`;
    });
  };
  // getPaymentDetails = () => {
  //   axios.get("http://localhost:4000/api/payment").then((res) => {
  //     let last = document.querySelector(".last");
  //     last.innerHTML = `<H1>${res.data.lastName}</H1>`;
  //   });
  // };
  // getPaymentDetails = () => {
  //   axios.get("http://localhost:4000/api/payment").then((res) => {
  //     let time = document.querySelector(".time");
  //     time.innerHTML = `<H1>${res.data.pickupTime}</H1>`;
  //   });
  // };
  window.onload = getPaymentDetails;
  