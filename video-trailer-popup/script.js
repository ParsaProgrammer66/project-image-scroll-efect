const btnEl=document.querySelector(".btn");
const iconEl=document.querySelector(".icon");
const trailercontainerEl=document.querySelector(".trailercontainer");
btnEl.addEventListener("click",() =>{
    trailercontainerEl.classList.remove("active");
});
iconEl.addEventListener("click",() =>{
    trailercontainerEl.classList.add("active");
});