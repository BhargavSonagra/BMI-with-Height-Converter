
let Weight = document.querySelector("#weight");
let height = document.querySelector("#height");

let weight_value = document.querySelector("#weight_value");
let height_value = document.querySelector("#height_value");

let submit = document.querySelector("#submit");
let bmiValue = document.querySelector("#bmiValue");
let bmiText = document.getElementById("bmiText");
let bmi = document.getElementById("bmi");
let img = document.getElementById("img");


submit.addEventListener("click", (e) => {
    bmi.style.color = "black";
    let WeightVal = Weight.value;
    let heightVal = height.value;
    let result = (((WeightVal) / (heightVal * heightVal)) * 10000).toFixed(1);

    bmiValue.innerHTML = result;

    if (result < 18.5) {
        console.log("Under weight")
        bmiValue.style.borderColor = "#eba834"
        bmiText.style.color = "#eba834"
        bmiText.innerHTML = "Under weight"

    } else if (result >= 18.5 && result < 24.9) {
        bmiValue.style.borderColor = "green"
        bmiText.style.color = "green"
        // console.log("Normal")
        bmiText.innerHTML = "Normal"

    } else if (result >= 25 && result < 29.9) {
        bmiValue.style.borderColor = "#eb6134"
        bmiText.style.color = "#eb6134"
        // console.log("Overweight")
        bmiText.innerHTML = "Over wight"

    } else if (result > 30) {
        bmiValue.style.borderColor = "#ad242d"
        bmiText.style.color = "#ad242d"
        // console.log("Obese")
        bmiText.innerHTML = "Obese"
    }
weight_value.innerText = `Weight : ${weight.value} kg`;
height_value.innerText = `Height : ${height.value} cm`;

Weight.value ="";
height.value=""

})

// Close Button pop up

let closebtn = document.getElementById("closebtn");
closebtn.addEventListener('click', () => {
    high_converotr.style.display = "none";
})

// Click Here Button

let clickhere = document.getElementById("clickhere");
clickhere.addEventListener('click', () => {
    high_converotr.style.display = "block";
})

// foot and cm convert in pop up

let foot = document.getElementById("foot");
let cm = document.getElementById("cm");

foot.addEventListener('input', function () {
    let foot1 = parseFloat(this.value);
    cm.value = ((foot1) * 30.48).toFixed(2);
})
// Copy Button in pop up
let copybtn = document.getElementById("copybtn");
copybtn.addEventListener('click', () => {
    height.value = cm.value;
    high_converotr.style.display = "none";
})
