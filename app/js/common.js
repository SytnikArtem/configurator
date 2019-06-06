$(document).ready(function () {

    $('.config-close').click(function(e){
        e.preventDefault();
        $('.config').removeClass('active');
    });
    function checkRowHeight() {
        var rowHeight = $('.config-item-row.active').outerHeight();
        $('.config-item-change').height(rowHeight);

    }
    checkRowHeight();
    var rowIndex, totalQuestion = $('.config-item-row').length;


    $('.config-item-btn').click(function(e){
        rowIndex++;
        if (rowIndex - 1 < totalQuestion) {
            e.preventDefault();
            $('.config-item-row').eq(rowIndex - 1).addClass('active').siblings().removeClass('active');
            $('.config-item-img').eq(rowIndex - 1).addClass('active').siblings().removeClass('active');
            $('.config-item-numbers_current').text(rowIndex + 1);
        }

        if(rowIndex == totalQuestion) {
            $('.config-item-btn').text('Получить подарки');
        }
        checkRowHeight();
    });
    $('.config-form').submit(function(e){
        e.preventDefault();
        $('.config').removeClass('active');
        $('.config-choice').addClass('active');
    });
    $('.config-choice-label').click(function(){
        rowIndex = 1;
        $('.config-item-numbers_current').text(rowIndex + 1);
        $('.config-item-btn').text('Наступне питання');
        $('.config-item-img').eq(0).addClass('active').siblings().removeClass('active');
        $('.config-item-row').eq(0).addClass('active').siblings().removeClass('active');

       $('.config-steps').addClass('active');
       $('.config-choice').removeClass('active');
       if($(this).hasClass('config-choice-label_second')) {
           $('.config-item-img').eq('0').attr('src', 'img/men2.jpg');
       }
       else {
           $('.config-item-img').eq('0').attr('src', 'img/women2.jpg');
       }
        checkRowHeight();
    });
    $('.config-item-form').submit(function(e){
        e.preventDefault();
       $('.config-steps').removeClass('active');
        $('.config-animation').addClass('active');
        var arrText = ["ищем идеи", "ищем совпадения", "подбираем подарок"];


        for (var x = 0, ln = arrText.length; x < ln; x++) {
            setTimeout(function(y) {
                // console.log(arrText[y]);
                $('.config-animation-text-span').text(arrText[y]);
            }, x * 1500, x);
        }
        setTimeout(function(){
            $('.config-animation').removeClass('active');
            $('.result').addClass('active');
        }, 5000);
    });
    $('.result-btns_second').click(function(e){
        e.preventDefault();
        $('.result').removeClass('active');
        $('.config-choice').addClass('active');
    });
    checkHeightFlex();
    $('.config-choice-label_first').hover(function(){
        $('.rect1').addClass('active');
        $('.rect2').removeClass('active');
    });
    $('.config-choice-label_second').hover(function(){
        $('.rect2').addClass('active');
        $('.rect1').removeClass('active');
    });
});
function checkHeightFlex(){
    var popupHeight = $('.config-popup').outerHeight();
    if(popupHeight + 40 > $(window).height()){
        $('.config').addClass('flex-start');
    }
    else {
        $('.config').removeClass('flex-start');
    }
}