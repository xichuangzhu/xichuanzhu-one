var intervalId = 0;

adjustPosition();
$(window).resize(function () {
    adjustPosition();
});

getQuote();
intervalId = setInterval(getQuote, 8000);

$(window).focus(function () {
    console.log('in');
    if (!intervalId) {
        intervalId = setInterval(getQuote, 8000);
    }
});

$(window).blur(function () {
    console.log('out');
    clearInterval(intervalId);
    intervalId = 0;
});

/**
 * 获取摘录
 */
function getQuote() {
    $.ajax({
        url: 'http://www.xichuangzhu.com/api/get_random_quote',
        methods: 'get',
        dataType: 'json'
    }).done(function (quote) {
        $('.quote-wap').fadeOut(function () {
            $('.quote').text(quote.quote).attr('href', quote.url);
            //$('.work-link').attr('href', quote.url);
            //$('.author').text(quote.author);
            //$('.work').text("《" + quote.work + "》");
            $('.quote-wap').fadeIn('slow');
        });
    });
}

/**
 * 调整quote-wap位置
 */
function adjustPosition() {
    $('.quote-wap').css('marginTop', ($(window).height() - 100) / 2.0 - 20);
}

