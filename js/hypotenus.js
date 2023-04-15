const angle1=document.querySelector(".value-of-a");
const angle2=document.querySelector(".value-of-b");
const button=document.querySelector("#check");
const output=document.querySelector(".result");

button.addEventListener("click", function(){
  console.log("clicked");
  const val=Math.trunc(Math.sqrt(Math.pow(angle1.value, 2)+Math.pow(angle2.value, 2)));
    output.textContent="length of hypotenus is "+ val+"cm 📐";
  
});