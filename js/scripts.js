document.addEventListener("click" , e=> {
    const isHamburger = e.target.matches("#hamburger");
    const isButton = e.target.matches("button");
    const isCloseBtn = e.target.closest(".closebtn");
    const isNav = e.target.closest("[data-nav]");
    const w = window.innerWidth;
    const sample=document.getElementById("sample");
    if (isButton) return;
    if (!isHamburger && isNav!= null && isCloseBtn == null )  return; 
    if (isHamburger) {
        if (w>1279)  {  
            document.getElementById("mySidenav").style.width = "320px";
            document.getElementById("mySidenav").style.visibility = "visible";
        } else {
            document.getElementById("mySidenav").style.width = "100%";
            document.getElementById("mySidenav").style.display = "block"; 
            document.querySelector("main").style.display="none";  
        }
        document.getElementById("mySidenav").style.opacity = "1";
        document.getElementById("hamburger").style.opacity = "0";
    } else {
        if (w>1279)  {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("mySidenav").style.visibility = "hidden";
        } else { 
            document.getElementById("mySidenav").style.display = "none";
            document.querySelector("main").style.display="block";
        }
        document.getElementById("hamburger").style.opacity = "1";
        document.getElementById("mySidenav").style.opacity = "0";
        if (sample===null) return;
        sample.style.opacity=0;
        sample.style.display="close";
        sample.style.display="none";
        sample.style.zIndex=1;            
    }
})


    
