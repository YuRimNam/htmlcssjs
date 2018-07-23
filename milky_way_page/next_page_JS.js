function startTime () {
    var time= new Date();
    var ampm= 'AM';
    var h=time.getHours();
    var min=time.getMinutes();
    var sec=time.getSeconds();
    min=checkTime(min);
    sec=checkTime(sec);
    
    if (h>=12)
    {
        ampm='PM';
        h=h-12;
    }

    document.getElementById('clock').innerHTML = h + ":" + min + ":" + sec + " " + ampm;
    var t=setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10)
    {
        i='0'+i;
    }
    return i;
}