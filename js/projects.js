function ChangeStyle(){
    if (localStorage.getItem("Style") == "Light") {
        localStorage.setItem("Style", "Dark"); 
        window.location.reload();
    } else { 
        localStorage.setItem("Style", "Light");
        window.location.reload();
    }
}

window.onload = function() {
    const body = document.getElementsByTagName("body")[0];
    const SBtn = document.getElementById('StyleButton');
  
    if (localStorage.getItem("Style") === "Dark") {
      body.classList.remove('light');
      SBtn.src = "/svgs/white/moon.svg";
    } else if (localStorage.getItem("Style") === "Light") {
        body.classList.add('light');
        SBtn.src = "/svgs/black/sun.svg";
    }
  };