// const scrollInfo = document.getElementById('scrollInfo');
const arrow_down = document.getElementsByClassName('arrowDown')[0];
// const arrow_down = document.getElementsById('arrowDown');

window.addEventListener('scroll', function() {
    // scrollInfo.innerText = 'Page scrolled: ' + window.scrollY + 'px';

    if(arrow_down){
        if(window.scrollY >= 250){
            // arrow_down.style.display = "none"
            // arrow_down.style.fill = "#F2F2F2";
            arrow_down.style.border.color = "#F2F2F2";
        }else{
            // arrow_down.style.fill = "rgb(161, 161, 161)";
            arrow_down.style.border.color = "rgb(128, 128, 128)";
        }
    }

    // if(window.scrollY >= 250){
    //     arrow_down.style.display = "none"
    // }

});