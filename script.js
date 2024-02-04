const Base_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"
const dropDown = document.querySelectorAll(".dropDown select");
const FromCurr = document.querySelector(".From select");
const ToCurr = document.querySelector(".To select");
const finalAmount = document.getElementById("#to")
for(let select of dropDown){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        select.append (newOption);
    }
    select.addEventListener("change",(event) =>{
        updateFlag(event.target);
    })
}
const updateFlag = (element) =>{
let currCode = element.value;
let countryCode = countryList[currCode];
let newSrc = "https://flagsapi.com/BE/flat/64.png";
let img = element.parentElement.querySelector("img");
img.src = newSrc;
};
const btn = document.getElementById("btn")
btn.addEventListener("click", async(event) => {
event.preventDefault();
let amount = document.getElementById("From")
let amountVal = amount.value;
if (amountVal <= 0 && amountVal == ""){
    amount.value = 1;
    amountVal = 1;
}
console.log(amountVal);

// console.log(FromCurr.value,ToCurr.value);
// console.log(FromCurr,ToCurr);
const URL = `${Base_URL}/${FromCurr.value.toLowerCase()}/${ToCurr.value.toUpperCase()}.json`
let response = await fetch(URL);
let data = await response.json();
let res = await(data[1].toLowerCase());
console.log(res);
let finalAmount = amountVal*res;
finalAmount.innerText = `${amountVal} ${FromCurr.value} = ${finalAmount} ${ToCurr.value}`
});