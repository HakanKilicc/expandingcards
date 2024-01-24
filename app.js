const imgcard = document.querySelectorAll(".img-card");

imgcard.forEach(element =>{
    element.addEventListener("click", (e)=>{
        RemoveActiveClasses();
        element.classList.add("active");
    })
})
function RemoveActiveClasses(){
    imgcard.forEach(element =>{
        element.classList.remove("active");
    })
}