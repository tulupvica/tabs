jQuery( document ).ready(function() {

    $('.tabs__item').not(":first").hide();

    $('.tabs__controls-item').on('click', function () {

        $('.tabs__controls-item').eq($(this).index()).addClass('tabs__controls-item_active')
            .siblings().removeClass('tabs__controls-item_active');

        $('.tabs__item').hide().eq($(this).index()).fadeIn(600);
    }).eq(0).addClass('tabs__controls-item_active');

});
