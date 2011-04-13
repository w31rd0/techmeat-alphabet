(function ($) {
    var createAudio = function (url) {
        return $(document.createElement('embed')).attr({
            src: url,
            autostart: 'true',
            loop: 'false'
        });
    }
    // check if <audio> is supported and able to play our media
    if (!!document.createElement('audio').canPlayType) {
        $(document.createElement('audio'))
            .attr('src', 'snd/а.wav')
            .bind('loadeddata', function (e) {
                createAudio = function (url) {
                    return $(document.createElement('audio')).attr({
                        src: url,
                        autoplay: 'true'
                    });
                }
            });
    }
    function playSound(url) {
        $('#dummyspan').empty().append(createAudio(url));
    }
    $('li').click(function () {
        playSound($(this).find('span').attr('data-sound-url'));
        $(this).addClass('clicked');
        $(this).find('b').fadeIn(300);
        $(this).find('i').animate({
            width: '30',
            height: '30',
            fontSize: '26px',
            'line-height': '30px'
        }, 300);
        if($('li:not(.clicked)').length === 0) {
            setTimeout(function () {
                $('#winCont').fadeIn(300);
                $('#dummyspan').html("<embed src='snd/Молодец.wav' hidden=true autostart=true loop=false>");
                playSound('snd/Молодец.wav');
                $('#winCont span').click(function () {
                    playSound('snd/Попробуй_ещё.wav');
                    $('#winCont').fadeOut(300);
                    $('#dummyspan').html();
                    $('li').removeClass('clicked');
                    setTimeout(function () {
                        $('li').find('b').fadeOut(300);
                        $('li').find('i').animate({
                            width: '100',
                            height: '100',
                            fontSize: '72px',
                            'line-height': '100px'
                        }, 300);
                    }, 1000);
                });
            }, 2000);
        }
    });
}(jQuery));
