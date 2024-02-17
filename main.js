let fit = document.querySelector(".fit"); let inch = document.querySelector(".inch");

fit.addEventListener("input", (e) => {

let i fit.value * 12;

if (isNaN(i)) {

alert("please input a number");

fit.value = "";

} else {

inch.value = i;

}

});

inch.addEventListener("input", (e) => {

let i inch.value / 12;

if (isNaN(i)) {

alert("please input a number");

inch.value = "";

} else if (Number.isInteger(i)) {

let hi.toFixed(2);

fit.value = h;

}

});