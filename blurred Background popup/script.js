const containerEl=document.querySelector(".container")
const btnEl=document.querySelector(".btn")
const popupcontainerEl=document.querySelector(".popup-container")
const closeiconEl=document.querySelector(".fa-solid")
btnEl.addEventListener("click",()=>{
    containerEl.classList.add("active");
    popupcontainerEl.classList.remove("active");
});
closeiconEl.addEventListener("click",()=>{
    containerEl.classList.remove("active");
    popupcontainerEl.classList.add("active");
});