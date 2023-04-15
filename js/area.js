const angle1=document.querySelector(".value-of-a");
const angle2=document.querySelector(".value-of-b");
const button=document.querySelector("#check");
const output=document.querySelector(".result");

button.addEventListener("click", function(){
  console.log("clicked");
  const val=Math.trunc(0.5*(angle1.value)*(angle2.value, 2));
    output.textContent="area of triangle is "+ val+"cm² 📐";
  
});