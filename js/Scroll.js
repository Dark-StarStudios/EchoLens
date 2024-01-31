// const scrollInfo = document.getElementById('scrollInfo');
const arrow_down = document.getElementsByClassName('arrow_down')[0];
const arrow_up = document.getElementsByClassName('arrow_up');

window.addEventListener('scroll', function() {
    // scrollInfo.innerText = 'Page scrolled: ' + window.scrollY + 'px';

    if(window.scrollY >= 250){
        // arrow_down.style.display = "none"
        arrow_down.style.fill = "#F2F2F2";
    }else{
        arrow_down.style.fill = "rgb(161, 161, 161)";
    }

    // if(window.scrollY >= 250){
    //     arrow_down.style.display = "none"
    // }

});