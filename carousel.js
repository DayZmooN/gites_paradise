let rightArrow = document.getElementById('right');
let leftArrow = document.getElementById('left')
let listSlide = document.getElementById('slider');

let mLeft = '0';






rightArrow.addEventListener('click', function () {

    if (mLeft - 500 >= -2000) {
        mLeft -= 500;

        listSlide.style.marginLeft = mLeft + 'px';
    }

});


leftArrow.addEventListener('click', function () {

    if (mLeft + 500 <= 0) {
        mLeft += 500;

        listSlide.style.marginLeft = mLeft + 'px';
    }

});
