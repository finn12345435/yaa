function checkUrl() {
    var url = window.location.href;
    var queryString = window.location.search.replace('?', '');  
    var text = queryString;
    var decode = atob(queryString);
    window.open(decode, "_self");
    console.log("")
    console.log("URL: " + decode);
    console.log("")
}

function urlEncode() {
    var InputBox = document.getElementById('urlEncoder');
    var status = document.getElementById('urlStatus');
    var url2 = document.getElementById('url2');
    var encode = btoa(InputBox.value);
    var urlfrfr = "https://cartxrrcodes.github.io/link.html?" + encode;

    console.log("Copied: " + urlfrfr);
    console.log("")
    status.innerHTML = "URL COPIED TO CLIPBOARD";
    navigator.clipboard.writeText(urlfrfr);
    url2.innerHTML = "URL: " + urlfrfr;
    setTimeout(function(){
        status.innerHTML = "";
    }, 2000);
}