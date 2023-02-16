function displayTime(){
    var dateTime = new Date();
    // grab date/time
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var msec = dateTime.getMilliseconds();
    // get hours, minutes, seconds and milliseconds
    var ms = document.getElementById('ms');
    var msdot = document.getElementById('msdot');
    // millisecond stuff
    var session = document.getElementById('session');
    var strmin = "0";
    var strsec = "0";

    if(min < 10)
      min = strmin.concat(min);

    if(sec < 10)
      sec = strsec.concat(sec);

    if(hrs >= 12){
        session.innerHTML = 'PM';
        // if hours over 12 am then pick pm
    }else{
        // if not then pick am
        session.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs - 12;
        // remove 24 hour clock
    }

    // if enable milliseconds enable then
    if (document.getElementById("checkms").checked) {

      document.getElementById('msdot').innerHTML = ".";
      document.getElementById('ms').innerHTML = msec;
      // add .milliseconds
    }
    else{
      document.getElementById('msdot').innerHTML = " ";
      document.getElementById('ms').innerHTML = " ";
      // if not enabled then dont add and remove text
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
      // put hours minutes and seconds text

}
    setInterval(displayTime, 10);
    // set the delay to show what the current time is

    
    function changeColor(){
        var cv = document.getElementById('color').value;
        document.body.style.backgroundColor=cv;
        // hex code typed in background color box then change background color to input
      }

      function txtchangeColor(){
        var tcv = document.getElementById('txtcolor').value;
        var txt = document.getElementById('clock');
        txt.style.color = tcv;
        // hex code typed in text color box then change text color to input
      }