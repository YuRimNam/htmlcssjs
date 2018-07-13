function time () {
    var time= new Date();
    var ampm= 'AM';
    var hour=addZeros(timeDate.getHours(), 2);
    var min=addZeros(timeDate.getMinutes(), 2);
    var sec=addZeros(timeDate.getSeconds(), 2);

    if (hour>=12)
    {
        ampm='PM';
        hour=addZeros(hour-12, 2);
    }

    settimeout("time()", 1000);
    document.getElementById('clock').innerHTML = h+':'+m+':'+s;
}
