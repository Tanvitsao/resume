$(document).ready(function(){
    // 點擊 menu 滑到指定位置
    $('.scrollTop').click(function(e){
        e.preventDefault();
        const target = $(this).attr('href');
        const targetPos = $(target).offset().top;
        $('html, body').animate({scrollTop: targetPos +1}, 500);
    });

    // 滾動視窗效果
    $(window).scroll(function(){
        const scrollPos = $(window).scrollTop();
        const windowHeight = $(window).height();
        const documentHeight = $(document).height();
        
        // 滾到指定位置加上 class
        $('.scrollTop').each(function(){
            const target = $(this).attr('href');
            const targetPos = $(target).offset().top;
            const targetHeight = $(target).outerHeight();

            if(scrollPos >= targetPos && (targetPos + targetHeight) > scrollPos) {
                $('.scrollTop').removeClass('active');
                $(this).addClass('active');
            }else if( (windowHeight + scrollPos) == documentHeight ) {
                $('.scrollTop').removeClass('active');
                $('.scrollTop-bottom').addClass('active');
            }else {
                $(this).removeClass('active');
            }
        });

        // 滾到指定位置再顯示畫面
        $('.animated').each(function(){
            const thisPos = $(this).offset().top;
            if((windowHeight + scrollPos -200) >= thisPos ) {
                $(this).addClass('fade-in');
            }else {
                $(this).removeClass('fade-in');
            }
        });

    });
    // 漢堡選單
    $(".showmenu").click(function(e) {
		/* Act on the event */
        e.preventDefault();
		$(".nav").toggleClass('menu-show');
    });
});