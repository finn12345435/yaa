document.onvisibilitychange = function() {
    if (document.visibilityState === 'hidden') {
        document.title = "Please Come Back | Cartxrr";
        document.querySelector("link[rel='icon']").href = "/imgs/pleading.png";
    } else {
        document.title = "Cartxrr"
        document.querySelector("link[rel='icon']").href = "/imgs/cartxrr.png";
    }
  };

function opensecondary(){
    const second = document.getElementById('crewmates');
    const plus = document.getElementById('plus');
    
    if (plus.src.includes("/svgs/plus.svg")) {
        plus.src = "/svgs/plus2.svg";
        second.style.display = "flex";
    } else {
        plus.src = "/svgs/plus.svg";
        second.style.display = "none";
    }
}