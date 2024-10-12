var eventDown = new MouseEvent('mousedown', { bubbles: true, cancelable: true, view: window });
var eventUp = new MouseEvent('mouseup', { bubbles: true, cancelable: true, view: window });

setInterval(() => {
    var targetDiv = document.getElementsByTagName("div")[1];
    targetDiv.dispatchEvent(eventDown);
    targetDiv.dispatchEvent(eventUp);
}, 100); //100 = default , 50 = speed up