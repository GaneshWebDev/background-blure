const imgE1=document.querySelector(".image-cont");
console.log(imgE1);
window.addEventListener("scroll",()=>{
    imgE1.style.opacity=1 - window.pageYOffset/900;
    /*console.log(window.pageYOffset)*/
    imgE1.style.backgroundSize=160-window.pageYOffset/12+"%";
})