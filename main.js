let fit = document.querySelector(".fit"); let inch = document.querySelector(".inch");

fit.addEventListener("input", (e) => {

let i =fit.value * 12;

if (isNaN(i)) {

alert("please input a number");



} else {

inch.value = i;

}

});

inch.addEventListener("input",()=>{
  
  let i= inch.value/12
  if(!Number.isInteger(i)){
    let h= i.toFixed(2)
    fit.value=h
  }else{
    fit.value=i
  }
  
})