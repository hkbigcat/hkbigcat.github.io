document.addEventListener("click" , e=> {
    const isHamburger = e.target.matches("#hamburger");
    const isCloseBtn = e.target.closest(".closebtn");
    const isNav = e.target.closest("[data-nav]");
    const w = window.innerWidth;
    if (!isHamburger && isNav!= null && isCloseBtn == null && isNavLink==null)  return; 
    if (isHamburger) {
        if (w>1279)  { 
            document.getElementById("mySidenav").style.width = "320px";
        } else {
        document.getElementById("mySidenav").style.width = "100%";
        }
        document.getElementById("mySidenav").style.zIndex = "4";
        document.getElementById("mySidenav").style.display = "block";
        //document.getElementById("mySidenav").style.zIndex = 5;
        document.getElementById("mySidenav").style.opacity = "1";
        document.getElementById("hamburger").style.opacity = "0";
    } else {
        if (w>1279)  {
            document.getElementById("mySidenav").style.width = "0";
        } else document.getElementById("mySidenav").style.display = "none";
        document.getElementById("mySidenav").style.zIndex = 1;
        document.getElementById("mySidenav").style.opacity = "0";
        document.getElementById("hamburger").style.opacity = "1";             
    }
})


    
