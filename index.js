
let Weight = document.querySelector("#weight");
let height = document.querySelector("#height");

let weight_value = document.querySelector("#weight_value");
let height_value = document.querySelector("#height_value");

let Reset = document.querySelector("#Reset");
let submit = document.querySelector("#submit");
let bmiValue = document.querySelector("#bmiValue");
let bmiText = document.getElementById("bmiText");
let bmi = document.getElementById("bmi");
let img = document.getElementById("img");
let bmiContainer = document.getElementById("bmiContainer");


submit.addEventListener("click", (e) => {

    if (!Weight.value || !height.value) {
        alert("enter weight and height")
        return
    }
    bmi.style.color = "black";
    let WeightVal = Weight.value;
    let heightVal = height.value;
    let result = (((WeightVal) / (heightVal * heightVal)) * 10000).toFixed(1);

    bmiValue.innerHTML = result;

    if (result < 18.5) {
        console.log("Under weight")
        bmiValue.style.borderColor = "#f89f05ff"
        bmiText.style.color = "#eba834"
        bmiText.innerHTML = "Under weight"
        bmiContainer.style.backgroundImage = "linear-gradient(to right, rgba(235, 168, 52, 0.686), rgba(246, 191, 101, 0.7), rgba(255, 218, 153, 0.6))";
        bmiContainer.style.boxShadow = "0px 0px 30px rgba(235, 168, 52, 0.5)";
        bmiContainer.style.border="2px solid #f59e09ff"


    } else if (result >= 18.5 && result < 24.9) {
        bmiValue.style.borderColor = "green"
        bmiText.style.color = "green"

        bmiContainer.style.backgroundImage = "linear-gradient(to right, rgba(7, 57, 9, 0.69), rgba(23, 132, 45, 0.7), rgba(13, 73, 28, 0.33))"
        // console.log("Normal")
        bmiText.innerHTML = "Normal";
        bmiContainer.style.boxShadow = "0px 0px 30px rgba(23, 132, 45, 0.5)";
        bmiContainer.style.border="2px solid green"

    } else if (result >= 25 && result < 29.9) {
        bmiValue.style.borderColor = "#f14107ff"
        bmiText.style.color = "#eb6134"
        // console.log("Overweight")
        bmiText.innerHTML = "Over wight"
        bmiContainer.style.backgroundImage = "linear-gradient(to right, rgba(235, 97, 52, 0.686), rgba(247, 135, 84, 0.7), rgba(255, 185, 145, 0.6))";
        bmiContainer.style.boxShadow = "0px 0px 30px rgba(235, 97, 52, 0.5)";
        bmiContainer.style.border="2px solid #f94407ff"

    } else if (result > 30) {
        bmiValue.style.borderColor = "#fc0616ff"
        bmiText.style.color = "#ad242d"
        // console.log("Obese")
        bmiText.innerHTML = "Obese";
        bmiContainer.style.backgroundImage = "linear-gradient(to right, rgba(173, 36, 45, 0.686), rgba(210, 70, 80, 0.7), rgba(255, 170, 170, 0.6))";
        bmiContainer.style.boxShadow = "0px 0px 30px rgba(173, 36, 45, 0.5)";
        bmiContainer.style.border="2px solid #f10717ff"
    }
    weight_value.innerText = `Weight : ${weight.value} kg`;
    height_value.innerText = `Height : ${height.value} cm`;

    Weight.value = "";
    height.value = ""

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

const footInput = document.getElementById("foot");
const inchInput = document.getElementById("inch");
const cmOutput = document.getElementById("cm");
const copyBtn = document.getElementById("copybtn");

function convertToCm() {
    const feet = parseFloat(footInput.value) || 0;
    const inches = parseFloat(inchInput.value) || 0;
    const cm = (feet * 30.48) + (inches * 2.54);
    cmOutput.value = cm.toFixed(2);
}

footInput.addEventListener("input", convertToCm);
inchInput.addEventListener("input", convertToCm);

copyBtn.addEventListener("click", () => {
    cmOutput.select();
    // document.execCommand("copy");
    height.value = cmOutput.value;

    // alert(`Copied: ${cmOutput.value} cm`);
});

Reset.addEventListener("click", (e) => {
    Weight.value = "";
    height.value = "";
    footInput.value = "";
    inchInput.value = "";
    cmOutput.value = "";


    // Reset display text
    weight_value.innerText = "";
    height_value.innerText = "";
    bmiValue.innerText = "";
    bmiText.innerText = "";

    // Reset styles
    bmiValue.style.borderColor = "";
    bmiText.style.color = "";
    bmi.style.color = "";
    bmiContainer.style.boxShadow = "";
    bmiContainer.style.backgroundImage = "";
    bmiContainer.style.border=""
})
