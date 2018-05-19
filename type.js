  document.addEventListener("DOMContentLoaded", function() {
  var content = document.getElementById("checking");
  var checklist = content.textContent.split("");
  content.textContent = "";
 

  document.querySelector("button").addEventListener("click",function()
  {
document.getElementById("checking").style.display="contents";
document.getElementById("dec").style.display="none";
document.getElementById("paragraph2").style.display="none";
document.querySelector("div input").style.display="flex";

  }
  )

  for (var j = 0; j < checklist.length; j++) {
    var createspan = document.createElement("span");

    createspan.textContent = checklist[j];

    content.appendChild(createspan);
  }

  document.addEventListener("input", function() {
    var copy = document.getElementById("typedcontent");
    var finalcopy = copy.value.split("");
    var orgcolor = document.querySelectorAll("span");

  for (var k = 0; k < orgcolor.length; k++) {
    orgcolor[k].style.backgroundColor = "transparent";
  }

    for (var i = 0; i < finalcopy.length; i++) {
      if (orgcolor[i].textContent == finalcopy[i]) {
        orgcolor[i].style.backgroundColor = "green";

        if(i>0){
        if(orgcolor[i-1].style.backgroundColor=="red"){
    orgcolor[i].style.backgroundColor = "red";
    alert("PLEASE CHECK WHAT YOU HAVE COPIED");
        }
  
        if(orgcolor[i-1].style.backgroundColor=="green"){
    orgcolor[i].style.backgroundColor = "green";
        }}
       /*if(checklist[i]==" ")
       {
       	copy.value="";
       }*/
      }
       else {
        orgcolor[i].style.backgroundColor = "red";
        alert("PLEASE CHECK WHAT YOU HAVE COPIED");
      }
    }  
  });

/*var minuteslabel=document.getElementById("minutes");
var secondslabel=document.getElementById("seconds");
var totalsec=0;
setInterval(setTime,1000);

function setTime()
{  
    ++totalsec;
	secondslabel.innerHTML=pad(totalsec%60);
    minuteslabel.innerHTML=pad(parseInt(totalsec/60));

}
pad(val)
{
var count=val;
 if(count.length<2)
               {
               	return "0"+count;
               }
 else
               {
                return count;
               }
  	        }
}*/

});
