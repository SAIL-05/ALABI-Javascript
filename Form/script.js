document.addEventListener("DOMContentLoaded", () => {
  const sendBtn = document.getElementById("btn");

  sendBtn.addEventListener("click", () => {
      const name = document.getElementById("name").value.trim();
      const dept = document.getElementById("dept").value.trim();
      const matric = document.getElementById("matric").value.trim();
       const course = document.getElementById("course").value.trim();
      const admiss = document.getElementById("admiss").value.trim();
      if (!name || !dept || !matric || !course || !admiss) {
      alert("Please fill in all the fields.");
      return;
      
       }
       alert(`Welcome, ${name}!`);

  })
})
    

