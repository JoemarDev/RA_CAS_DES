const ToogleGameTab = (val) => {
    $('.links').removeClass('active')
    $('.game-container').hide();

    if (val === 1) {
        $(".live-box").show()
        $(".live").addClass('active')
        $('html, body').animate({
            scrollTop: $(".live").offset().top
        }, 600);

    }
    if (val === 2) {
        $(".slot-box").show()
        $(".slot").addClass('active')
        $('html, body').animate({
            scrollTop: $(".slot").offset().top
        }, 600);
    }
    if (val === 3) {
        $(".sports-box").show()
        $(".sports").addClass('active')
        $('html, body').animate({
            scrollTop: $(".sports").offset().top
        }, 600);
    }
    if (val === 4) {
        $(".arcade-box").show()
        $(".arcade").addClass('active')
        $('html, body').animate({
            scrollTop: $(".arcade").offset().top
        }, 600);
    }
}

const OpenLoginDialog = () => {
    $('body').css("overflowY", "hidden");
    $('.LOGIN_WRAPPER').show();
}

const CloseLoginDialog = () => {
    $('body').css("overflowY", "scroll");
    $('.LOGIN_WRAPPER').hide();
}

const OpenRegisterDialog = () => {
    $('body').css("overflowY", "hidden");
    $('.REGISTER_WRAPPER').show();
}

const CloseRegisterDialog = () => {
    $('body').css("overflowY", "scroll");
    $('.REGISTER_WRAPPER').hide();
}

const ToogleTransactionLists = (val) => {
    $('.transaction-title').removeClass('active')
    $('.transaction-list').hide();

    if (val === 1) {
        $(".deposit-lists").show()
        $(".dep").addClass('active')
    }
    if (val === 2) {
        $(".withdrawal-lists").show()
        $(".wid").addClass('active')
    }

}

let DefaultValue = 50_269_923_500.01
setInterval(() => {
    DefaultValue += Math.floor(Math.random() * 50);
    $('#odometer').html(DefaultValue)
}, 4000)