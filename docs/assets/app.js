$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 20) {
            $('#back-to-up').css('display', 'block');
        } else {
            $('#back-to-up').css('display', 'none');
        }
    });

    $('#back-to-up').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });
});
var timer = null;
function placeFooter() {
    if (($(document.body).height() + $('#footer').height()) < $(window).height()) {
        $("#footer").css({ position: "absolute", bottom: "0px" });
    } else {
        $("#footer").css({ position: "relative" });
    }
}
placeFooter();

$('#text').on('mousedown', () => {
    timer = setInterval(() => { placeFooter() }, 3);
})

$(window).on('mouseup', () => {
    clearInterval(timer)
    timer = null;
    placeFooter();
})

$(document).on('keyup', '#text', () => {
    let text = $('#text').val();
    text = splitCombineChar(text);
    $('#letters').text(charsCount(text));
    $('#words').text(wordsCount(text));
    $('#sentences').text(sentencesCount(text));
    $('#paragraphs').text(paragraphsCount(text));
    $('#alphapet').text(alphabetsCount(text));
    $('#alphanumeric').text(alphanumericCount(text));
    $('#alphanumeric-with-tashkeel').text(alphanumericWithTashkeelCount(text));
    const estimateReadingTime = calculateReadingTime(text);
    $('#reading-time').text(estimateReadingTime > 1 ? `${estimateReadingTime} دقائق` : `دقيقة واحدة`);
});
