 const button  = (document.querySelector("flows"));
 function addtext () {
     console.log("🌸🌼🌹🌺💐")
 }
 flows.onclick = addtext;





  document.getElementById("flows").addEventListener("click",
     function change () {
    this.innerHTML = '<img src="flowers.jpg" alt="Flowers" />';
  });
  document.getElementById("flows").style.color = "black";
  document.getElementById("flows").style.backgroundColor = "gold";