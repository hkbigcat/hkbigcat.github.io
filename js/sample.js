sample= () => {
    document.getElementById("sampleclose").style.display="block";
    document.getElementById("sample").style.display="block";
    document.getElementById("sample").style.zIndex=4;
    document.querySelector(".content").style.display="none";
    
}
sampleclose= () => {
    document.getElementById("sample").style.display="none";
    document.getElementById("sampleclose").style.display="close";
    document.getElementById("sample").style.zIndex=1;
    document.querySelector(".content").style.display="block";
}