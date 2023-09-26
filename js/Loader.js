window.onbeforeunload = () => 
{
    window.scrollTo(0, 0);
}

window.onload = () => 
{
    window.scrollTo(0, 0);
    setTimeout(() => {
        document.body.style.overflowY = 'scroll';
        document.body.querySelector('.loader').style.opacity = '0';

        setTimeout(() => {
            document.body.querySelector('.loader').style.display = 'none';
        }, 620);
    }, 200);
}