window.addEventListener('mousemove', MouseFollower);
var mouseCursor = document.querySelector(".mouse-follower");

var height = window.innerHeight / 2;
var width = window.innerWidth / 2;

function MouseFollower() 
{
    var y = event.clientY;
    var x = event.clientX;

    setTimeout(() => {
        mouseCursor.style.marginLeft = `${x}px`;
        mouseCursor.style.marginTop = `${y}px`;
    }, 100);
}