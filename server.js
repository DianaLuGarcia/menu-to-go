const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
let paymentInfo = {};

//************** Send payment info to update variable paymentInfo **************************

app.post("/api/payment", (req, res) => {
  paymentInfo = req.body.paymentInfo;
  res.sendStatus(200);
});

app.get("/api/payment", (req, res) => {
  res.status(200).send(paymentInfo);
});

app.listen(4000, () => console.log("up on 4000"));
