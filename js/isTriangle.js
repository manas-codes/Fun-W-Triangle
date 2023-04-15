const angle1=document.querySelector(".anglefirst");
const angle2=document.querySelector(".angle_2");
const angle3=document.querySelector(".angle_3");
const button=document.querySelector("#check");
const output=document.querySelector(".result");

button.addEventListener("click", function(){
  console.log("clicked");
  console.log(angle3.value);
  const sum= Number(angle1.value) +Number(angle2.value) +Number(angle3.value);
  if(sum===180){
    output.textContent="Sum of all angles is "+ sum;
    output.textContent="Yayy!! It's a triangle🎉";
    console.log=("it is a triangle");
  }
  else{
    console.log("not a triangle");
    output.textContent="Sum of all angles is "+ sum;
    output.textContent="Try again, It's not a triangle🙂";
  }
});