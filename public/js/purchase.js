const increaseBtn = document.getElementById("increase");
const reduceBtn = document.getElementById("reduce");
const amountInput = document.getElementById("number");
const amountDs = document.getElementById("amount");
const copyId = document.getElementById("copy");
const purchase1 = document.getElementById("purchase1");
const purchase2 = document.getElementById("purchase2");
const purchase3 = document.getElementById("purchase3");
const email = document.getElementById("email");
const vvid = document.getElementById("vv");
const exx = document.getElementById("exx");
const finalHolder = document.getElementById("finalHolder");
const btca = document.getElementById("btcAddress");
const complain = document.getElementById("complain");


// get realtime btc value
const getBtc = (link) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        resolve(JSON.parse(request.responseText));
      } else if (request.readyState === 4) {
        reject("AN ERROR OCCURED");
      }
    });
    request.open("GET", link);
    request.send();
  });
};
//

document.getElementById("pri").innerHTML = `Price : $${sessionStorage.getItem("price")}`;
document.getElementById("bri").innerHTML = `Balance : $${sessionStorage.getItem("bal")}`;
///
//generate random order id 
const orderId = ()=>{
  let oi = `a0acc${Math.ceil(Math.random() * 10)}-fg9m${Math.floor(Math.random() * 10)}-asd${Math.ceil(Math.random()*10)}-aaa${Math.floor(Math.random()*10)}`;
  document.getElementById("orderId").innerHTML = `ORDER ID : ${oi}n`;
}
orderId();
//

if (sessionStorage.getItem("price") !== null) {
  amountDs.innerHTML = `$${sessionStorage.getItem("price")}`;
  sessionStorage.setItem("final", sessionStorage.getItem("price"));
  getBtc(
    `https://blockchain.info/tobtc?currency=USD&value=${sessionStorage.getItem(
      "price"
    )}`
  )
    .then((result) => {
      vvid.innerHTML = result;
      exx.innerHTML = result;
    })
    .catch((err) => console.log(err));
} else {
  sessionStorage.setItem("price", 75);
  sessionStorage.setItem("bal",1460);
  amountDs.innerHTML = `$${sessionStorage.getItem("price")}`;
}
//

increaseBtn.addEventListener("click", (result) => {
  amountInput.value = parseInt(amountInput.value) + 1;
  let newValue = sessionStorage.getItem("price") * parseInt(amountInput.value);
  amountDs.innerHTML = `$${newValue}`;
  sessionStorage.setItem("final", newValue);
  getBtc(`https://blockchain.info/tobtc?currency=USD&value=${newValue}`)
    .then((result) => {
      vvid.innerHTML = result;
      exx.innerHTML = result;
    })
    .catch((err) => console.log(err));
});
//
reduceBtn.addEventListener("click", (res) => {
  if (amountInput.value > 1) {
    amountInput.value = parseFloat(amountInput.value) - 1;
    let newValue =
      sessionStorage.getItem("price") * parseInt(amountInput.value);
    amountDs.innerHTML = `$${newValue}`;
    sessionStorage.setItem("final", newValue);
    getBtc(`https://blockchain.info/tobtc?currency=USD&value=${newValue}`)
      .then((result) => {
        vvid.innerHTML = result;
        exx.innerHTML = result;
      })
      .catch((err) => console.log(err));
  }
});
//tacs.style.display = "";
//
copyId.addEventListener("click", (result) => {
  //
  btca.style.display = "";
  finalHolder.style.display = "none";
  complain.style.display = "";
  let btcal = document.getElementById("btcAddress");
  btcal.select();
  btcal.setSelectionRange(0, 99999);
  document.execCommand("copy");
  
});

//
purchase1.style.display = "none";
finalHolder.style.display = "none";
purchase2.style.display = "";
purchase3.style.display = "none";
btca.style.display = "";
//
document.getElementById("purchase").addEventListener("click", (res) => {
  purchase1.style.display = "none";
  purchase2.style.display = "";
  document.getElementById("pri").innerHTML = `Price : $${sessionStorage.getItem("price")}`;;
  document.getElementById("bri").innerHTML = `Balance : $${sessionStorage.getItem("bal")}k`;
});
document.getElementById("next").addEventListener("click", (res) => {
  if (
    email.value.length > 0 &&
    email.value.includes("@") &&
    email.value.includes(".")
  ) {
    purchase2.style.display = "none";
    amountDs.style.display = "none";
    purchase3.style.display = "";
  } else {
    alert("ENTER A VALID EMAIL");
  }
});
//

document.getElementById("scan").addEventListener("click",e=>{
  e.preventDefault();
  complain.style.display = "none";
  finalHolder.style.display = "";
  btca.style.display = "none";
  //tacs.style.display = "none";
});
//
// temp
//