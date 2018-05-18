window.onload = function() {
  var calcinput = document.getElementById("inputtype");

  document.querySelector("button").addEventListener("click", function() {
    document.querySelector(".entire").style.display = "flex";
    document.querySelector("body").style.backgroundColor = "black";
      document.querySelector(".entire").style.backgroundColor="grey";
      document.querySelector("h4 button").style.backgroundColor="grey";
      document.querySelector(".entire").style.borderRadius="10px";
      document.querySelector(".entire").style.padding="10px 10px";
      document.querySelector("marquee").style.backgroundColor ="black";
  });
  document.getElementById("one").addEventListener("click", function() {
    calcinput.value = calcinput.value + "1";
  });
  document.getElementById("two").addEventListener("click", function() {
    calcinput.value = calcinput.value + "2";
  });
  document.getElementById("three").addEventListener("click", function() {
    calcinput.value = calcinput.value + "3";
  });
  document.getElementById("four").addEventListener("click", function() {
    calcinput.value = calcinput.value + "4";
  });
  document.getElementById("five").addEventListener("click", function() {
  
    calcinput.value = calcinput.value + "5";
  });
  document.getElementById("six").addEventListener("click", function() {
    calcinput.value = calcinput.value + "6";
  });
  document.getElementById("seven").addEventListener("click", function() {
    calcinput.value = calcinput.value + "7";
  });
  document.getElementById("eight").addEventListener("click", function() {
    calcinput.value = calcinput.value + "8";
  });
  document.getElementById("nine").addEventListener("click", function() {
    calcinput.value = calcinput.value + "9";
  });
  document.getElementById("zero").addEventListener("click", function() {
    calcinput.value = calcinput.value + "0";
  });
  document.getElementById("add").addEventListener("click", function() {
    calcinput.value = calcinput.value + "+";
  });
  document.getElementById("subtract").addEventListener("click", function() {
    calcinput.value = calcinput.value + "-";
  });
  document.getElementById("multiply").addEventListener("click", function() {
    calcinput.value = calcinput.value + "*";
  });
  document.getElementById("divide").addEventListener("click", function() {
    calcinput.value = calcinput.value + "/";
  });
  document.getElementById("point").addEventListener("click", function() {
    calcinput.value = calcinput.value + ".";
  });
  document.getElementById("Answer").addEventListener("click", function() {
    calcinput.value = eval(calcinput.value);
  });
   document.getElementById("Answer").addEventListener("dblclick", function() {
    calcinput.value = "";
  });
};
