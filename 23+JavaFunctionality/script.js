let git = document.getElementById('g')
function addText (){
    git.innerText = 'funmibabe'
}

 let like = document.getElementsByClassName("lin")[0];
// like.addEventListener("click", 
//     function (){
//         like.innerText = "funmi"
//     });

like.addEventListener("click",
    function(){
        like.innerText = "funmi"
    }
);
like.style.color = "black"
like.style.borderRadius = "2px"
like.style.backgroundColor = "orange"

// let sweet = document.getElementById("me")

// function changeImage (){
//     sweet.innerHTML= '<img scr"istockphoto-2.jpg"/>';
// };