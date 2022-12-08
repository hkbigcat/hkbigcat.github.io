adjustbottom = () => {
    const p4 = document.getElementById("stockphoto4");
    if (p4==null) return;
    const contentHeight = p4.offsetHeight + 80;
    document.querySelector(".content").style.paddingBottom=contentHeight+"px"
}
window.addEventListener('resize', function(event){
    adjustbottom();
});        
adjustbottom();
document.addEventListener("click" , e=> {
    const isHamburger = e.target.matches("#hamburger");
    const isButton = e.target.matches("button");
    const isCloseBtn = e.target.closest(".closebtn");
    const isNav = e.target.closest("[data-nav]");
    const sample=document.getElementById("sample");
    const isSample=e.target.closest("#sample");
    if (isButton) return;
    if (!isHamburger && isNav!= null && isCloseBtn == null )  return; 
    if (isHamburger) {
        document.querySelector("nav").classList.add("openNav");
        document.querySelector("main").classList.add("mainHide");
        document.getElementById("hamburger").style.opacity = "0";
    } else {
        document.querySelector("nav").classList.remove("openNav");
        document.querySelector("main").classList.remove("mainHide");
        document.getElementById("hamburger").style.opacity = "1";
        if (sample===null || isSample) return;
        sample.style.display="none";
        sample.style.zIndex=1;
        document.querySelector(".content").style.display="block";           
    }
})
