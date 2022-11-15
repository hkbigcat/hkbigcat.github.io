sample= () => {
    document.getElementById("sampleclose").style.display="block";
    document.getElementById("sample").style.display="block";
    document.getElementById("sample").style.opacity=1;
    document.getElementById("sample").style.zIndex=3;
    
}
sampleclose= () => {
    document.getElementById("sample").style.opacity=0;
    document.getElementById("sampleclose").style.display="close";
    document.getElementById("sample").style.display="none";
    document.getElementById("sample").style.zIndex=1;
}