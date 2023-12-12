var arrow = document.getElementById('arrow');
var slidebar = document.getElementById('slidebar');

arrow.addEventListener('click', () => {
    if (slidebar.classList.contains('slidebarLeaving')) {
        slidebar.classList.remove('slidebarLeaving')
        slidebar.classList.add('slidebarEntering')
        arrow.classList.remove('arrowRightToLeft')
        arrow.classList.add('arrowLeftToRight')
    } else {
        slidebar.classList.remove('slidebarEntering')
        slidebar.classList.add('slidebarLeaving')
        arrow.classList.remove('arrowLeftToRight')
        arrow.classList.add('arrowRightToLeft')
    }
});