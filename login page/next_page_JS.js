function startTime () {
    var time= new Date();
    var ampm= 'AM';
    var h=time.getHours();
    var min=time.getMinutes();
    var sec=time.getSeconds();
    min=checkTime(min);
    sec=checkTime(sec);
    document.getElementById('clock').innerHTML = h + ":" + min + ":" + sec + " " + ampm;
    if (h>=12)
    {
        ampm='PM';
        h=h-12;
    }

    var t=setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10)
    {
        i='0'+i;
    }
    return i;
} 