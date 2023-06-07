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
    const GitHub = document.getElementById('GitHub');
    const ItchIo = document.getElementById('ItchIo');
    const Mail = document.getElementById('Mail');
    const Roblox = document.getElementById('Roblox');
    const Youtube = document.getElementById('Youtube');
    const SBtn = document.getElementById('StyleButton');
    const DC = document.getElementById('DC');
  
    if (localStorage.getItem("Style") === "Dark") {
      body.classList.remove('light');
      GitHub.src = "/svgs/white/github.svg";
      ItchIo.src = "/svgs/white/itchio.svg";
      Mail.src = "/svgs/white/mail.svg";
      Roblox.src = "/svgs/white/roblox.svg";
      Youtube.src = "/svgs/white/youtube.svg";
      SBtn.src = "/svgs/white/moon.svg";
      DC.src = "https://widgets.vendicated.dev/user?id=967174039594471570&theme=dark&banner=false&full-banner=false&rounded-corners=true&discord-icon=false&badges=false";
    } else if (localStorage.getItem("Style") === "Light") {
        body.classList.add('light');
        GitHub.src = "/svgs/black/github.svg";
        ItchIo.src = "/svgs/black/itchio.svg";
        Mail.src = "/svgs/black/mail.svg";
        Roblox.src = "/svgs/black/roblox.svg";
        Youtube.src = "/svgs/black/youtube.svg";
        SBtn.src = "/svgs/black/sun.svg";
        DC.src = "https://widgets.vendicated.dev/user?id=967174039594471570&theme=light&banner=false&full-banner=false&rounded-corners=true&discord-icon=false&badges=false";
    }
  };