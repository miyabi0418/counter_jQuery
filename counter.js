$("*").each(function () {
    var number = $(this).attr("data-ct-number");
    var duration = $(this).attr("data-ct-duration");

    //此元素.動畫(屬性物件，設定物件)
    $(this).animate({
        //記數:指定數字
        countNum: number
    }, {
        duration: duration,
        easing: "linear",
        step: function (now) {
            $(this).text(Math.floor(now))
        }
    });
})